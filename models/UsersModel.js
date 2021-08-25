const db = require('./conn');

class UsersModel {
    constructor(id, name, username, email, created_at) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.created_at = created_at;
    }
}

module.exports = UsersModel;