const books = [
    { id: 1, name: 'Headfirst JS', price: 40, inStock: true },
    { id: 2, name: 'Clean Coder', price: 100, inStock: false },
    { id: 3, name: 'Clean Code', price: 120, inStock: true },
];
class BookCtrl {

    // constructor() {
    //     this.create = this.create.bind(this);
    // }

    get(req, res) {
        res.status(200);
        res.json(books);
    }

    // summary & detail
    getById(req, res) {
        const id = +req.params.id;
        let book;
        for (let i = 0; i < books.length; i++) {
            if (id === books[i].id) {
                book = books[i];
            }
        }

        if (book) {
            res.status(200);
            res.json(book);
        } else {
            res.status(404);
            res.send('Not found');
        }
    }


    isPayloadValid(payload) {
        return payload.id && payload.name && payload.price;
    }

    // create
    create = (req, res) => {
        // validation
        const payload = req.body;

        if (this.isPayloadValid(payload)) {
            books.push(payload);

            res.status(201); //Created
            res.send();
        } else {
            res.status(400); //bad request
            res.send("Invalid payload");
        }
    }

    delete = (req, res) => {
        const id = +req.params.id;
        for (let i = 0; i < books.length; i++) {
            if (books[i].id === id) {
                books.splice(i, 1);
                break;
            }
        }

        res.status(204);
        res.send();
    }

    update = (req, res) => {
        const id = +req.params.id;
        const payload = req.body;

        for (let i = 0; i < books.length; i++) {
            if (books[i].id === id) {
                books[i].name = payload.name;
                books[i].price = payload.price;
            }
        }

        res.status(204);
        res.send();
    }
}

module.exports = new BookCtrl();