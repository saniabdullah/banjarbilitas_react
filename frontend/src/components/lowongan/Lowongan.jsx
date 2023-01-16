import React,{ useEffect, useState } from 'react'
import { AppWrap, MotionWrap } from '../../wrapper'
import CardLowongan from './CardLowongan';
import './Lowongan.scss'
import { images } from '../../constants';

const Lowongan = ({lowongan}) => {
    const [filterLowongan, setFilterLowongan] = useState(lowongan);
    console.log(lowongan)
    const companies = [
        {imgurl: images.amazon, name: "PT. Hasnur Informasi Teknologi", posisi: 'Programmer', divisi: 'Sistem Development', kualifikasi: 'Beberapa Jenis Disabilitas', lokasi: 'Banjarmasin - kalimantan selatan', batasWaktu: 'Tutup : 2 Minggu Lagi!'},
        {imgurl: images.adidas, name: "PT. Barito Putera", posisi: 'Sistem Analis', divisi: 'Sistem Development', kualifikasi: 'Beberapa Jenis Disabilitas', lokasi: 'Banjarmasin - kalimantan selatan', batasWaktu: 'Tutup : 2 Minggu Lagi!'},
        {imgurl: images.adidas, name: "PT. Hasnur Media Citra", posisi: 'Teknikal Support', divisi: 'Sistem Development', kualifikasi: 'Beberapa Jenis Disabilitas', lokasi: 'Banjarmasin - kalimantan selatan', batasWaktu: 'Tutup : 2 Minggu Lagi!'},
        {imgurl: images.adidas, name: "PT. Hasnur Jaya Utama", posisi: 'Programmer', divisi: 'Sistem Development', kualifikasi: 'Beberapa Jenis Disabilitas', lokasi: 'Banjarmasin - kalimantan selatan', batasWaktu: 'Tutup : 2 Minggu Lagi!'},
        {imgurl: images.adidas, name: "PT. Adaro", posisi: 'Sistem Analis', divisi: 'Sistem Development', kualifikasi: 'Beberapa Jenis Disabilitas', lokasi: 'Banjarmasin - kalimantan selatan', batasWaktu: 'Tutup : 2 Minggu Lagi!'},
        {imgurl: images.amazon, name: "PT. Pama Indo Mining", posisi: 'Programmer', divisi: 'Sistem Development', kualifikasi: 'Beberapa Jenis Disabilitas', lokasi: 'Banjarmasin - kalimantan selatan', batasWaktu: 'Tutup : 2 Minggu Lagi!'},
    ]; 

  return (
    <div>
      <>
        <div className='app__work-portfolio'>
        <h2 style={{textAlign: 'center', color: '#cc4a1f', fontSize: '28px'}} >Lowongan Terbaru</h2>

        { companies.length && companies.map((company, index) =>(
          <CardLowongan 
            key={index}  
            imgurl={company.imgurl} 
            name={company.name} 
            posisi={company.posisi} 
            divisi={company.divisi} 
            kualifikasi={company.kualifikasi} 
            lokasi={company.lokasi} 
            batasWaktu={company.batasWaktu}
          />
          ))
        }
        </div>
      </>
    </div>
  )
}

export default AppWrap(
  MotionWrap(Lowongan));
// export default Lowongan