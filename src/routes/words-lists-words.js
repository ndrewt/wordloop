const WordsListsConstroller = require('../controllers/words-lists-words')
const { is_auth } = require('../middleware/jwtHelper')
const { wordListAddValidation } = require('../validation/validation')
const router = require('express').Router()

router.post('/add', wordListAddValidation, is_auth, WordsListsConstroller.postAdd)

router.get('/id/:list_id', is_auth, WordsListsConstroller.getById)

router.delete('/delete/:word_id', is_auth, WordsListsConstroller.deleteById)


module.exports = router