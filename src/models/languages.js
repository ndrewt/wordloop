const db = require('../db/dbConnect')

module.exports = class Languages {
    constructor(lang_id, lang_name) {
        this.lang_id = lang_id
        this.lang_name = lang_name
    }
    save() {
        return db.execute('INSERT INTO languages(lang_name) VALUES(?)', [this.lang_name])
    }

    static findByName(lang_name) {
        return db.execute('SELECT * FROM languages WHERE lang_name = ?', [lang_name])
    }

    static getAll() {
        return db.execute('SELECT * FROM languages')
    }

    static update(lang_name, lang_id) {
        db.execute('UPDATE languages SET lang_name=?, WHERE lang_id = ?'), [
            lang_name,
            lang_id
        ]
    }

    static deleteByName(lang_name) {
        db.execute('DELETE FROM languages where lang_name = ?', [lang_name])
    }
}