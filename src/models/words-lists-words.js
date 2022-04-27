const db = require('../db/dbConnect')

module.exports = class WordsListsWords {
    constructor(list_id, word_id) {
        this.list_id = list_id
        this.word_id = word_id
    }
    save() {
        return db.execute('INSERT INTO words_lists_words(list_id, word_id) VALUES(?,?)', [this.list_id, this.word_id])
    }

    static findByListId(list_id) {
        return db.execute('SELECT word_id FROM words_lists_words WHERE list_id = ?', [list_id])
    }

    static findByWordId(word_id) {
        return db.execute('SELECT word_id FROM words_lists_words WHERE word_id = ?', [word_id])
    }

    static getAll(user_id) {
        return db.execute('SELECT * FROM words_lists_words WHERE user_id = ?', [user_id])
    }

    static update(list_name, lang1_id, lang2_id, user_id, list_id) {
        db.execute('UPDATE words_lists_words SET list_name=?,lang1_id=?, lang2_id=?,  user_id=? WHERE list_id = ?', [
            list_name,
            lang1_id,
            lang2_id,
            user_id,
            list_id
        ])
    }

    static deleteById(word_id) {
        db.execute('DELETE FROM words_lists_words where word_id= ?', [word_id])
    }
}