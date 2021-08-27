const db = require('./conn');

class CommentsModel {
    constructor(id, user_id, post_id, body, date) {
        this.id = id;
        this.user_id = user_id;
        this.post_id = post_id;
        this.body = body;
        this.date = date;
    }

    static async addComment(user_id, post_id, body) {
        try {
            const query = `INSERT INTO comments (user_id, post_id, body) VALUES (${user_id}, ${post_id}, '${body}') RETURNING id;`;
            const response = await db.one(query);
            return response;
        } catch (error) {
            console.log('ERROR: ', error);
            return error;
        }
    }

    static async removeComment(id) {
        try {
            const query = `DELETE FROM comments WHERE id = ${id};`;
            const response = await db.one(query);
            return response;
        } catch (error) {
            console.log('ERROR: ', error);
            return error;
        }
    }

    static async editComment(body, id) {
        try {
            const query = `UPDATE comments SET body = '${body}' WHERE id = ${id};`;
            const response = await db.one(query);
            return response;
        } catch (error) {
            console.log('ERROR: ', error);
            return error;
        }
    }

    static async getAllCommentsByPostId(post_id) {
        try {
            const query = `SELECT * FROM comments WHERE post_id = ${post_id};`;
            const response = await db.any(query);
            return response;
        } catch (error) {
            console.log('ERROR: ', error);
            return error;
        }
    }

    static async getAllCommentsByUserId(user_id) {
        try {
            const query = `SELECT * FROM comments WHERE user_id = ${user_id};`;
            const response = await db.any(query);
            return response;
        } catch (error) {
            console.log('ERROR: ', error);
            return error;
        }
    }
}

module.exports = CommentsModel;