const db = require('./conn');

class UsersModel {
    constructor(id, name, username, email, picture, created_at) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.picture = picture;
        this.created_at = created_at;
    }

    static async addUser(name, username, email, picture) {
        try {
            const query = `INSERT INTO users (name, username, email, picture) VALUES ('${name}', '${username}', '${email}', '${picture}') RETURNING id;`;
            const response = await db.one(query);
            return response;
        } catch (error) {
            console.log('ERROR: ', error);
            return error;
        }
    }

    static async getUserByUsername(username) {
        try {
            const query = `SELECT * FROM users WHERE username = '${username}';`;
            const response = await db.one(query);
            return response;
        } catch (error) {
            console.log('ERROR: ', error);
            return error;
        }
    }

    static async updatePicture(picture) {
        try {
            const query = `UPDATE users SET picture = ${picture};`;
            const response = await db.one(query);
            return response;
        } catch (error) {
            console.log('ERROR: ' , error);
            return error;
        }
    }

    static async updateUsername(username) {
        try {
            const query = `UPDATE users SET username = ${username};`;
            const response = await db.one(query);
            return response;
        } catch (error) {
            console.log('ERROR: ', error);
            return error;
        }
    }
}

module.exports = UsersModel;