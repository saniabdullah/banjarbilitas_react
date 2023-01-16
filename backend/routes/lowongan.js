const express = require('express')
const { getLowongans, getLowongan, deleteLowongan, updateLowongan } = require('../controllers/lowonganController')
const router = express.Router()

const Lowongan = require('../models/lowonganModel')
const multer = require('multer')
const fs = require("fs")

// GET all lowongans
router.get('/', getLowongans)

// GET a single lowongan
router.get('/:id', getLowongan)

// POST a new lowongan
const Storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})

const upload = multer({
    storage: Storage
})

router.post('/', upload.single('fotoPerusahaan'), (req, res) => {
    const lowongan = new Lowongan({
        namaPerusahaan: req.body.namaPerusahaan,
        namaPekerjaan: req.body.namaPekerjaan,
        jenisDisabilitas: req.body.jenisDisabilitas,
        lokasiPerusahaan: req.body.lokasiPerusahaan,
        deadlineDate: req.body.deadlineDate,
        detailLowongan: req.body.detailLowongan,
        kreteriaUmum: req.body.kreteriaUmum,
        kreteriaKhusus: req.body.kreteriaKhusus,
        catatanLain: req.body.catatanLain,
        tentangPerusahaan: req.body.tentangPerusahaan,
        kategoriPekerjaan: req.body.kategoriPekerjaan,
        spesifikasiPekerjaan: req.body.spesifikasiPekerjaan,
        fotoPerusahaan: 
            { data: fs.readFileSync("uploads/" + req.file.filename), 
            contentType: "image/png" 
        } 
    });
    lowongan
        .save()
        .then((res) => {
            console.log("Data is saved");
        })
        .catch((err) => {
            console.log(err, "error");
        })
})

// DELETE a lowongan
router.delete('/:id', deleteLowongan)

// UPDATE a lowongan
router.patch('/:id', updateLowongan)

module.exports = router