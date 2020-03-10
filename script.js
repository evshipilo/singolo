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


document.querySelector('.mobile_vertical').onclick = function (){
    if(document.querySelector('.mobile_vertical').getAttribute('src')=='assets/mobile-vertical.png'){
        document.querySelector('.mobile_vertical').setAttribute('src', 'assets/phone-vert-off.png');
    }
    else
        document.querySelector('.mobile_vertical').setAttribute('src', 'assets/mobile-vertical.png');

}

document.querySelector('.mobile_horizontal').onclick = function (){
    if(document.querySelector('.mobile_horizontal').getAttribute('src')=='assets/mobile-horizontal.png'){
        document.querySelector('.mobile_horizontal').setAttribute('src', 'assets/phone-hor-off.png');
    }
    else
        document.querySelector('.mobile_horizontal').setAttribute('src', 'assets/mobile-horizontal.png');

}
