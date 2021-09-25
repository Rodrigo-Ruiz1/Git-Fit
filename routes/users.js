'use strict';
const express = require('express');
const router = express.Router();
const UsersModel = require('../models/UsersModel');

router.post('/register', async(req, res) => {
    const {name, username, email, picture} = req.body;
    const response = await UsersModel.addUser(name, username, email, picture);
    if (response !== undefined) {
        res.json(response).status(200);
    } else {
        res.status(404);
    }
});

router.get('/:username', async(req, res) => {
    const {username} = req.params;
    const response = await UsersModel.getUserByUsername(username);
    if (response.name === 'QueryResultError') {
        res.json({message: "Error: no users found"}).status(404);
    } else {
        res.json(response).status(200);
    }
});

router.patch('/update/pic', async(req, res) => {
    const {picture} = req.body;
    const response = await UsersModel.updatePicture(picture);
    res.json(response).status(200);
});

router.patch('/update/username', async(req, res) => {
    const {username} = req.body;
    const response = await UsersModel.updateUsername(username);
    res.json(response).status(200);
});

module.exports = router;