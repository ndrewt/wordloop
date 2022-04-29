const db = require('../db/dbConnect')

module.exports = class Words {
    constructor(word_id, word_lang1, word_lang2, lang1_id, lang2_id, description, user_id) {
        this.word_id = word_id
        this.word_lang1 = word_lang1
        this.word_lang2 = word_lang2
        this.lang1_id = lang1_id
        this.lang2_id = lang2_id
        this.description = description
        this.user_id = user_id
    }
    save() {
        return db.execute('INSERT INTO words(word_lang1, word_lang2, lang1_id, lang2_id ,description, user_id) VALUES(?,?,?,?,?,?)', [this.word_lang1, this.word_lang2, this.lang1_id, this.lang2_id, this.description, this.user_id])
    }

    static findById(word_id, user_id) {
        return db.execute('SELECT * FROM words WHERE word_id = ? AND user_id = ?', [word_id, user_id])
    }

    static getAll(user_id) {
        return db.execute('SELECT * FROM words WHERE user_id = ?', [user_id])
    }

    static update(word_lang1, word_lang2, lang1_id, lang2_id, description, user_id, word_id) {
        db.execute('UPDATE words SET word_lang1=?, word_lang2=?, lang1_id=?, lang2_id=?, description=?, user_id=? WHERE word_id = ?', [
            word_lang1,
            word_lang2,
            lang1_id,
            lang2_id,
            description,
            user_id,
            word_id
        ])
    }

    static deleteById(word_id) {
        db.execute('DELETE FROM words where word_id= ?', [word_id])
    }
}