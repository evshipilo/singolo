"use strict"

//------------------scroll to begin (wtf)
function startScroll() {
    window.scrollTo(0, 0);
}

window.setTimeout(startScroll, 100);

//-----------------scroll to sections

const arrHeaderLinks = document.querySelectorAll('.header-navigation a');
document.querySelector('.header-navigation ul').onclick = function (event) {
    for (let i = 0; i < arrHeaderLinks.length; i++) {
        if (event.target == arrHeaderLinks[i]) {
            arrHeaderLinks.forEach(element => element.classList.remove('header-navigation_onclick'));
            arrHeaderLinks[i].classList.add('header-navigation_onclick');
            event.preventDefault();
            if (i == 0) {
                document.querySelector('.point1').scrollIntoView({
                    block: "end",
                    inline: "nearest",
                    behavior: "smooth"
                });
            }
            if (i == 1) {
                document.querySelector('.point2').scrollIntoView({
                    block: "center",
                    inline: "nearest",
                    behavior: "smooth"
                });
            }
            if (i == 2) {
                document.querySelector('.point3').scrollIntoView({
                    block: "center",
                    inline: "nearest",
                    behavior: "smooth"
                });
            }
            if (i == 3) {
                document.querySelector('.point4').scrollIntoView({
                    block: "center",
                    inline: "nearest",
                    behavior: "smooth"
                });
            }
            if (i == 4) {
                document.querySelector('.point5').scrollIntoView({
                    block: "center",
                    inline: "nearest",
                    behavior: "smooth"
                });
            }

        }
    }
}

//--------------change phone pictures

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
        secondFrameLeft = 1020;
    }
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
//----------------change gallery
const arrGalleryPicturesLinks = document.querySelectorAll('.gallery img');
const arrGalleryPicturesSrc = [];
arrGalleryPicturesLinks.forEach(element => arrGalleryPicturesSrc.push(element.getAttribute('src')));
console.log(arrGalleryPicturesSrc);
// function makeRandomArr(a, b) {
//     return Math.random() - 0.5;
// }
//
// const randomArr1 = arrGalleryPicturesSrc.sort(makeRandomArr).slice(0); //slice(0) create a new copy of array with a new link
// const randomArr2 = arrGalleryPicturesSrc.sort(makeRandomArr).slice(0);
// const randomArr3 = arrGalleryPicturesSrc.sort(makeRandomArr).slice(0);
// const randomArr4 = arrGalleryPicturesSrc.sort(makeRandomArr).slice(0);

const arrGalleryLinks = document.querySelectorAll('.gallery-buttons button');

const randomArr1=["assets/s2-smile.jpg","assets/s2-black.jpg",
    "assets/s2-robot.jpg","assets/s2-animals.jpg","assets/s2-sdk.jpg","assets/s2-robots.jpg",
    "assets/s2-birds.jpg","assets/s2-beast.jpg","assets/s2-words.jpg", "assets/s2-beast2.jpg",
    "assets/s2-abstract.jpg","assets/s2-ship.jpg"];
const randomArr2=["assets/s2-black.jpg",
    "assets/s2-robot.jpg","assets/s2-animals.jpg","assets/s2-sdk.jpg","assets/s2-robots.jpg",
    "assets/s2-birds.jpg","assets/s2-beast.jpg","assets/s2-words.jpg", "assets/s2-beast2.jpg",
    "assets/s2-abstract.jpg","assets/s2-ship.jpg","assets/s2-smile.jpg"];
const randomArr3=["assets/s2-robot.jpg","assets/s2-animals.jpg","assets/s2-sdk.jpg","assets/s2-robots.jpg",
    "assets/s2-birds.jpg","assets/s2-beast.jpg","assets/s2-words.jpg", "assets/s2-beast2.jpg",
    "assets/s2-abstract.jpg","assets/s2-ship.jpg","assets/s2-smile.jpg","assets/s2-black.jpg"];
const randomArr4=["assets/s2-animals.jpg","assets/s2-sdk.jpg","assets/s2-robots.jpg",
    "assets/s2-birds.jpg","assets/s2-beast.jpg","assets/s2-words.jpg", "assets/s2-beast2.jpg",
    "assets/s2-abstract.jpg","assets/s2-ship.jpg","assets/s2-smile.jpg","assets/s2-black.jpg",
    "assets/s2-robot.jpg"];

document.querySelector('.gallery-buttons').onclick = function (event) {
    for (let i = 0; i < arrGalleryLinks.length; i++) {
        if (event.target == arrGalleryLinks[i]) {
            console.log(event.target);
            arrGalleryLinks.forEach(element => element.classList.remove('gallery-button_onclick'));
            arrGalleryLinks[i].classList.add('gallery-button_onclick');
            if (i == 0) {
                for (let j = 0; j < 12; j++) {
                    arrGalleryPicturesLinks[j].setAttribute('src', randomArr1[j]);
                }
            }
            if (i == 1) {
                for (let j = 0; j < 12; j++) {
                    arrGalleryPicturesLinks[j].setAttribute('src', randomArr2[j]);
                }
            }
            if (i == 2) {
                for (let j = 0; j < 12; j++) {
                    arrGalleryPicturesLinks[j].setAttribute('src', randomArr3[j]);
                }
            }
            if (i == 3) {
                for (let j = 0; j < 12; j++) {
                    arrGalleryPicturesLinks[j].setAttribute('src', randomArr4[j]);
                }
            }
        }
    }
}

document.querySelector('.gallery').onclick = function (event) {
    for (let i = 0; i < arrGalleryPicturesLinks.length; i++) {
        if (event.target == arrGalleryPicturesLinks[i]) {
            console.log(event.target);
            arrGalleryPicturesLinks.forEach(element => element.classList.remove('gallery-img_onclick'));
            arrGalleryPicturesLinks[i].classList.add('gallery-img_onclick');
        }
    }
}
