'use strict';
const express = require('express');
const router = express.Router();
const RoutineModel = require('../models/RoutineModel');

router.post('/create', async(req, res) => {
    const {title, user_id} = req.body;
    const response = await RoutineModel.createRoutine(title, user_id);
    res.json(response).status(200);
});

router.patch('/rename', async(req, res) => {
    const {title, id} = req.body;
    const response = await RoutineModel.renameRoutine(title, id);
    res.json(response).status(200);
});

router.get('/info/:user_id', async(req, res) => {
    const {user_id} = req.params;
    const response = await RoutineModel.getRoutineInfo(user_id);
    res.json(response).status(200);
})

router.get('/all/:user_id', async(req, res) => {
    const {user_id} = req.params;
    const response = await RoutineModel.getRoutinesByUserId(user_id);
    res.json(response).status(200);
});

router.delete('/clear', async(req, res) => {
    const {routine_id} = req.body;
    const response = await RoutineModel.clearRoutine(routine_id);
    res.json(response).status(200);
});

router.delete('/delete', async(req, res) => {
    const {title} = req.body;
    const response = await RoutineModel.deleteRoutine(title);
    res.json(response).status(200);
});

// NEED TO FIX ROUTE
router.post('/add', async(req, res) => {
    const {routine_id, exercise_id} = req.body;
    const response = await RoutineModel.addExercise(routine_id, exercise_id);
    res.json(response).status(200);
})

router.delete('/remove', async(req, res) => {
    const {routine_id, exercise_id} = req.body;
    const response = await RoutineModel.removeExercise(routine_id, exercise_id);
    res.json(response).status(200);
});

module.exports = router;