const authController = require('../controllers/auth')
const adminController = require('../controllers/admin')
const { is_auth } = require('../middleware/jwtHelper')
const { loginValidation, singUpValidation } = require('../validation/validation')
const router = require('express').Router()

router.post('/signup', singUpValidation, authController.postSignup)

router.post('/login', loginValidation, authController.postlogin)


// SOON
// router.delete('/delete:id', adminController.deleteUser)

// router.patch('/update', adminController.updateUser)

// router.get('/all', adminController.getUsers)
module.exports = router