const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Blogs Home page");
})

router.get('/about', (req, res) => {
    res.send("Blogs About page");
})

module.exports = router;