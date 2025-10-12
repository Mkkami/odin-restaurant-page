export default function generateAbout() {
    const content = document.querySelector('#content');
    content.replaceChildren();

    const about = document.createElement('h2');
    about.textContent = 'This is about page';
    content.appendChild(about);
}