const LangController = require('../controllers/languages')
const { is_auth } = require('../middleware/is-auth')
const router = require('express').Router()

router.post('/add', is_auth, LangController.postAdd)

router.get('/all', is_auth, LangController.getAll)

router.get('/id/:lang_id', is_auth, LangController.getById)

router.put('/update', is_auth, LangController.putUpdate)

router.delete('/delete/:lang_id', is_auth, LangController.deleteById)


module.exports = router