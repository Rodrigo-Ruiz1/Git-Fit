const db = require('./conn');

class ExercisesModel {
    constructor(id, exercise_id, title, category, sets, reps, completed, routine_id) {
        this.id = id;
        this.exercise_id = exercise_id;
        this.title = title;
        this.category = category;
        this.sets = sets;
        this.reps = reps;
        this.completed = completed;
        this.routine_id = routine_id;
    }

    static async addExercise(exercise_id, title, category, sets, reps, routine_id) {
        try {
            const query = `INSERT INTO exercises (exercise_id, title, category, sets, reps, routine_id) VALUES ('${exercise_id}', '${title}', '${category}', '${sets}', '${reps}', '${routine_id}') RETURNING id;`;
            const response = await db.one(query);
            return response;
        } catch (error) {
            console.log('ERROR: ', error);
            return error;
        }
    }

    static async removeExercise(id, routine_id) {
        try {
            const query = `DELETE FROM exercises WHERE id = ${id} AND routine_id = ${routine_id};`;
            const response = await db.one(query);
            return response;
        } catch (error) {
            console.log('ERROR: ', error);
            return error;
        }
    }

    static async setCompletedStatus(id) {
        try {
            const query = `UPDATE exercises SET completed = true WHERE id = ${id};`;
            const response = await db.one(query);
            return response;
        } catch (error) {
            console.log('ERROR: ', error);
            return error;
        }
    }
}

module.exports = ExercisesModel;