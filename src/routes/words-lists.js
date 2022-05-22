const ListsConstroller = require('../controllers/words-lists')
const { is_auth } = require('../middleware/jwtHelper')
const { listAddValidation, listUpdateValidation } = require('../validation/validation')
const router = require('express').Router()

router.post('/add', listAddValidation, is_auth, ListsConstroller.postAdd)

router.get('/all', is_auth, ListsConstroller.getAll)

router.get('/id/:list_id', is_auth, ListsConstroller.getById)

router.put('/update', listUpdateValidation, is_auth, ListsConstroller.putUpdate)

router.delete('/delete/:list_id', is_auth, ListsConstroller.deleteById)


module.exports = router