const User = require('../models/userModel')
const jwt = require('jsonwebtoken') 
const mongoose = require('mongoose')


const createToken = (_id) => {
    return jwt.sign({_id}, 'userBanjarbilitas', {expiresIn: '3d'})
}

// login user
const loginUser = async (req, res) => {
    const {email, password} = req.body

    try {
        const user = await User.login(email, password)

        // create token
        const token = createToken(user._id)

        res.status(200).json({email, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// signup user
const signupUser = async (req, res) => {
    const {firstname, lastname, email, password, phone, alamat, usia, gender} = req.body

    try {
        const user = await User.signup(firstname, lastname, email, password, phone, alamat, usia, gender)

        // create token
        const token = createToken(user._id)

        res.status(200).json({email, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// GET all users
const getUsers = async (req, res) => {
    const users = await User.find({}).sort({createdAt: -1})

    res.status(200).json(users)
}

// GET a single user
const getUser = async (req, res) => {
    const { id } = req.params

    // if (!mongoose.Types.ObjectId.isValid({_id: id})) {
    //     return res.status(404).json({error: 'No such user'})
    // }

    const user = await User.findById(id)

    if (!user) {
        return res.status(404).json({ error: 'No such user' })
    }

    res.status(200).json(user)
}

const updateUser = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such user' })
    }

    console.log(id);

    const user = await User.findOneAndUpdate({ _id: id}, {
        ...req.body
    })

    console.log(req.body)

    if (!user) {
        return res.status(400).json({error: 'No such user'})
    }

    res.status(200).json(user)
}

module.exports = { loginUser, signupUser, getUsers, getUser, updateUser }