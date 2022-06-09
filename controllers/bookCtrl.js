const books = [
    { id: 1, name: 'Headfirst JS', price: 40, inStock: true },
    { id: 2, name: 'Clean Coder', price: 100, inStock: false },
    { id: 3, name: 'Clean Code', price: 120, inStock: true },
];
class BookCtrl {

    get(req, res) {
        res.status(200);
        res.json(books);
    }

    // summary & detail
    getById(req, res) {
        const id = +req.params.id;
        console.log(req.params, "Parameters");
        let book;
        for (let i = 0; i < books.length; i++) {
            if (id === books[i].id) {
                book = books[i];
            }
        }

        res.status(200);
        res.json(book);
    }

    // create
    create(req, res) {
        const payload = req.body;
        books.push(payload);
        
        res.status(201); //Created
        res.send();
    }
}

module.exports = new BookCtrl();