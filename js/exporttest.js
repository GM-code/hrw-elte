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

function runDownload(e) {
    chrome.tabs.executeScript({ file: 'js/injections/saveattachments.js' });
}

function runPrint(e) {
    chrome.tabs.executeScript({ code: 'window.print();' });
}

function runFilter(e) {
    let stripHistory = document.querySelector("#history").checked;
    let stripComment = document.querySelector("#comment").checked;
    let stripOutcome = document.querySelector("#outcome").checked;
    let stripLayout = document.querySelector("#layout").checked;

    if (stripHistory) {
        chrome.tabs.executeScript({
            code:"document.querySelectorAll('.history').forEach(item => { item.style.display = 'none'; });"
        });
    }
    if (stripComment) {
        chrome.tabs.executeScript({
            code: "document.querySelectorAll('.comment').forEach(item => { item.style.display = 'none'; });"
        });
    }
    if (stripOutcome) {
        chrome.tabs.executeScript({
            code:"document.querySelectorAll('.outcome').forEach(item => { item.style.display = 'none'; });"
        });
    }
    if (stripLayout) {
        chrome.tabs.executeScript({ file: 'js/injections/simplifylayout.js' });
    }
}


document.addEventListener('DOMContentLoaded', function () {
    chrome.storage.local.get(null, function (data) {
        document.querySelector("#history").checked = data.history;
        document.querySelector("#comment").checked = data.comment;
        document.querySelector("#outcome").checked = data.outcome;
        document.querySelector("#layout").checked = data.layout;
    });

    document.querySelector('#apply').addEventListener('click', runFilter);
    document.querySelector('#print').addEventListener('click', runPrint);
    document.querySelector('#download').addEventListener('click', runDownload);

    const checkboxHistory = document.querySelector('#history');
    checkboxHistory.addEventListener('change', (event) => {
        chrome.storage.local.set({ history: event.target.checked });
    });
    const checkboxComment = document.querySelector('#comment');
    checkboxComment.addEventListener('change', (event) => {
        chrome.storage.local.set({ comment: event.target.checked });
    });
    const checkboxOutcome = document.querySelector('#outcome');
    checkboxOutcome.addEventListener('change', (event) => {
        chrome.storage.local.set({ outcome: event.target.checked });
    });
    const checkboxLayout = document.querySelector('#layout');
    checkboxLayout.addEventListener('change', (event) => {
        chrome.storage.local.set({ layout: event.target.checked });
    });
});
