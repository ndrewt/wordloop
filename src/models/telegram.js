const db = require('../db/dbConnect')

module.exports = class Telegram {
    constructor(user_id, telegram_id, token) {
        this.telegram_id = telegram_id
        this.token = token
        this.user_id = user_id
    }
    save() {
        return db.execute('INSERT INTO tg_data(user_id, telegram_id, token) VALUES(?,?,?)', [this.user_id, this.telegram_id, this.token])
    }

    static findById(telegram_id) {
        return db.execute('SELECT * FROM tg_data WHERE telegram_id = ? ', [telegram_id])
    }
    static deleteById(telegram_id, user_id) {
        db.execute('DELETE FROM tg_data where telegram_id = ? AND user_id=?', [telegram_id, user_id])
    }
    static updateById(token, user_id) {
        return db.execute('UPDATE tg_data SET token=? WHERE user_id = ? ', [token, user_id])
    }
}