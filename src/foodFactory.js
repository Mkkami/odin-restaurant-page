import {Food, FoodSection} from './food.js'

export default function foodFactory() {
    let foodSections = [];
    let foodArr = [];
    foodArr.push(new Food('Kebab', 'Carnivore', 200, 'Minor-carni-kebab-96x96.png'));
    foodArr.push(new Food('Carrot', 'Vegetarian', 100, 'Minor-vege-carrot-96x96.png'));
    foodArr.push(new Food('Guts', 'Monster', 50, 'Minor-mons-guts-96x96.png'));
    foodArr.push(new Food('Cherries', 'Fruitarian', 150, 'Minor-fruit-cherry-96x96.png'));
    foodArr.push(new Food('Pastry', 'Castlevaniesque', 300, 'Minor-castle-cake-96x96.png'));
    foodArr.push(new Food('"Le Croissant"', 'Baguette', 200, 'Minor-bag-croissant-96x96.png'));
    foodArr.push(new Food('Small medkit', 'Half-Life', 500, 'Smallmedkit.png'));
    foodArr.push(new Food('Gruyère', 'Cheese', 150, 'Minor-cheese-wedge.png'));

    let minorFoods = new FoodSection('Minor foods', foodArr);
    foodArr = []; 
    foodArr.push(new Food('Drumstick', 'Carnivore', 400,'Major-carni-chicken-96x96.png'));
    foodArr.push(new Food('Big ol\' radish', 'Vegetarian', 200,'Major-vege-radish-96x96.png'));
    foodArr.push(new Food('Monster\'s eye', 'Monster', 50,'Major-mons-monstereye-96x96.png'));
    foodArr.push(new Food('Watermelon', 'Fruitarian', 300,'Major-fruit-watermelon-96x96.png'));
    foodArr.push(new Food('Turkey', 'Castlevaniesque', 600,'Major-carni-chicken-96x96.png'));
    foodArr.push(new Food('"La Baguette"', 'Baguette', 400,'Major-bag-baguette-96x96.png'));
    foodArr.push(new Food('Large medkit', 'Half-Life', 1000, 'Medkit.png'));
    foodArr.push(new Food('Camembert', 'Cheese', 300,'Major-cheese-wheel.png'));
    
    let majorFoods = new FoodSection('Major foods', foodArr);

    foodSections.push(minorFoods);
    foodSections.push(majorFoods);

    return foodSections;
}