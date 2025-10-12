export default function generateHome() {
    const content = document.querySelector('#content');
    content.replaceChildren();

    const home = document.createElement('h2');
    home.textContent = 'This is home';
    content.appendChild(home);
}