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

// Cleanup
document.querySelectorAll('#page-header > div > div').forEach(item => { item.style.background='white'; item.style.color = 'black';});

// remove navigation bar on the left
document.querySelectorAll('#nav-drawer').forEach(item => { item.style.display = 'none'; });
document.querySelectorAll('#page-mod-quiz-review').forEach(item => { item.style.marginLeft = '0px'; item.style.marginTop = '-3.6em';});
document.querySelectorAll('body').forEach(item => { item.classList.remove("drawer-open-left"); });

// remove top header
document.querySelectorAll('#page-wrapper > nav').forEach(item => { item.style.display = 'none'; });

// remove footer
document.querySelectorAll('footer').forEach(item => { item.style.display = 'none'; });

// remove quiz navigation
document.querySelectorAll('#mod_quiz_navblock').forEach(item => { item.style.display = 'none'; });

// remove some ui elements
document.querySelectorAll('#dropdown-3').forEach(item => { item.style.display = 'none'; });
document.querySelectorAll('#back-to-top').forEach(item => { item.style.display = 'none'; });
document.querySelectorAll('.context-header-settings-menu').forEach(item => { item.style.display = 'none'; });

// remove navigation below test items
document.querySelectorAll('#region-main > div > div > div.m-t-2.m-b-1').forEach(item => { item.style.display = 'none'; });
document.querySelectorAll('.mod_quiz-next-nav').forEach(item => { item.style.display = 'none'; });
document.querySelectorAll('.submitbtns').forEach(item => { item.style.display = 'none'; });

// remove background
document.querySelectorAll('body').forEach(item => { item.style.backgroundColor = 'white'; });


// fix dropzone redraw
window.dispatchEvent(new Event('resize'));
 