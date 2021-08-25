const db = require('./conn');

class PostsModel {
    constructor(id, user_id, date, public, likes, comments) {
        this.id = id;
        this.user_id = user_id;
        this.date = date;
        this.public = public;
        this.likes = likes;
        this.comments = comments;
    }
}

module.exports = PostsModel;