const db = require('./conn');

class RoutineModel {
    constructor(id, title, user_id) {
        this.id = id;
        this.title = title;
        this.user_id = user_id;
    }
}

module.exports = RoutineModel;