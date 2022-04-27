const jwtHelper = require('../middleware/jwtHelper')
const List = require('../models/words-lists')
const Word = require('../models/words')
const WordslistWords = require('../models/words-lists-words')

exports.postAdd = (req, res, next) => {
    const list_id = req.body.list_id
    const word_id = req.body.word_id
    const word_to_list = new WordslistWords(list_id, word_id)
    List
        .findById(list_id)
        .then(([result]) => {
            if (result.length < 1) {
                res.status(404).json({
                    success: 0,
                    message: "Invalid list id."
                })
            } else {
                Word
                    .findById(word_id)
                    .then(([result]) => {
                        if (result.length < 1) {
                            res.status(404).json({
                                success: 0,
                                message: "Invalid word id."
                            })
                        } else {
                            word_to_list
                                .save()
                                .then(() => {
                                    return res.status(201).json({
                                        success: 0,
                                        message: "Word to list successfully added."
                                    })
                                })
                        }
                    })
            }
        })
        .catch(err => {
            console.log(err)
            return res.status(500).json({
                success: 0,
                message: "Server-side error."
            })
        })
}

exports.getById = (req, res, next) => {
    const id = req.params.list_id
    WordslistWords
        .findByListId(id)
        .then(([result]) => {
            if (result.length < 1) {
                return res.status(404).json({
                    success: 0,
                    message: "Record not found."
                })
            } else {
                return res.status(200).json({
                    success: 1,
                    data: result
                })
            }
        })
        .catch(err => {
            return res.status(500).json({
                success: 0,
                message: "Server-side error."
            })
        })
}



exports.deleteById = (req, res, next) => {
    const id = req.params.word_id
    WordslistWords
        .findByWordId(id)
        .then(([result]) => {
            if (result.length > 0) {
                WordslistWords.deleteById(id)
                return res.status(200).json({
                    success: 1,
                    message: "Record successfully deleted."
                })
            } else {
                return res.status(404).json({
                    success: 0,
                    message: "Record not found."
                })
            }
        })
        .catch(err => {
            return res.status(500).json({
                success: 0,
                message: "Server-side error."
            })
        })

}