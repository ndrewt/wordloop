const jwtHelper = require('../middleware/jwtHelper')
const Languages = require('../models/languages')
const Wordslist = require('../models/words-lists')
const ListWords = require('../models/words-lists-words')

exports.postAdd = (req, res, next) => {
    const name = req.body.list_name
    const lang1_id = req.body.lang1_id
    const lang2_id = req.body.lang2_id
    const user_id = jwtHelper.decodeId(req)
    const list = new Wordslist(null, name, lang1_id, lang2_id, user_id)
    Languages
        .findById(lang1_id, user_id)
        .then(([result]) => {
            if (result.length < 1) {
                return res.status(404).json({
                    success: 0,
                    message: "Invalid lang 1."
                })
            } else {
                Languages
                    .findById(lang2_id, user_id)
                    .then(([result]) => {
                        if (result.length < 1) {
                            return res.status(404).json({
                                success: 0,
                                message: "Invalid lang 2."
                            })
                        }
                        list
                            .save()
                            .then(() => {
                                return res.status(201).json({
                                    success: 0,
                                    message: "List successfully added."
                                })
                            })
                    })

            }
        })
        .catch(err => {
            return res.status(500).json({
                success: 0,
                message: "Invalid language id."
            })
        })
}

exports.getById = (req, res, next) => {
    const id = req.params.list_id
    const user_id = jwtHelper.decodeId(req)
    Wordslist
        .findById(id, user_id)
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
            console.log(err)
            return res.status(500).json({
                success: 0,
                message: "Server-side error."
            })
        })
}

exports.getAll = (req, res, next) => {
    const user_id = jwtHelper.decodeId(req)
    Wordslist
        .getAll(user_id)
        .then(([result]) => {
            if (result.length < 1) {
                return res.status(404).json({
                    success: 0,
                    message: "List is empty."
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
    const list_id = req.body.list_id
    const name = req.body.list_name
    const lang1_id = req.body.lang1_id
    const lang2_id = req.body.lang2_id
    const user_id = jwtHelper.decodeId(req)
    Wordslist
        .findById(list_id, user_id)
        .then(([result]) => {
            if (result.length < 1) {
                return res.status(404).json({
                    success: 0,
                    message: "Invalid id."
                })
            } else {
                Languages
                    .findById(lang1_id, user_id)
                    .then(([result]) => {
                        if (result.length < 1) {
                            return res.status(404).json({
                                success: 0,
                                message: "Invalid lang 1."
                            })
                        } else {
                            Languages
                                .findById(lang2_id, user_id)
                                .then(([result]) => {
                                    if (result.length < 1) {
                                        return res.status(404).json({
                                            success: 0,
                                            message: "Invalid lang 2."
                                        })
                                    }
                                    Wordslist
                                        .update(name, lang1_id, lang2_id, user_id, list_id)
                                    return res.status(201).json({
                                        success: 1,
                                        message: "Updated successfully."
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

exports.deleteById = (req, res, next) => {
    const id = req.params.list_id
    const user_id = jwtHelper.decodeId(req)
    Wordslist
        .findById(id, user_id)
        .then(([result]) => {
            if (result.length > 0) {
                ListWords.deleteAllById(id)
                Wordslist.deleteById(id, user_id)
                return res.status(200).json({
                    success: 1,
                    message: "Record successfully deleted."
                })
            }
            return res.status(404).json({
                success: 0,
                message: "Record not found."
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