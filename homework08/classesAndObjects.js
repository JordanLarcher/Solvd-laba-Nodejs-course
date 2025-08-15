/**Homework 8
*Task
*Design and implement an object-oriented program in JavaScript to simulate the 
*functioning of an online bookstore. This assignment will test your understanding 
*of classes, encapsulation, inheritance, and polymorphism.
**/


// Part 1: Class Design 

class Book {
    constructor(title, author, isbn, price, availability) {
        this.title = title;
        this.author = title;
        this.isbn = isbn;
        this.price = price;
        this.availability = availability;
    }


    // Decrease the availability 
    decreaseAvailability(quantity) {
        if (this.quantity >= quantity) {
            this.availability -= quantity;
            return true;
        }
        return false;
    }
}


// User class 

class User {
    constructor(name, email, userId) {
        this.name = name;
        this.email = email;
        this.userId = userId;
    }

}

// Simulates the Cart class
class Cart {
    constructor(user) {
        this.user = user;
        this.books = [];
    }


    // Method to add books to the cart 
    addBookToCart(book, quantity) {
        if (book.availability >= quantity) {
            this.books.push({ book, quantity });
            console.log(`${book.title} added to ${user.name} cart`);
        } else {
            console.log("Not enough stock")
        }

    }

    // Delete a book from cart by its ISBN
    removeBook(isbn) {
        this.books = this.books.filter(item => item.book.isbn !== isbn);
        console.log("Book removed from the cart");
    }

    // Calculate total 
    calculateTotal() {
        return this.books.reduce((total, item) => {
            return total + item.book.price * quantity;
        }, 0);
    }
}


// Representation of an order 
class Order{
    constructor(user, cart){
        this.user = user;
        this.books = cart.books;
        this.totalPrice = cart.calculateTotal();
        this.orderDate = new Date();
    }


    processOrder() {
        this.books.forEach(({ book, quantity }) => {
            book.decreaseAvailability(quantity);
        });
        console.log("")
    }

}



class FictionBook extends Book {
    constructor(title, author, isbn, price, availability, genre) {
        super(title, author, isbn, price, availability);
        this.genre = genre;
    }
}

class NonFictionBook extends Book {
    constructor(title, author, isbn, price, availability, topic) {
        super(title, author, isbn, price, availability);
        this.topic = topic;
    }
}


// --- Parte 2 y 3: Implementation and demonstration  ---

console.log('\n--- Task 8: Online Library (POO) ---');

// Create some books
const book1 = new FictionBook("El Hobbit", "J.R.R. Tolkien", "978-0345339683", 15.99, 10, "Fantasía");
const book2 = new NonFictionBook("Sapiens", "Yuval Noah Harari", "978-0062316097", 22.50, 5, "Historia");
const book3 = new Book("Duna", "Frank Herbert", "978-0441013593", 18.00, 0); // No disponible

// Create users
const user1 = new User("Ana", "ana@example.com", "user001");
const user2 = new User("Luis", "luis@example.com", "user002");

// Simulate interactions
// This person add books to its cart 
const cartAna = new Cart(user1);
cartAna.addBook(book1, 1); 
cartAna.addBook(book2, 2); 
cartAna.addBook(book3, 1); 


const orderAna = new Order(user1, cartAna);
orderAna.processOrder();