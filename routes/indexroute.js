const path = require('path');
const router = require('express').Router();
const data = require('../data');

router.get('/', (req, res) => {
    res.json(data);
})

router.post('/', (req, res) => {
    res.send(req);
})

router.get('/home', (req, res) => {
    res.set({'Content-Type': 'text/html'});
    res.sendFile(path.resolve('./views/', 'index.html'));
})

router.get('/user', (req, res) => {
    res.set({'Content-Type': 'text/html'});
    res.sendFile(path.resolve('./views/', 'user.html'));
})

module.exports = router;