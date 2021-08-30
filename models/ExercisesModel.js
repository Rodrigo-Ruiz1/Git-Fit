const db = require('./conn');

class ExercisesModel {
    constructor(id, name, category, image, description, username) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.image = image;
        this.description = description;
        this.username = username;
    }

    static async createExercise(name, category, image, description, username) {
        try {
            const query = `INSERT INTO exercises ( name, category, image, description, username) VALUES ('${name}', ${category}, '${image}', '${description}', '${username}') RETURNING id;`;
            const response = await db.one(query);
            return response;
        } catch (error) {
            console.log('ERROR: ', error);
            return error;
        }
    }

    static async getAllExercises() {
        try {
            const query = `SELECT * FROM exercises;`;
            const response = await db.any(query);
            return response;
        } catch (error) {
            console.log('ERROR: ', error);
            return error;
        }
    }

    // static async removeExercise(exercise_id, username) {
    //     try {
    //         const query = `DELETE FROM exercises WHERE username = '${username}';`;
    //         const response = await db.one(query);
    //         return response;
    //     } catch (error) {
    //         console.log('ERROR: ', error);
    //         return error;
    //     }
    // }
}

module.exports = ExercisesModel;