const db = require('./conn');

class ExercisesModel {
    constructor(id, exercise_id, category, sets, reps, completed, routine_id) {
        this.id = id;
        this.exercise_id = exercise_id;
        this.category = category;
        this.sets = sets;
        this.reps = reps;
        this.completed = completed;
        this.routine_id = routine_id;
    }
}

module.exports = ExercisesModel;