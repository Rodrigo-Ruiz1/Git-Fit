'use strict';
const express = require('express');
const router = express.Router();
const RoutineModel = require('../models/RoutineModel');

router.post('/create', async(req, res) => {
    const {title, user_id} = req.body;
    const response = await RoutineModel.createRoutine(title, user_id);
    res.json(response).status(200);
})

router.get('/all/:user_id', async(req, res) => {
    const {user_id} = req.params;
    const response = await RoutineModel.getRoutinesByUserId(user_id);
    res.json(response).status(200);
})

router.delete('/delete/:id', async (req, res) => {
    const {id} = req.params;
    const response = await RoutineModel.deleteRoutine(id);
    res.json(response).status(200);
})

module.exports = router;