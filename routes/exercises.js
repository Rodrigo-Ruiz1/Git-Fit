'use strict';
const express = require('express');
const router = express.Router();
const ExercisesModel = require('../models/ExercisesModel');

router.post('/add', async(req, res) => {
    const {exercise_id, title, category, sets, reps, routine_id} = req.body;
    const response = await ExercisesModel.addExercise(exercise_id, title, category, sets, reps, routine_id);
    res.json(response).status(200);
});

router.delete('/remove', async(req, res) => {
    const {id, routine_id} = req.body;
    const response = await ExercisesModel.removeExercise(id, routine_id);
    res.json(response).status(200);
});

router.patch('/status/:id', async(req, res) => {
    const {id} = req.params;
    const response = await ExercisesModel.setCompletedStatus(id);
    res.json(response).status(200);
});

module.exports = router;