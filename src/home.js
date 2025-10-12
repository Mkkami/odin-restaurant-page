export default function generateHome() {
    const content = document.querySelector('#content');
    content.replaceChildren();

    const home = document.createElement('h2');
    home.textContent = 'Welcome';

    const desc = document.createElement('div');
    desc.textContent = "This is a restaurant page inspired by Dead Cells."
    desc.classList.add("desc");

    content.appendChild(home);
    content.appendChild(desc);
}