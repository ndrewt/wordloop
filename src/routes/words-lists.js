const ListsConstroller = require('../controllers/words-lists')
const { is_auth } = require('../middleware/jwtHelper')
const router = require('express').Router()

router.post('/add', is_auth, ListsConstroller.postAdd)

router.get('/all', is_auth, ListsConstroller.getAll)

router.get('/id/:list_id', is_auth, ListsConstroller.getById)

router.put('/update', is_auth, ListsConstroller.putUpdate)

router.delete('/delete/:list_id', is_auth, ListsConstroller.deleteById)


module.exports = router