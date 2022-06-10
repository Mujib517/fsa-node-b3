const express = require('express');
const bodyParser = require('body-parser');
// common js
// enterprise applications
const defaultRouter = require('./routes/defaultRouter');
const bookRouter = require('./routes/bookRouter');
const app = express();

app.listen(3000, function () {
    console.log('Server is running on 3000');
});

app.use(bodyParser.json());

// register routing
// top to bottom
app.use('/', defaultRouter);
app.use('/api/books', bookRouter);

// status codes
// 1xx : information
// 2xx : success, 200 ok, 201 created, 204 no content
// 3xx: redirects
// 4xx: client errors, 404
// 5xx: server errrors, 501, 500
// 100 /sec - 100 /sec

// HTTP request format
// http protocol
// url: www.google.com/api/users

// Request headers:
//  Content-Type: application/json
//  accept: application/json
//  authorization: token
//  x-username: xlslsl
//  x-password: kadjfjdaf   

// Response Headers:
// MIME types
//  Content-type: application/json
//  accept: application/xml
//  max   :

// body:{
    // username:'abc@gmail.com',
    // password:'adkfjkafkdj'
// }
// REST API
// representational state transfer
// everything is a resource
// Read, Create, Update, Delete (CRUD)
// 1. Uniform interface
// 2. Stateless (no sessions)
// 3. cacheability 
// 4. layered system  
// 5. client server 
// Http Verbs: GET, POST, PUT, DELETE, PATCH
// GET: read
// POST: Create
// PUT: Update (full update)
// DELETE: Delete
// PATCH: Partial update
// GET www.example.com/api/books Safe, not change state
// POST www.example.com/api/books Create Unsafe
// http://localhost:3000/api/books GET
// Self sufficient
// login -> credentials -> orders
// banking   
// login - credentials - products
// client - server -> server -> server 
// GET http://localhost:3000/books/1
// controller handler -> modify routes -> register route
// debugging
// console.log
// POST http://localhost:3000/books body
// GET http://localhost:3000/books 
// n-layers
// layers have concerns
// Delete: 
// DELETE http://localhost:3000/api/books/:id
// PUT http://localhost:3000/api/books/:id body{ name: " Updated book name"}