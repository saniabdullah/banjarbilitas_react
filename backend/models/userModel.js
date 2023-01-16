const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema

const userSchema = new Schema({
    firstname: {
        type: String,
        require: true,
        unique: true
    },
    lastname: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    phone: {
        type: String
    },
    alamat: {
        type: String
    },
    usia: {
        type: String
    },
    gender: {
        type: String
    }
})

// static signup method
userSchema.statics.signup = async function(firstname, lastname, email, password, phone, alamat, usia, gender) {
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({ firstname, lastname, email, password: hash, phone, alamat, usia, gender })

    return user
}

// static login method
userSchema.statics.login = async function(email, password) {
    
    if (!email || !password) {
        throw Error('All fields must be filled')
    }

    const user = await this.findOne({ email })

    if (!user) {
        throw Error('Incorrect email')
    }

    const match = await bcrypt.compare(password, user.password)

    if (!match) {
        throw Error('Incorrect password')
    }

    return user
}

module.exports = mongoose.model('User', userSchema)