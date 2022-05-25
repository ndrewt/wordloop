const joi = require('@hapi/joi')
const string = require('@hapi/joi/lib/types/string')

const schema = {
    //AUTH SCHEMAS
    login: joi.object({
        user_login: joi.string().max(45).required(),
        user_password: joi.string().min(6).max(45).required()
    }),
    signup: joi.object({
        user_name: joi.string().max(45).required(),
        user_login: joi.string().max(45).required(),
        user_password: joi.string().min(6).max(45).required()
    }),
    //LANGUAGES SCHEMAS
    langAdd: joi.object({
        lang_name: joi.string().required()
    }),
    langUpdate: joi.object({
        lang_id: joi.number().required(),
        lang_name: joi.string().required()
    }),
    //WORDS SCHEMAS
    wordAdd: joi.object({
        word_lang1: joi.string().required(),
        word_lang2: joi.string().required(),
        lang1_id: joi.number().required(),
        lang2_id: joi.number().required(),
        description: joi.string().required()
    }),
    wordUpdate: joi.object({
        word_id: joi.number().required(),
        word_lang1: joi.string().required(),
        word_lang2: joi.string().required(),
        lang1_id: joi.number().required(),
        lang2_id: joi.number().required(),
        description: joi.string().required()
    }),
    //WORDS-LISTS SCHEMAS
    listAdd: joi.object({
        list_name: joi.string().required(),
        lang1_id: joi.number().required(),
        lang2_id: joi.number().required()
    }),
    listUpdate: joi.object({
        list_id: joi.number().required(),
        list_name: joi.string().required(),
        lang1_id: joi.number().required(),
        lang2_id: joi.number().required()
    }),
    //WORDS_LISTS_WORDS SCHEMAS
    wordsListAdd: joi.object({
        list_id: joi.number().required(),
        word_id: joi.number().required()
    })
}
module.exports = schema