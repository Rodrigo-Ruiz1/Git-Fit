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

    static async getRoutinesByUserId(user_id) {
        try {
            const query = `SELECT * FROM routine WHERE user_id = ${user_id};`;
            const response = await db.any(query);
            return response;
        } catch (error) {
            console.log('ERROR: ', error);
            return error;
        }
    }

    static async deleteRoutine(id) {
        try {
            const query = `DELETE FROM routine WHERE id = ${id};`;
            const response = await db.one(query);
            return response;
        } catch (error) {
            console.log('ERROR: ', error);
            return error;
        }
    }
}

module.exports = RoutineModel;