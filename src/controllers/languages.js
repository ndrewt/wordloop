const Language = require('../models/languages')

exports.postAdd = (req, res, next) => {
    const name = req.body.lang_name
    const lang = new Language(null, name)
    Language
        .findByName(name)
        .then(([result]) => {
            if (result.length < 1) {
                lang
                    .save()
                    .then(() => {
                        return res.status(201).json({
                            success: 0,
                            message: "Language successfully added."
                        })
                    })
            } else {
                return res.status(400).json({
                    success: 0,
                    message: "Language is taken, try another one."
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

exports.getById = (req, res, next) => {
    const id = req.params.lang_id
    Language
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
    Language
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
    const id = req.body.lang_id
    const name = req.body.lang_name
    Language
        .findById(id)
        .then(([result]) => {
            if (result.length < 1) {
                return res.status(404).json({
                    success: 0,
                    message: "Invalid id."
                })
            } else {
                Language.update(name, id)
                return res.status(201).json({
                    success: 1,
                    message: "Updated successfully."
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
    const id = req.params.lang_id
    Language
        .findById(id)
        .then(([result]) => {
            if (result.length > 0) {
                Language.deleteById(id)
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