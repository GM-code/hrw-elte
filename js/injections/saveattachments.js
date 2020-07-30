/*
    Copyright(c) 2020 Gordon Mueller

    This software is provided 'as-is', without any express or implied
    warranty. In no event will the authors be held liable for any damages
    arising from the use of this software.

    Permission is granted to anyone to use this software for any purpose,
    including commercial applications, and to alter it and redistribute it
    freely, subject to the following restrictions:

    1. The origin of this software must not be misrepresented; you must not
    claim that you wrote the original software. If you use this software
    in a product, an acknowledgment in the product documentation would be
    appreciated but is not required.
    2. Altered source versions must be plainly marked as such, and must not be
    misrepresented as being the original software.
    3. This notice may not be removed or altered from any source distribution.

*/

'use strict';

function saveZipAs(zip, zipFilename) {
    zip.generateAsync({ type: 'blob' }).then(function (content) {
        saveAs(content, zipFilename);
    });

}

function generateZIP (zipFilename, urls) {
    var zip = new JSZip();
    var count = 0;

    urls.forEach(function (url, i) {
        var filename = url.split("/").pop();
        JSZipUtils.getBinaryContent(url, function (err, data) {
            if (err) {
                throw err; 
            }
            zip.file(filename, data, { binary: true });
            count++;
            if (count === urls.length) {
                saveZipAs(zip, zipFilename);
            }
        });
    });
}

function saveAttachments() {
    // generate array of attchment urls
    let attachmentAnchors = document.querySelectorAll(".attachments a");
    let urls = [];
    attachmentAnchors.forEach(function (item, i) {
        urls.push(item.href.substring(0, item.href.indexOf('?')));
    });

    // generate filename
    let params = (new URL(document.location)).searchParams;
    let attempt = params.get("attempt");
    let zipFilename = "attachments-" + attempt + ".zip";

    generateZIP(zipFilename, urls);
} saveAttachments();
