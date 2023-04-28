const express = require('express');
const router = express.Router();
const Token = require('../models/token');

let users = [
    { id: 1, username: 'Ramesh', password: '111' },
    { id: 2, username: 'Amrit', password: '222' },
    { id: 3, username: 'Manish', password: '333' }
];

router.post('/', (req, res, next) => {
    const userDetails = users.find(user => user.username.toLowerCase() === req.body.username.toLowerCase() && user.password.toLowerCase() === req.body.password.toLowerCase());
    if (userDetails) {
        let newToken = Token.generateToken(userDetails);
        res.status(200).send(newToken);
    } else {
        res.json({ error: 'Invalid username and password!' });
    }
});

module.exports = router;