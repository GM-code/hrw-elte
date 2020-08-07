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

// Header
document.querySelectorAll('#page-header > div > div').forEach(item => {
    item.style.backgroundColor = 'white';
    item.style.backgroundSize = '0% 0%';
    item.style.color = 'black';
});

// remove navigation bar on the left
document.querySelectorAll('body').forEach(item => {
    item.classList.remove("drawer-open-left");
});
document.querySelectorAll('#nav-drawer').forEach(item => {
    item.classList.add("closed");
    item.setAttribute("aria-hidden", "true");
});

var changeDisplayElements = [
    '#page-wrapper > nav', //top header
    'footer', // footer
    '#mod_quiz_navblock', // quiz navigation
    '#dropdown-3', '#back-to-top', '.context-header-settings-menu', // some ui elements
    '#region-main > div > div > div.m-t-2.m-b-1', '.mod_quiz-next-nav', '.submitbtns' // navigation below test items
];

changeDisplayElements.forEach(
    selector => {
        document.querySelectorAll(selector).forEach(
            item => { item.style.display = 'none'; }
        )
    }
);

// remove background
document.querySelectorAll('body').forEach(item => { item.style.backgroundColor = 'white'; });

// fix dropzone redraw
window.dispatchEvent(new Event('resize'));
 