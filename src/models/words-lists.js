const db = require('../db/dbConnect')

module.exports = class WordsLists {
    constructor(list_id, list_name, lang1_id, lang2_id, user_id) {
        this.list_id = list_id
        this.list_name = list_name
        this.lang1_id = lang1_id
        this.lang2_id = lang2_id
        this.user_id = user_id
    }
    save() {
        return db.execute('INSERT INTO words_lists(list_name, lang1_id, lang2_id, user_id) VALUES(?,?,?,?)', [this.list_name, this.lang1_id, this.lang2_id, this.user_id])
    }

    static findById(list_id, user_id) {
        return db.execute('SELECT * FROM words_lists WHERE list_id = ? AND user_id = ?', [list_id, user_id])
    }

    static getAll(user_id) {
        return db.execute('SELECT * FROM words_lists WHERE user_id = ?', [user_id])
    }

    static update(list_name, lang1_id, lang2_id, user_id, list_id) {
        db.execute('UPDATE words_lists SET list_name=?,lang1_id=?, lang2_id=?, user_id=? WHERE list_id = ?', [
            list_name,
            lang1_id,
            lang2_id,
            user_id,
            list_id
        ])
    }

    static deleteById(list_id, user_id) {
        db.execute('DELETE FROM words_lists WHERE list_id= ? AND user_id =?', [list_id, user_id])
    }
}