"use strict"

const arrHeaderLinks = document.querySelectorAll('.header-navigation a');
document.querySelector('.header-navigation ul').onclick = function (event) {
    for (let i = 0; i < arrHeaderLinks.length; i++) {
        if (event.target == arrHeaderLinks[i]) {
            arrHeaderLinks.forEach(element => element.classList.remove('header-navigation_onclick'));
            arrHeaderLinks[i].classList.add('header-navigation_onclick');
        }
    }
}


document.querySelector('.mobile_vertical').onclick = function () {
    if (document.querySelector('.mobile_vertical').getAttribute('src') == 'assets/mobile-vertical.png') {
        document.querySelector('.mobile_vertical').setAttribute('src', 'assets/phone-vert-off.png');
    } else
        document.querySelector('.mobile_vertical').setAttribute('src', 'assets/mobile-vertical.png');

}

document.querySelector('.mobile_horizontal').onclick = function () {
    if (document.querySelector('.mobile_horizontal').getAttribute('src') == 'assets/mobile-horizontal.png') {
        document.querySelector('.mobile_horizontal').setAttribute('src', 'assets/phone-hor-off.png');
    } else
        document.querySelector('.mobile_horizontal').setAttribute('src', 'assets/mobile-horizontal.png');

}

document.querySelector('.mobile_3item').onclick = function () {
    if (document.querySelector('.mobile_3item').getAttribute('src') == 'assets/Slide-2-on.png') {
        document.querySelector('.mobile_3item').setAttribute('src', 'assets/Slide-2-off.png');
    } else
        document.querySelector('.mobile_3item').setAttribute('src', 'assets/Slide-2-on.png');

}

//------------------------carousel
document.querySelector('.left-btn').onclick = animateFramesLeft;
document.querySelector('.right-btn').onclick = animateFramesRight;
let firstFrameLeft;
let secondFrameLeft;
let firstFrame = document.querySelector(".first__frame");
let secondFrame = document.querySelector(".second__frame");

function enableLeftButton() {
    document.querySelector('.left-btn').style.pointerEvents = 'auto';
}

function enableRightButton() {
    document.querySelector('.right-btn').style.pointerEvents = 'auto';
}

function animateFramesLeft() {
    document.querySelector('.left-btn').style.pointerEvents = 'none';  //disable button while animate
    window.setTimeout(enableLeftButton, 2000); //enable button after animate
    firstFrameLeft = (window.getComputedStyle(firstFrame).left.split('px'))[0];
    secondFrameLeft = (window.getComputedStyle(secondFrame).left.split('px'))[0];
    if (+firstFrameLeft == -1020) {
        firstFrameLeft = 1020;
        document.querySelector('.section').style.backgroundColor = '#648BF0';
    }
    if (+secondFrameLeft == -1020) {
        document.querySelector('.section').style.backgroundColor = '#f06c64';
        secondFrameLeft = 1020;}
    document.querySelector(".first__frame").animate([
        {left: `${+firstFrameLeft}px`},
        {left: `${+firstFrameLeft - 1020}px`}
    ], {
        duration: 2000,
        easing: "cubic-bezier(.43,-0.29,.58,1.28)",
        fill: "forwards",
    });
    document.querySelector(".second__frame").animate([
        {left: `${+secondFrameLeft}px`},
        {left: `${+secondFrameLeft - 1020}px`}
    ], {
        duration: 2000,
        easing: "cubic-bezier(.43,-0.29,.58,1.28)",
        fill: "forwards",
    });
}

function animateFramesRight() {
    document.querySelector('.right-btn').style.pointerEvents = 'none';  //disable button while animate
    window.setTimeout(enableRightButton, 2000);
    firstFrameLeft = (window.getComputedStyle(firstFrame).left.split('px'))[0];
    secondFrameLeft = (window.getComputedStyle(secondFrame).left.split('px'))[0];
    if (+firstFrameLeft == 1020) {
        firstFrameLeft = -1020;
        document.querySelector('.section').style.backgroundColor = '#648BF0';
    }
    if (+secondFrameLeft == 1020) {
        secondFrameLeft = -1020;
        document.querySelector('.section').style.backgroundColor = '#f06c64';
    }
    document.querySelector(".first__frame").animate([
        {left: `${+firstFrameLeft}px`},
        {left: `${+firstFrameLeft + 1020}px`}
    ], {
        duration: 2000,
        easing: "cubic-bezier(.43,-0.29,.58,1.28)",
        fill: "forwards",
    });
    document.querySelector(".second__frame").animate([
        {left: `${+secondFrameLeft}px`},
        {left: `${+secondFrameLeft + 1020}px`}
    ], {
        duration: 2000,
        easing: "cubic-bezier(.43,-0.29,.58,1.28)",
        fill: "forwards",
    });
}

//------------------------end carousel
