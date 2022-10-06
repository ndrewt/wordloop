const LangController = require('../controllers/languages')
const { is_auth } = require('../middleware/jwtHelper')
const { addLangValidation, langUpdateValidation } = require('../validation/validation')
const router = require('express').Router()

router.post('/add', addLangValidation, is_auth, LangController.postAdd)

router.get('/all', is_auth, LangController.getAll)

router.get('/id/:lang_id', is_auth, LangController.getById)

router.put('/update', langUpdateValidation, is_auth, LangController.putUpdate)

router.delete('/delete/:lang_id', is_auth, LangController.deleteById)

router.delete('/delete/name/:lang_name', is_auth, LangController.deleteByName)


module.exports = router