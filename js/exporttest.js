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

function updateLayout(e) {
    let stripLayout = document.querySelector("#layout").checked;
    if (stripLayout) {
        chrome.tabs.executeScript({ file: 'js/injections/simplelayout.js' });
    }
    else {
        chrome.tabs.executeScript({ file: 'js/injections/normallayout.js' });
    }
}

function updateHistory() {
    let showComment = document.querySelector("#comment").checked ? 'block' : 'none';
    chrome.tabs.executeScript({
        code: "document.querySelectorAll('.comment').forEach(item => { item.style.display = '" + showComment + "'; });"
    });
}
function updateComment() {
    let showHistory = document.querySelector("#history").checked ? 'flex' : 'none';
    chrome.tabs.executeScript({
        code: "document.querySelectorAll('.history').forEach(item => { item.style.display = '" + showHistory + "'; });"
    });
}
function updateOutcome() {
    let showOutcome = document.querySelector("#outcome").checked ? 'block' : 'none';
    chrome.tabs.executeScript({
        code: "document.querySelectorAll('.outcome').forEach(item => { item.style.display = '" + showOutcome + "'; });"
    });
}

document.addEventListener('DOMContentLoaded', function () {
    chrome.storage.local.get(null, function (data) {
        document.querySelector("#history").checked = data.showhistory;
        document.querySelector("#comment").checked = data.showcomment;
        document.querySelector("#outcome").checked = data.showoutcome;
        document.querySelector("#layout").checked = data.simplelayout;

        updateHistory();
        updateComment();
        updateOutcome();
        if (document.querySelector("#layout").checked) {
            updateLayout();
        }
    });

    document.querySelector('#print').addEventListener('click', runPrint);
    document.querySelector('#download').addEventListener('click', runDownload);

    const checkboxHistory = document.querySelector('#history');
    checkboxHistory.addEventListener('change', (event) => {
        chrome.storage.local.set({ showhistory: event.target.checked });
        updateComment();
    });
    const checkboxComment = document.querySelector('#comment');
    checkboxComment.addEventListener('change', (event) => {
        chrome.storage.local.set({ showcomment: event.target.checked });
        updateHistory();
    });
    const checkboxOutcome = document.querySelector('#outcome');
    checkboxOutcome.addEventListener('change', (event) => {
        chrome.storage.local.set({ showoutcome: event.target.checked });
        updateOutcome();
    });
    const checkboxLayout = document.querySelector('#layout');
    checkboxLayout.addEventListener('change', (event) => {
        chrome.storage.local.set({ simplelayout: event.target.checked });
        updateLayout();
    });
});
