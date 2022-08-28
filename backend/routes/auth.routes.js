const Router = require('express')
const {check, validationResult} = require('express-validator')
const authMiddleware = require('../middleware/auth.middleware')
const router = new Router()
const authController = require('../controllers/authController')

router.post('/registration',
    [
        check('email', 'Uncorrect email').isEmail(),
        check('password', 'Password must be longer than 3 and shorter than 12').isLength({min: 3, max: 12})
    ],
    authController.registration)

router.post('/login', authController.login)

router.get('/auth', authMiddleware, authController.auth)

module.exports = router
