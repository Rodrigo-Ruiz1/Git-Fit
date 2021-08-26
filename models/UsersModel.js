const db = require('./conn');

class UsersModel {
    constructor(id, name, username, email, created_at) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.created_at = created_at;
    }

    static async addUser(name, username, email) {
        try {
            const query = `INSERT INTO users (name, username, email) VALUES ('${name}', '${username}', '${email}') RETURNING id;`;
            const response = await db.one(query);
            return response;
        } catch (error) {
            console.log('ERROR: ', error);
            return error;
        }
    }

    static async getUserByUsername(username) {
        try {
            const query = `SELECT * FROM users WHERE username = ${username};`;
            const response = await db.one(query);
            return response;
        } catch (error) {
            console.log('ERROR: ', error);
            return error;
        }
    }
}

module.exports = UsersModel;