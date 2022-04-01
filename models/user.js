const db = require('../db/dbConnect')

module.exports = class User {
    constructor(user_id, user_name, user_login, user_password) {
        this.user_id = user_id
        this.user_name = user_name
        this.user_login = user_login
        this.user_password = user_password
    }
    save() {
        return db.execute('INSERT INTO users(user_name, user_login, user_password) VALUES(?,?,?)', [this.user_name, this.user_login, this.user_password])
    }

    static findByLogin(user_login) {
        return db.execute('SELECT user_id, user_name, user_login, user_password FROM users WHERE user_login = ?', [user_login])
    }

    static getUsers() {
        return db.execute('SELECT user_id, user_name, user_login, user_password FROM users')
    }

    static getUserById() {
        db.execute('SELECT user_id, user_name, user_login, user_password FROM users where user_id = ?'), [this.user_id]
    }

    static updateUser(user_name, user_login, user_password, user_id) {
        db.execute('UPDATE users SET user_name=?, user_login=?, user_password=? WHERE user_id = ?'), [
            user_name,
            user_login,
            user_password,
            user_id
        ]
    }

    static deleteUser(user_id) {
        db.execute('DELETE FROM users where id = ?', [user_id])
    }
}