import { createBaseThemes, toggleThemeBar } from './themeFunctions.js';

window.onload = () => {
    checkForPageOverflow();
    createBaseThemes();
    document.querySelector('.navTheme').addEventListener('click',  toggleThemeBar);
    document.querySelector('.themeSelectorOverlay').addEventListener('click', toggleThemeBar);
    document.querySelector('.themeClose').addEventListener('click',  toggleThemeBar);
    // var themes contains an object of all Theme Arrays that contain a name and an object of all colors.
}

/* ------- Functions -------*/

function checkForPageOverflow(){
    let head = document.getElementsByClassName("headerWrapper")[0];
    let navi = document.getElementsByClassName("navWrapper")[0];
    let main = document.getElementsByClassName("mainWrapper")[0];
    let foot = document.getElementsByClassName("footerWrapper")[0];
    if (document.getElementsByTagName("body")[0].offsetHeight < window.innerHeight) {
        foot.style.position = "fixed";
        foot.style.bottom = "0";
        main.style.height = window.innerHeight - head.offsetHeight - navi.offsetHeight - foot.offsetHeight +  "px";
    }
    document.getElementsByClassName("themeSelectorOverlay")[0].style.height = main.offsetHeight + navi.offsetHeight + "px";
    document.getElementsByClassName("themeSelectorPanel")[0].style.height = main.offsetHeight + navi.offsetHeight + "px";
}

