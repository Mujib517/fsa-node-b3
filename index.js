const express = require('express');
// common js
const defaultRouter = require('./routes/defaultRouter');
const bookRouter = require('./routes/bookRouter');
const app = express();

app.listen(3000, function () {
    console.log('Server is running on 3000');
});

// register routing
app.use(defaultRouter);
app.use(bookRouter);

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

// body:{}