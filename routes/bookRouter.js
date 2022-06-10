const express = require('express');
const bookCtrl = require('../controllers/bookCtrl');
const router = express.Router();

//GET api/books/
//GET api/books/1
//POST api/books/
router.get('/', bookCtrl.get);
router.get('/:id', bookCtrl.getById);
router.post('/', bookCtrl.create);
router.delete('/:id', bookCtrl.delete);
router.put('/:id', bookCtrl.update);
router.patch('/:id', bookCtrl.patch);
/*
    GET http://localhost:3000/books
    GET http://localhost:3000/books/1
    GET http://localhost:3000/books/2
    GET http://localhost:3000/books/100
*/

module.exports = router;