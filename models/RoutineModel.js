const db = require('./conn');

class RoutineModel {
    constructor(id, title, user_id) {
        this.id = id;
        this.title = title;
        this.user_id = user_id;
    }

    static async createRoutine(title, user_id) {
        try {
            const query = `INSERT INTO routine (title, user_id) VALUES ('${title}', '${user_id}') RETURNING id;`;
            const response = await db.any(query);
            return response;
        } catch (error) {
            console.log('ERROR: ', error);
            return error;
        }
    }

    static async renameRoutine(title, id) {
        try {
            const query = `UPDATE routine SET title = '${title}' WHERE id = ${id};`;
            const response = await db.one(query);
            return response;
        } catch (error) {
            console.log('ERROR: ', error);
            return error;
        }
    }

    static async getRoutineInfo(user_id) {
        try {
            const query = `SELECT * FROM routine WHERE user_id = ${user_id};`;
            const response = await db.any(query);
            return response;
        } catch (error) {
            console.log('ERROR: ', error);
            return error;
        }
    }

    static async getRoutinesByUserId(user_id) {
        try {
            const query = `SELECT routine.title, exercises.name, routine_exercise.routine_id, routine_exercise.exercise_id, exercises.id FROM routine JOIN routine_exercise on routine.id = routine_exercise.routine_id JOIN exercises on exercises.id = routine_exercise.exercise_id WHERE routine.user_id = ${user_id};`;
            const response = await db.any(query);
            return response;
        } catch (error) {
            console.log('ERROR: ', error);
            return error;
        }
    }

    static async clearRoutine(routine_id) {
        try {
            const query = `DELETE FROM routine_exercise WHERE routine_id = ${routine_id};`;
            const response = db.any(query);
            return response;
        } catch (error) {
            console.log('ERROR: ', error);
            return error;
        }
    }

    static async deleteRoutine(title) {
        try {
            const query = `DELETE FROM routine WHERE title = '${title}';`;
            const response = await db.one(query);
            return response;
        } catch (error) {
            console.log('ERROR: ', error);
            return error;
        }
    }

    static async addExercise(routine_id, exercise_id) {
        try {
            const query = `INSERT INTO routine_exercise (routine_id, exercise_id) VALUES (${routine_id}, ${exercise_id});`;
            const response = await db.one(query);
            return response;
        } catch (error) {
            console.log('ERROR: ', error);
            return error;
        }
    }

    static async removeExercise(routine_id, exercise_id) {
        try {
            const query = `DELETE FROM routine_exercise WHERE routine_id = ${routine_id} AND exercise_id = ${exercise_id};`;
            const response = await db.one(query);
            return response;
        } catch (error) {
            console.log('ERROR: ', error);
            return error;
        }
    }
}

module.exports = RoutineModel;