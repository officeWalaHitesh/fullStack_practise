"use strict";
exports.__esModule = true;
exports.bell = exports.start = exports.options = void 0;
function options() {
    console.log('Hitesh');
    var elems = Array.from(document.getElementsByClassName('head-options'));
    // document.getElementsByClassName('head-options');
    var ham = Array.from(document.getElementsByClassName('hamburger'));
    // document.getElementsByClassName('hamburger');
    for (var i = 0; i < elems.length; i += 1) {
        elems[i].style.display = 'block';
        elems[i].style.animation = 'cssAnimation 6s forwards';
        ham[i].style.background = '#FFFFFF 0% 0% no-repeat padding-box';
    }
    setTimeout(function () {
        console.log('leave');
        // var elems = document.getElementsByClassName('head-options');
        for (var i = 0; i < elems.length; i += 1) {
            elems[i].style.display = 'none';
            ham[i].style.background = 'none';
            // elems[i].style.animation = 'cssAnimation 5s forwards';
        }
    }, 6000);
    // document.getElementsByClassName('head-options').style. = "cssAnimation 2s forwards";
}
exports.options = options;
function start() {
    console.log('Hitesh');
    var elems = Array.from(document.getElementsByClassName('notify'));
    // var elems = document.getElementsByClassName('notify');
    var ham = Array.from(document.getElementsByClassName('notification_icon'));
    // var ham = document.getElementsByClassName('notification_icon');
    var badge = Array.from(document.getElementsByClassName('badge-icon'));
    // var badge = document.getElementsByClassName('badge-icon');
    for (var i = 0; i < elems.length; i += 1) {
        elems[i].style.display = 'block';
        elems[i].style.animation = 'cssAnimation 6s forwards';
        ham[i].style.background = '#FFFFFF 0% 0% no-repeat padding-box';
        badge[i].style.display = 'none';
    }
    setTimeout(function () {
        console.log('leave');
        // var elems = document.getElementsByClassName('notify');
        for (var i = 0; i < elems.length; i += 1) {
            elems[i].style.display = 'none';
            ham[i].style.background = 'none';
            badge[i].style.display = 'block';
            // elems[i].style.animation = 'cssAnimation 5s forwards';
        }
    }, 6000);
}
exports.start = start;
function bell() {
    console.log('Hitesh');
    var elems = Array.from(document.getElementsByClassName('bell-icon'));
    // var elems = document.getElementsByClassName('bell-icon');
    var ham = Array.from(document.getElementsByClassName('notification'));
    // var ham = document.getElementsByClassName('notification');
    var badge = Array.from(document.getElementsByClassName('badge-bell'));
    // var badge = document.getElementsByClassName('badge-bell');
    for (var i = 0; i < elems.length; i += 1) {
        elems[i].style.display = 'block';
        elems[i].style.animation = 'cssAnimation 6s forwards';
        ham[i].style.background = '#FFFFFF 0% 0% no-repeat padding-box';
        badge[i].style.display = 'none';
    }
    setTimeout(function () {
        console.log('leave');
        // var elems = document.getElementsByClassName('badge-bell');
        for (var i = 0; i < elems.length; i += 1) {
            elems[i].style.display = 'none';
            ham[i].style.background = 'none';
            badge[i].style.display = 'block';
            // elems[i].style.animation = 'cssAnimation 5s forwards';
        }
    }, 6000);
}
exports.bell = bell;
// const mouseTarget = document.getElementById("ham");
// mouseTarget.addEventListener("mouseenter", (e) => {
//   mouseTarget.style.border = "5px dotted orange";
// //   enterEventCount++;
// //   addListItem(`This is mouseenter event ${enterEventCount}.`);
// });
// $(document).ready(function() {
//     console.log('dis');
//     $(".head-options").hide();
//     $("#ham").click(function() {
//         $(".head-options").show();    // or .fadeIn() for transition
//     });
// });
