const jwtHelper = require('../middleware/jwtHelper')
const Word = require('../models/words')
const Language = require('../models/languages')

exports.postAdd = (req, res, next) => {
    const word1 = req.body.word_lang1
    const word2 = req.body.word_lang2
    const lang1_id = req.body.lang1_id
    const lang2_id = req.body.lang2_id
    const desc = req.body.description
    const user_id = jwtHelper.decodeId(req)
    Language
        .findById(lang1_id)
        .then(([result]) => {
            if (result.length < 1) {
                return res.status(404).json({
                    success: 0,
                    message: "Language 1 not found."
                })
            } else {
                Language
                    .findById(lang2_id)
                    .then(([result]) => {
                        if (result.length < 1) {
                            return res.status(404).json({
                                success: 0,
                                message: "Language 2 not found."
                            })
                        } else {
                            const word = new Word(null, word1, word2, lang1_id, lang2_id, desc, user_id)
                            word
                                .save()
                                .then(() => {
                                    return res.status(201).json({
                                        success: 0,
                                        message: "Word successfully added."
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
    const id = req.params.word_id
    Word
        .findById(id)
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

exports.getAll = (req, res, next) => {
    Word
        .getAll()
        .then(([result]) => {
            if (result.length < 1) {
                return res.status(404).json({
                    success: 0,
                    message: "Language list is empty."
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

exports.putUpdate = (req, res, next) => {
    const word_id = req.body.word_id
    const word1 = req.body.word_lang1
    const word2 = req.body.word_lang2
    const lang1_id = req.body.lang1_id
    const lang2_id = req.body.lang2_id
    const desc = req.body.description
    const user_id = jwtHelper.decodeId(req)
    Language
        .findById(lang1_id)
        .then(([result]) => {
            if (result.length < 1) {
                return res.status(404).json({
                    success: 0,
                    message: "Language 1 not found."
                })
            } else {
                Language
                    .findById(lang2_id)
                    .then(([result]) => {
                        if (result.length < 1) {
                            return res.status(404).json({
                                success: 0,
                                message: "Language 2 not found."
                            })
                        } else {
                            Word
                                .findById(word_id)
                                .then(([result]) => {
                                    if (result.length < 1) {
                                        return res.status(404).json({
                                            success: 0,
                                            message: "Invalid id."
                                        })
                                    } else {
                                        Word.update(word1, word2, lang1_id, lang2_id, desc, user_id, word_id)
                                        return res.status(201).json({
                                            success: 1,
                                            message: "Updated successfully."
                                        })
                                    }
                                })
                        }
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
    Word
        .findById(id)
        .then(([result]) => {
            if (result.length > 0) {
                Word.deleteById(id)
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