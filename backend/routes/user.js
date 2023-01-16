const express = require('express')
const { loginUser, signupUser, getUsers, getUser, updateUser } = require('../controllers/userController')
const router = express.Router()

// get all users
router.get('/', getUsers)

// get user
router.get('/:id', getUser)

// login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)

// UPDATE a user 
router.patch('/:id', updateUser)

module.exports = router