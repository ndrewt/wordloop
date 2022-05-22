const { login, signup, langAdd, langUpdate, wordAdd, wordUpdate, listAdd, listUpdate, wordsListAdd } = require('./schemas')

module.exports = {
    //AUTH VALIDATION
    loginValidation: (req, res, next) => {
        const value = login.validate(req.body)
        if (value.error) {
            res.json({
                success: 0,
                message: value.error.details[0].message
            })
        } else {
            next()
        }
    },
    singUpValidation: (req, res, next) => {
        const value = signup.validate(req.body)
        if (value.error) {
            res.json({
                success: 0,
                message: value.error.details[0].message
            })
        } else {
            next()
        }
    },
    //LANGUAGES VALIDATION
    addLangValidation: (req, res, next) => {
        const value = langAdd.validate(req.body)
        if (value.error) {
            res.json({
                success: 0,
                message: value.error.details[0].message
            })
        } else {
            next()
        }
    },
    langUpdateValidation: (req, res, next) => {
        const value = langUpdate.validate(req.body)
        if (value.error) {
            res.json({
                success: 0,
                message: value.error.details[0].message
            })
        } else {
            next()
        }
    },
    //WORDS VALIDATION
    wordAddValidation: (req, res, next) => {
        const value = wordAdd.validate(req.body)
        if (value.error) {
            res.json({
                success: 0,
                message: value.error.details[0].message
            })
        } else {
            next()
        }
    },
    wordUpdateValidation: (req, res, next) => {
        const value = wordUpdate.validate(req.body)
        if (value.error) {
            res.json({
                success: 0,
                message: value.error.details[0].message
            })
        } else {
            next()
        }
    },
    //WORDS-LISTS VALIDATION
    listAddValidation: (req, res, next) => {
        const value = listAdd.validate(req.body)
        if (value.error) {
            res.json({
                success: 0,
                message: value.error.details[0].message
            })
        } else {
            next()
        }
    },
    listUpdateValidation: (req, res, next) => {
        const value = listUpdate.validate(req.body)
        if (value.error) {
            res.json({
                success: 0,
                message: value.error.details[0].message
            })
        } else {
            next()
        }
    },
    //WORDS_LISTS_WORDS
    wordListAddValidation: (req, res, next) => {
        const value = wordsListAdd.validate(req.body)
        if (value.error) {
            res.json({
                success: 0,
                message: value.error.details[0].message
            })
        } else {
            next()
        }
    }
}