"use strict";
exports.__esModule = true;
exports.bell = exports.start = exports.options = void 0;
var dashboard_json_1 = require("./dashboard.json");
// const boxes = require('./dashboard.json');
// use tsc filename.ts to compile
console.log(dashboard_json_1["default"]);
function options() {
    var elems = document.getElementsByClassName('head-options');
    var hams = document.getElementsByClassName('hamburger');
    for (var i = 0; i < elems.length; i += 1) {
        var ele = elems[i];
        var ham = hams[i];
        ele.style.display = 'block';
        ele.style.animation = 'cssAnimation 6s forwards';
        ham.style.background = '#FFFFFF 0% 0% no-repeat padding-box';
    }
    setTimeout(function () {
        for (var i = 0; i < elems.length; i += 1) {
            var ele = elems[i];
            var ham = hams[i];
            ele.style.display = 'none';
            ham.style.background = 'none';
        }
    }, 6000);
}
exports.options = options;
function start() {
    var elems = document.getElementsByClassName('notify');
    var ham = document.getElementsByClassName('notification_icon');
    var badge = document.getElementsByClassName('badge-icon');
    for (var i = 0; i < elems.length; i += 1) {
        var ele = elems[i];
        var ha = ham[i];
        var bad = badge[i];
        ele.style.display = 'block';
        ele.style.animation = 'cssAnimation 6s forwards';
        ha.style.background = '#FFFFFF 0% 0% no-repeat padding-box';
        bad.style.display = 'none';
    }
    setTimeout(function () {
        for (var i = 0; i < elems.length; i += 1) {
            var ele = elems[i];
            var ha = ham[i];
            var bad = badge[i];
            ele.style.display = 'none';
            ha.style.background = 'none';
            bad.style.display = 'block';
        }
    }, 6000);
}
exports.start = start;
function bell() {
    console.log('Hitesh');
    var slides = document.getElementsByClassName('bell-icon');
    var hams = document.getElementsByClassName('notification');
    var badges = document.getElementsByClassName('badge-bell');
    for (var i = 0; i < slides.length; i++) {
        var slide = slides[i];
        slide.style.display = "block";
        slide.style.animation = 'cssAnimation 6s forwards';
        var ham = hams[i];
        ham.style.background = '#FFFFFF 0% 0% no-repeat padding-box';
        var badge = badges[i];
        badge.style.display = 'none';
    }
    setTimeout(function () {
        console.log('leave');
        for (var i = 0; i < slides.length; i++) {
            var slide = slides[i];
            slide.style.display = "none";
            var ham = hams[i];
            ham.style.background = 'none';
            var badge = badges[i];
            badge.style.display = 'block';
        }
    }, 6000);
}
exports.bell = bell;
