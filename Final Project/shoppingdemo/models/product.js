let counter = 0;

class Product {
    constructor(id, title, description, price, imageUrl, quantity) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.imageUrl = imageUrl;
        this.quantity = quantity;
    }

    

    save(){
        this.id = ++counter; //start with 1;
        db.push(this);
        return this;
    }

    edit(){
        const index = db.findIndex(prod => prod.id == this.id);
        db.splice(index, 1, this);
        return this;
    }

    

    static getAll(){
        return db;
    }

    static deleteById(prodId){
        const index = db.findIndex(prod => prod.id == prodId);
        const deletedProd = db[index];
        db.splice(index, 1);
        return deletedProd;
    }

    static getById(prodId){
        const index = db.findIndex(prod => prod.id == prodId);
        if(index>-1){
            return db[index];
        }else{
            throw new Error("Not Found");
        }
    }
}
let db = [new Product(1001, "Fortress Blood", "Fortress Blood", 25,"/images/book1.jpg", 15), 
            new Product(1002, "Annual Report 2019 2020", "Annual Report 2019 2020", 12,"/images/book2.jpg", 25),
            new Product(1003, "Book Cover Design Formula", "Book Cover Design Formula", 28,"/images/book3.jpg", 17), 
            new Product(1004, "A million to one", "A million to one", 17,"/images/book4.jpg", 8),  
            new Product(1005, "The King of Drugs", "The King of Drugs", 18,"/images/book5.jpg", 9)];
module.exports = Product;