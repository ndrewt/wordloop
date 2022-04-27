const db = require('../db/dbConnect')

module.exports = class Languages {
    constructor(lang_id, lang_name, user_id) {
        this.lang_id = lang_id
        this.lang_name = lang_name
        this.user_id = user_id
    }
    save() {
        return db.execute('INSERT INTO languages(lang_name, user_id) VALUES(?,?)', [this.lang_name, this.user_id])
    }

    static findById(lang_id) {
        return db.execute('SELECT * FROM languages WHERE lang_id = ?', [lang_id])
    }

    static findByName(lang_name) {
        return db.execute('SELECT * FROM languages WHERE lang_name = ?', [lang_name])
    }

    static getAll() {
        return db.execute('SELECT * FROM languages')
    }

    static update(lang_name, user_id, lang_id) {
        db.execute('UPDATE languages SET lang_name=?, user_id=? WHERE lang_id = ?', [
            lang_name,
            user_id,
            lang_id
        ])
    }

    static deleteById(lang_id) {
        db.execute('DELETE FROM languages where lang_id = ?', [lang_id])
    }
}