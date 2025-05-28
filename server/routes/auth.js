const express = require('express')
const router = express.Router()
const register = require('../controller/auth/register')
const google = require('../controller/auth/google')
const { route } = require('../app')

router.route('/register').post(register)
router.route('/google').post(google)

module.exports = router