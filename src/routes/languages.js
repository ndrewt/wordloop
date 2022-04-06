const LangController = require('../controllers/languages')
const { is_auth } = require('../middleware/is-auth')
const router = require('express').Router()

router.post('/add', is_auth, LangController.postAdd)

router.get('/all', is_auth, LangController.getAll)


module.exports = router