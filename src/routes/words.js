const WordsController = require('../controllers/words')
const { is_auth } = require('../middleware/jwtHelper')
const { wordAddValidation, wordUpdateValidation } = require('../validation/validation')
const router = require('express').Router()

router.post('/add', wordAddValidation, is_auth, WordsController.postAdd)

router.get('/all', is_auth, WordsController.getAll)

router.get('/id/:word_id', is_auth, WordsController.getById)

router.put('/update', wordUpdateValidation, is_auth, WordsController.putUpdate)

router.delete('/delete/:word_id', is_auth, WordsController.deleteById)


module.exports = router