const jwtHelper = require('../middleware/jwtHelper')
const List = require('../models/words-lists')
const Word = require('../models/words')
const WordsList = require('../models/words-lists')
const WordslistWords = require('../models/words-lists-words')

exports.postAdd = (req, res, next) => {
    const list_id = req.body.list_id
    const word_id = req.body.word_id
    const user_id = jwtHelper.decodeId(req)
    const word_to_list = new WordslistWords(list_id, word_id)
    WordslistWords.findByIds(list_id, word_id)
        .then(([result]) => {
            if (result.length > 0) {
                return res.status(400).json({
                    success: 0,
                    message: "Word is already added."
                })
            }
            List
                .findById(list_id, user_id)
                .then(([result]) => {
                    if (result.length < 1) {
                        res.status(404).json({
                            success: 0,
                            message: "Invalid list id."
                        })
                    } else {
                        Word
                            .findById(word_id, user_id)
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
    const user_id = jwtHelper.decodeId(req)
    WordsList.findById(id, user_id)
        .then(([result]) => {
            if (result.length < 1) {
                return res.status(404).json({
                    success: 0,
                    message: "Record not found."
                })
            }
            let name = result[0].list_name
            let lang1 = result[0].lang1_id
            let lang2 = result[0].lang2_id
            WordslistWords
                .findByListId(id)
                .then(([result]) => {
                    if (result.length < 1) {
                        return res.status(404).json({
                            success: 0,
                            list_name: name,
                            lang1_id: lang1,
                            lang2_id: lang2,
                            message: "List is empty."
                        })
                    } else {
                        return res.status(200).json({
                            success: 1,
                            list_name: name,
                            lang1_id: lang1,
                            lang2_id: lang2,
                            data: result
                        })
                    }
                })
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