const Lowongan = require('../models/lowonganModel')
const mongoose = require('mongoose')


// GET all lowongans
const getLowongans = async (req, res) => {
    const lowongans = await Lowongan.find({}).sort({createdAt: -1})

    res.status(200).json(lowongans)
}

// GET a single lowongan
const getLowongan = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such lowongan'})
    }

    const lowongan = await Lowongan.findById(id)

    if (!lowongan) {
        return res.status(404).json({ error: 'No such lowongan' })
    }

    res.status(200).json(lowongan)
}

// DELETE a product
const deleteLowongan =  async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such lowongan' })
    }

    const lowongan = await Lowongan.findOneAndDelete({ _id: id })

    if (!lowongan) {
        return res.status(400).json({ error: 'No such lowongan' })
    }

    res.status(200).json(lowongan)
}

// UPDATE a lowongan
const updateLowongan = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such lowongan' })
    }

    const lowongan = await Lowongan.findOneAndUpdate({ _id: id}, {
        ...req.body
    })

    if (!lowongan) {
        return res.status(400).json({error: 'No such lowongan'})
    }

    res.status(200).json(lowongan)
}

module.exports = {
    getLowongans, getLowongan, deleteLowongan, updateLowongan
}