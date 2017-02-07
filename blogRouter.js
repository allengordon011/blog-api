const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const {BlogPosts} = require('./models');

Blog.create()
Blog.create()

router.get('/', (req, res) {
    res.json(Blog.get());
});



module.exports = router
