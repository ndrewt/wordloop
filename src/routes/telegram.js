const TgController = require('../controllers/telegram')
const { is_auth } = require('../middleware/jwtHelper')
const router = require('express').Router()

router.post('/add/:telegram_id', is_auth, TgController.postAdd)

router.get('/id', TgController.getById)

router.delete('/delete/:telegram_id', is_auth, TgController.deleteById)


module.exports = router