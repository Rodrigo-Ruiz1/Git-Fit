'use strict';
const express = require('express');
const router = express.Router();
const CommentsModel = require('../models/CommentsModel');

router.post('/add', async(req, res) => {
    const {user_id, post_id, body} = req.body;
    const response = await CommentsModel.addComment(user_id, post_id, body);
    res.json(response).status(200);
});

router.delete('/remove', async(req, res) => {
    const {id} = req.body;
    const response = await CommentsModel.removeComment(id);
    res.json(response).status(200);
});

router.patch('/edit', async(req, res) => {
    const {body, id} = req.body;
    const response = await CommentsModel.editComment(body, id);
    res.json(response).status(200);
});

router.get('/post/all/:post_id', async(req, res) => {
    const {post_id} = req.params;
    const response = await CommentsModel.getAllCommentsByPostId(post_id);
    res.json(response).status(200);
});

router.get('/user/all/:user_id', async(req, res) => {
    const {user_id} = req.params;
    const response = await CommentsModel.getAllCommentsByUserId(user_id);
    res.json(response).status(200);
});

module.exports = router;