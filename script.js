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
