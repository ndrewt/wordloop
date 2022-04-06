const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { body, validationResult } = require('express-validator');

exports.postSignup = (req, res, next) => {
    const name = req.body.user_name
    const login = req.body.user_login
    const salt = bcrypt.genSaltSync(10)
    const password = bcrypt.hashSync(req.body.user_password, salt)
    User
        .findByLogin(login)
        .then(([result]) => {

            if (result.length < 1) {
                const user = new User(null, name, login, password)
                user
                    .save()
                    .then(result => {
                        return res.status(201).json({
                            success: 1,
                            message: "User successfully created."
                        })
                    })

            } else {
                return res.status(400).json({
                    success: 0,
                    message: "Login is taken, try another one."
                })

            }
        })
        .catch(err => {
            console.log(err)
            return res.status(500).json({
                success: 0,
                message: "Database connection error."
            })
        })

}


exports.postlogin = (req, res, next) => {
    const body = req.body
    const password = body.user_password
    User
        .findByLogin(body.user_login)
        .then(([results]) => {
            if (results.length < 1) {
                return res.status(400).json({
                    success: 0,
                    message: 'Invalid login.'
                })
            }
            const comp_pass = results[0].user_password
            bcrypt.compare(password, comp_pass)
                .then(doMatch => {
                    if (doMatch) {
                        results[0].user_password = undefined
                        const jsonwebtoken = jwt.sign({ result: results[0] }, process.env.JWT_KEY, {
                            expiresIn: "1h"
                        })
                        return res.status(200).json({
                            success: 1,
                            message: "Successful login.",
                            token: jsonwebtoken
                        })
                    } else {
                        return res.status(400).json({
                            success: 0,
                            message: 'Invalid password.'
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