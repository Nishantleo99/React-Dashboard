/*
Author: Nishant Kumar
Description: This file is used for creating the routes where the data will be stored on the server. All the data will be saved in
             "http://localhost:8080/api". The model which was exported in the "blogpost.js" file is imported here and is used in
             the routes.
*/

const express = require('express');

const router = express.Router();

const BlogPost = require('../models/blogpost');

router.get('/', (req,res) => {

    BlogPost.find({  })
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', daerrorta);
        });

});

router.post('/save', (req, res) => {
    console.log('Body: ',req.body);
    const data = req.body;

    const newBlogPost = new BlogPost(data);

    newBlogPost.save((error) => {
        if (error) {
            res.status(500).json({ msg: 'Sorry, internal server errors' });
            return;
        }
        return res.json({
            msg: 'Your data has been saved!!!!!!'
        });
    });
});

router.get('/name', (req,res) => {
    const data = {
        username: 'Peter',
        age: 22
    };
    res.json(data);
});

module.exports = router;