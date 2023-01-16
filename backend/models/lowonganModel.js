const mongoose = require('mongoose')

const Schema = mongoose.Schema

const lowonganSchema = new Schema({
    fotoPerusahaan: {
        data: Buffer, 
        contentType: String 
    },
    namaPerusahaan: {
        type: String,
        require: true
    },
    namaPekerjaan: {
        type: String,
        require: true
    },
    jenisDisabilitas: {
        type: String,
        require: true
    },
    lokasiPerusahaan: {
        type: String,
        require: true
    },
    deadlineDate: {
        type: String,
        require: true
    },
    detailLowongan: {
        type: String,
        require: true
    },
    kreteriaUmum: {
        type: String,
        require: true
    },
    kreteriaKhusus: {
        type: String,
        require: true
    },
    catatanLain: {
        type: String,
        require: true
    },
    tentangPerusahaan: {
        type: String,
        require: true
    },
    kategoriPekerjaan: {
        type: String,
        require: true
    },
    spesifikasiPekerjaan: {
        type: String,
        require: true
    }
}, { timestamps: true})

module.exports = mongoose.model('Lowongan', lowonganSchema)