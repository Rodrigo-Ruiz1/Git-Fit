const { response } = require('express');
const db = require('./conn');

class PostsModel {
    constructor(id, user_id, date, is_public, likes, comments) {
        this.id = id;
        this.user_id = user_id;
        this.date = date;
        this.public = is_public;
        this.likes = likes;
        this.comments = comments;
    }

    static async createPost(user_id, content, routine_id) {
        try {
            const query = `INSERT INTO posts (user_id, content, routine_id) VALUES ('${user_id}', '${content}', '${routine_id}') RETURNING id;`;
            const response = await db.one(query);
            return response;
        } catch (error) {
            console.log('ERROR: ', error);
            return error;
        }
    }

    static async getAllPostByUserId(user_id) {
        try {
            const query = `SELECT * FROM posts WHERE user_id = ${user_id};`;
            const response = await db.any(query);
            return response;
        } catch (error) {
            console.log('ERROR: ', error);
            return error;
        }
    }

    static async getPostById(id) {
        try {
            const query = `SELECT * FROM posts WHERE id = ${id};`;
            const response = await db.one(query);
            return response;
        } catch (error) {
            console.log('ERROR: ', error);
            return error;
        }
    }

    static async setPostPublic(id) {
        try {
            const query = `UPDATE posts SET is_public = true WHERE id = ${id};`;
            const response = await db.one(query);
            return response;
        } catch (error) {
            console.log('ERROR: ', error);
            return error;
        }
    }

    static async setPostPrivate(id) {
        try {
            const query = `UPDATE posts SET is_public = false WHERE id = ${id};`;
            const response = await db.one(query);
            return response;
        } catch (error) {
            console.log('ERROR: ', error);
            return error;
        }
    }
}

module.exports = PostsModel;