import {Food, FoodSection} from './food.js';

const images = require.context('./img', false, /\.(png)$/);

export default function generateMenu(foodSections) {
    const content = document.querySelector("#content");
    content.replaceChildren();

    for (var foodSection of foodSections) {
        content.appendChild(createFoodSection(foodSection));
    }
    
}

function createFoodSection(foodSection) {
    const section = document.createElement('div');
    section.classList.add('food-section');

    const title = document.createElement('h2');
    title.textContent = foodSection.name;

    const grid = document.createElement('div');
    grid.classList.add('grid');

    const foods = foodSection.foods;
    for (let f of foods) {
        let card = createFoodCard(f);
        grid.appendChild(card);
    }
    section.appendChild(title);
    section.appendChild(grid);
    return section;
}

function createFoodCard(food) {
    const card = document.createElement('div');
    card.classList.add('card')

    const img = document.createElement('img');
    img.classList.add('food-img');

    const name = document.createElement('p');
    name.classList.add('name');

    const descDiv = document.createElement('div');
    descDiv.classList.add('description');

    const description = document.createElement('p');

    const price = document.createElement('div');
    price.classList.add('price');

    const goldImg = document.createElement('img');
    goldImg.classList.add('gold-img');
    goldImg.src = images(`./Gold_Currency_Icon.png`);

    price.textContent = food.price;
    description.textContent = food.description;
    name.textContent = food.name;
    img.src = images(`./${food.image}`);

    price.appendChild(goldImg);

    descDiv.appendChild(description);
    descDiv.appendChild(price);

    card.appendChild(img)
    card.appendChild(name);
    card.appendChild(descDiv);

    return card;
}