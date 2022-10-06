const jwtHelper = require('../middleware/jwtHelper')
const jwt = require('jsonwebtoken')
const Tg = require('../models/telegram')

exports.postAdd = (req, res, next) => {
    const user_id = jwtHelper.decodeId(req)
    const token = jwtHelper.get_token(req)
    const telegram_id = req.params.telegram_id
    const data = new Tg(user_id, telegram_id, token)
    Tg
        .findById(telegram_id)
        .then(([result]) => {
            if (result.length < 1) {
                data
                    .save()
                    .then(() => {
                        return res.status(201).json({
                            success: 0,
                            message: "Telegram data successfully added."
                        })
                    })
            } else {
                return res.status(400).json({
                    success: 0,
                    message: "Telegram_id is taken."
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
    const telegram_id = req.body.telegram_id
    const key = req.body.key
    if (key == process.env.SECRET_KEY) {
        Tg
            .findById(telegram_id)
            .then(([result]) => {
                if (result.length < 1) {
                    return res.status(406).json({
                        success: 0,
                        message: "Record not found."
                    })
                } else {
                    jwt.verify(result[0].token, process.env.JWT_KEY, (err, decoded) => {
                        if (err) {
                            const decoded = jwt.decode(result[0].token)
                            const jsonwebtoken = jwt.sign({ data: decoded.data }, process.env.JWT_KEY, {
                                expiresIn: process.env.JWT_EXPIRESIN
                            })
                            Tg
                                .updateById(jsonwebtoken, decoded.data.user_id)
                                .then(() => {
                                    return res.status(200).json({
                                        success: 1,
                                        data: [{
                                            token: jsonwebtoken
                                        }]
                                    })
                                })
                        } else {
                            return res.status(200).json({
                                success: 1,
                                data: result
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
    } else {
        return res.status(412).json({
            sucess: 0,
            message: "Invalid secret key."
        })
    }
}
exports.deleteById = (req, res, next) => {
    const telegram_id = req.params.telegram_id
    const user_id = jwtHelper.decodeId(req)
    Tg
        .findById(telegram_id)
        .then(([result]) => {
            if (result.length > 0) {
                Tg.deleteById(telegram_id, user_id)
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