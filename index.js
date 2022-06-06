// entry point
// server: machine
// latency
// server: software
// tomcat, apache, IIS, nodejs, whatsapp
// www. example.com
// 24 * 7
// web api, web app
// http server port:3000 (logical)
// http port: 80
// https: 443
// express js
const http = require('http');

function handler(req, res) {
    // routing
    switch (req.url) {
        case '/':
            res.write("Node API");
            break;
        case '/products':
            res.write("List of products");
            break;
        case '/books':
            const books = [
                { id: 1, name: 'Headfirst JS', price: 40, inStock: true },
                { id: 2, name: 'Clean Coder', price: 100, inStock: false },
                { id: 3, name: 'Clean Code', price: 120, inStock: true },
            ];
            res.write(JSON.stringify(books));
            break;
        case "/authors":
            res.write("List of authors");
            break;

        default:
            res.write("Not found");
            break;
    }
    res.end();
}

// higher order function
const server = http.createServer(handler);

server.listen(3000, function () {
    console.log("Server is running on port 3000!");
});
