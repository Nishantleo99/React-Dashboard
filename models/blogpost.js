/*
Author: Nishant Kumar
Description: This file is used for defining a schema(a database) and creating a model of that schema and exporting it.
             For MongoDB to work, the mongod application must be active at all times.
*/

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BlogPostSchema = new Schema({
    reviews: { type: Number, required: true},
    rating: { type: Number, required: true},
    sentiment: { type: Number, required: true},
    jan: { type: Number, required: true},
    feb: { type: Number, required: true},
    mar: { type: Number, required: true},
    apr: { type: Number, required: true},
    may: { type: Number, required: true},
    jun: { type: Number, required: true},
    jul: { type: Number, required: true},
    aug: { type: Number, required: true},
    sept: { type: Number, required: true},
    oct: { type: Number, required: true},
    nov: { type: Number, required: true},
    dec: { type: Number, required: true}
});

const BlogPost = mongoose.model('BlogPost',BlogPostSchema);

module.exports = BlogPost;