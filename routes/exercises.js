'use strict';
const express = require('express');
const router = express.Router();
const ExercisesModel = require('../models/ExercisesModel');

router.post('/create', async(req, res) => {
    const {name, category, image, description, username} = req.body;
    const response = await ExercisesModel.createExercise(name, category, image, description, username);
    res.json(response).status(200);
});

router.get('/all', async(req, res) => {
    const response = await ExercisesModel.getAllExercises();
    res.json(response).status(200);
})

// router.delete('/delete', async(req, res) => {
//     const {username} = req.body;
//     const response = await ExercisesModel.removeExercise(username);
//     res.json(response).status(200);
// });

module.exports = router;