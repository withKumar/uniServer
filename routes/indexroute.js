const router = require('express').Router();
const data = require('../data');

router.get('/', (req, res) => {
    res.json(data);
})

router.post('/', (req, res) => {
    res.send(req);
})

router.get('/home', (req, res) => {
    res.send('index.html');
})

module.exports = router;