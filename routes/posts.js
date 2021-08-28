'use strict';
const express = require('express');
const router = express.Router();
const PostsModel = require ('../models/PostsModel');

router.post('/create', async(req, res) => {
    const {user_id, content, routine_id} = req.body;
    const response = await PostsModel.createPost(user_id, content, routine_id);
    res.json(response).status(200);
});

router.get('/all/public', async(req, res) => {
    const response = await PostsModel.getAllPublicPosts();
    res.json(response).status(200);
})

router.get('/all/:user_id', async(req, res) => {
    const {user_id} = req.params;
    const response = await PostsModel.getAllPostByUserId(user_id);
    res.json(response).status(200);
});

router.get('/:id', async(req, res) => {
    const {id} = req.params;
    const response = await PostsModel.getPostById(id);
    res.json(response).status(200);
});

router.patch('/public', async(req, res) => {
    const {id} = req.body;
    const response = await PostsModel.setPostPublic(id);
    res.json(response).status(200);
});

router.patch('/private', async(req, res) => {
    const {id} = req.body;
    const response = await PostsModel.setPostPrivate(id);
    res.json(response).status(200);
});


module.exports = router;