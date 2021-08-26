'use strict';
const express = require('express');
const router = express.Router();
const UsersModel = require('../models/UsersModel');

router.post('/register', async(req, res) => {
    const {name, username, email} = req.body;
    const response = await UsersModel.addUser(name, username, email);
    if (response !== undefined) {
        res.json(response).status(200);
    } else {
        res.status(404);
    }
})

router.get('/:username', async(req, res) => {
    const {username} = req.params;
    const response = await UsersModel.getUserByUsername(username);
    res.json(response).status(200);
})

module.exports = router;