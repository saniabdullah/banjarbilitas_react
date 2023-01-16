import React from 'react'
import { images } from '../../constants';

const TipDetail5 = () => {
  return (
    <>
        <div className='min-h-screen'>
            <div className='flex sm:flex-row flex-col justify-evenly pt-10 detail-content'>
            <div className="basis-3/4 detail-content-left min-h-max tip__detail border border-black">
                <h1 className="text-2xl pt-4 pl-4 detail-title font-bold">3 HAL PENTING SAAT MELAMAR PEKERJAAN SECARA ONLINE</h1>
                <img src={images.tip5} alt="barbarian" className='img__center__tip py-4'/>
                <p className='text-justify indent-8'>Perkembangan teknologi yang sudah semakin kekinian, mempermudah dalam segala sesuatunya. Banyak perusahaan yang menerapkan sistem recruitmen secara online. Itu semua dilakukan untuk mempermudah pengumpulan data sebuah perusahaan yang akan mencari karyawan terbaiknya, tanpa harus menumpuk berkas surat lamaran pelamar. Data tersebut sudah rapi berada didatabase perusahaan tersebut. Baiknya lagi, karena semua data pelamar yang masuk memiliki format yang sama. Sehingga semua data diri pelamar yang dibutuhkan perusahaan sudah terpenuhi. </p>
                <p className='text-justify indent-8 pt-5'>Setelah yakin dengan kompentensi keahlian yang dimiliki pelamar sesuai dengan kebutuhan yang diperlukan perusahaan, dan untuk memdukung tingkat keberhasilan pelamaran secara online sehingga bisa melanjutkan dalam proses wawancara, adapun 3 hal penting saat melamar pekerjaan secara online, sebagai berikut :</p>
                <ul>
                    <li>
                        <h2 className='text-xl pt-3 pb-1 font-semibold'>1. Surat lamaran yang terbaru</h2>
                        <p className='text-justify'>Selalu perbarui surat lamaran, sebelum file tersebut diupload ke website recruitmen perusahaan. Menghindari dari salah nama, alamat tujuan perusahaan dan juga penulisan tanggal. Setelah diubah nama, alamat tujuan perusahaan dan tanggal, tidak ada salahnya jika sebelum diupload kembali surat lamaran tersebut dibaca dengan teliti. Itu semua dilakukan untuk menghindari salah ketik atau kurangnya huruf pada kalimat-kalimatnya. Penggunakan kata yang sesuai dengan kamus besar bahasa Indonesia juga memberikan dampak positif, karena dari surat lamaran yang ditulis dapat mencerminkan pelamar memiliki kemampuan dalam menulis yang baik dan benar.</p>
                    </li>
                    <li>
                        <h2 className='text-xl pt-3 pb-1 font-semibold'>2. Selalui perbarui curriculum vitae/CV</h2>
                        <p className='text-justify'>Curriculum vitae atau daftar riwayat hidup adalah dokumen yang memberikan gambaran mengenai pengalaman seseorang dan kualifikasi lainnya. https://id.wikipedia.org/wiki/Curricullum_vitae Sehingga yang perlu diperhatikan adalah memperbarui data diri sehingga selalu up-to date, sehingga pihak perusahaan dapat mengetahui data diri terbaru pelamar. Data diri diubah hanya jika ada yang memang harus diubah, seperti nomer telfon yang mungkin sudah ganti. Karena jika pelamar sudah sampai tahap wawancara dan data diri pelamar tidak sesuai, itu akan menjadikan penilaian yang kurang baik, bisa jadi proses wawancara dihentikan karena data diri tidak terupdate.</p>
                    </li>
                    <li>
                        <h2 className='text-xl pt-3 pb-1 font-semibold'>3. Pastikan data diri terisi lengkap</h2>
                        <p className='text-justify'>Dalam melamar pekerjaan secara online, pelamar akan dibawa ke sebuah situs recruitmen perusahaan. Dalam situs tersebut terdapat beberapa kolom yang harus diisi. Pastikan kelengkapan isi kolom-kolom data diri tidak ada yang kosong. Karena biasanya, perusahaan akan melihat seberapa lengkap data diri pelamar terisi lengkap. Terlihat kosong dalam 1 kolom saja, akan mengurangi nilai. Bahkan bisa saja formulir pendaftran online kita tidak dilihat karena ada kolom data diri yang kosong. Pastikan kembali dengan membaca semua kolom yang sudah terisi dan benar, sesuai dengan data diri sebelum menekan tombol kirim.</p>
                    </li>
                </ul>
                <p className='text-justify indent-8 pt-5'>Persaingan dalam dunia kerja sangat ketat, salah dalam satu kali klik dalam recruitmen online dan memcoba mengulangi lagi akan membuat kredibilitas pelamar kurang baik. Dan akan dilihat oleh perusahaan bahwa pelamar memiliki pribadi yang kurang teliti. Pastikan untuk selalu mengaktifkan nomor telepon kalian yang bisa dihubungi setelah melamar pekerjaan online jika sewaktu-waktu dihubungi oleh perusahaan yang dilamar.</p>
            </div>
            </div>
        </div>
    </>
  )
}

export default TipDetail5