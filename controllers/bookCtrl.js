class BookCtrl {

    get(req, res) {
        const books = [
            { id: 1, name: 'Headfirst JS', price: 40, inStock: true },
            { id: 2, name: 'Clean Coder', price: 100, inStock: false },
            { id: 3, name: 'Clean Code', price: 120, inStock: true },
        ];
        res.status(200); 
        res.json(books);
    }
}

module.exports = new BookCtrl();