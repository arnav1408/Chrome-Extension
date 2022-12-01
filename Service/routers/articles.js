const express = require('express');
const router = express.Router();
const Article = require('../models/getArticles');

router.get('/', async(req, res) => {
    try {
        const articles = await Article.find()
        // console.log(articles)
        res.json(articles)
    } catch (err) {
        res.send("Error " + err)
    }
})

router.post('/', async(req, res) => {
    console.log(req.body)
    const article = new Article({
        title: req.body.title,
        body: req.body.body,
        url: req.body.url
    })
    console.log(article);
    try {
        const articlesReceived = await article.save()
        res.json(articlesReceived)
        // console.log(article);
    } catch (error) {
        res.send(error)
    }
})

module.exports = router