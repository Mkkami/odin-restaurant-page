export default function generateAbout() {
    const content = document.querySelector('#content');
    content.replaceChildren();

    const about = document.createElement('h2');
    about.textContent = 'About';
    
    const desc = document.createElement('div');
    desc.textContent = "Dead Cells is a roguelike, Castlevania-inspired action-platformer, allowing you to explore a sprawling, ever-changing castle… assuming you’re able to fight your way past its keepers. To beat the game you’ll have to master 2D souls-like like combat with the ever present threat of permadeath looming. No checkpoints. Kill, die, learn, repeat."
    desc.classList.add("desc");

    content.appendChild(about);
    content.appendChild(desc);
}