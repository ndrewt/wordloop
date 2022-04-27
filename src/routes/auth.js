const authController = require('../controllers/auth')
const adminController = require('../controllers/admin')
const { is_auth } = require('../middleware/jwtHelper')
const router = require('express').Router()

router.post('/signup', authController.postSignup)

router.post('/login', authController.postlogin)


// SOON
// router.delete('/delete:id', adminController.deleteUser)

// router.patch('/update', adminController.updateUser)

// router.get('/all', adminController.getUsers)
module.exports = router