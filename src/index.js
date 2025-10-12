import "./style.css";
import foodFactory from "./foodFactory";

import generateMenu from "./menu";
import generateAbout from "./about";
import generateHome from "./home";

let foodF = new foodFactory();


const homeButton = document.querySelector('#home');
const menuButton = document.querySelector('#menu');
const aboutButton = document.querySelector('#about');

const buttons = [homeButton, menuButton, aboutButton];
let currentPage = null;

const deselectButtons = () => {
    for (let b of buttons) {
        b.removeAttribute('selected');
    }
}

menuButton.addEventListener('click', () => {
    if (currentPage === menuButton) {
        return;
    }
    deselectButtons();
    menuButton.setAttribute('selected', '');
    generateMenu(foodF);
})

homeButton.addEventListener('click', () => {
    if (currentPage === homeButton) {
        return;
    }
    deselectButtons();
    homeButton.setAttribute('selected', '');
    generateHome();
})

aboutButton.addEventListener('click', () => {
    if (currentPage === aboutButton) {
        return;
    }
    deselectButtons();
    aboutButton.setAttribute('selected', '');
    generateAbout();
})
