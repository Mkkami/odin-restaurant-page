import {baguette} from "./img/Major-bag-baguette-96x96.png"
export class Food {
    constructor(name, description, price, image) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.image = image;
    }
}

export class FoodSection {
    constructor(name, foods) {
        this.name = name;
        this.foods = foods;
    }
}