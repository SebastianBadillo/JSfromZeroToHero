// Classes Finally

class Product {


    constructor(name, price) { // this is the constructor, I am going to cry
        this.name = name;
        this.price = price;
    }

    formatProduct() {
        return `The product ${this.name} has a value of $${this.price}`;
    }

    // Getters

    getPrice() {
        return this.price;
    }
}

const item1 = new Product('Desktop', 900);
const item2 = new Product('Book', 500);

console.log(item1.formatProduct());
console.log(item2);
console.log(item2.getPrice());
console.log(item2.formatProduct());


class Book extends Product {
    constructor(name = "", price = 0, isbn = "") {
        super(name, price);
        this.isbn = isbn;
    }
    formatProduct() {
        return `${super.formatProduct()} with the isbn ${this.isbn}`
    }
}

const book1 = new Book('How to do the work', 900, '#FTRFX');

console.log(book1.formatProduct());
console.log(book1.getPrice());

