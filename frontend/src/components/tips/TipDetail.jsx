import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import { images } from '../../constants';


const TipDetail = () => {
    // const tips = [
    //     {id: '1', imgurl: images.amazon, 
    //     content: 'Banyak sekali informasi mengenai lowongan pekerjaan dapat kita peroleh darimana saja, bisa dalam bentuk media masa baik cetak maupun eletronik, berupa poster di sebuah dinding pengumuman hingga dapat ditemukan dalam Job Fair. Job Fair dibentuk dan ditujukan kepada mereka yang membutuhkan informasi mengenai lowongan pekerjaan dari suatu perusahaan yang sedang membuka rekrutmen. Namun, banyak di antara pencari kerja yang belum tahu bagaimana agar dapat mengoptimalkan kehadiran dalam suatu Job Fair agar tidak membuang-buang waktu, tenaga, dan bahkan uang. Setidaknya ada beberapa tips yang dihimpun oleh tim Kerjabilitas setelah mengamati beberapa Job Fair yang pernah diikuti:', 
    //     },
    // ];

    // const [tip, setTip] = useState('')

    // const { id } = useParams();
    
    // useEffect(() => {
    //     const foundTip = tips.find(tip => tip.id === id);
    //     setTip(foundTip);
    //   }, [id]);    


  return (
    <>
        <div className='min-h-screen'>
            <div className='flex sm:flex-row flex-col justify-evenly pt-10 detail-content'>
            <div className="basis-3/4 detail-content-left min-h-max tip__detail border border-black">
                <h1 className="text-2xl pt-4 pl-4 detail-title font-bold">BEKAL YANG HARUS DIBAWA SEBELUM KE JOB FAIR</h1>
                <img src={images.tip1} alt="barbarian" className='img__center__tip py-4'/>
                <p className='text-justify indent-8'>Banyak sekali informasi mengenai lowongan pekerjaan dapat kita peroleh darimana saja, bisa dalam bentuk media masa baik cetak maupun eletronik, berupa poster di sebuah dinding pengumuman hingga dapat ditemukan dalam Job Fair. Job Fair dibentuk dan ditujukan kepada mereka yang membutuhkan informasi mengenai lowongan pekerjaan dari suatu perusahaan yang sedang membuka rekrutmen. Namun, banyak di antara pencari kerja yang belum tahu bagaimana agar dapat mengoptimalkan kehadiran dalam suatu Job Fair agar tidak membuang-buang waktu, tenaga, dan bahkan uang. Setidaknya ada beberapa tips yang dihimpun oleh tim Kerjabilitas setelah mengamati beberapa Job Fair yang pernah diikuti:</p>
                <ul>
                    <li>
                        <p className='text-justify pt-3'><span className='text-black font-semibold'>1.</span> Sebelum berangkat dan mengikuti suatu Job Fair, kenali dulu siapa penyelenggara dan berbayar atau gratis dan apakah terbuka lowongan bagi disabilitas.
Ada banyak sekali jenis Job Fair yang diselenggarakan, baik diselenggarakan oleh Pemerintah khususnya Dinas Tenaga Kerja; Provinsi dan/atau kabupaten/kota, universitas, maupun penyelenggara Job Fair dari pihak swasta. Kebanyakan Job Fair yang diselenggarakan oleh Dinas Tenaga Kerja bersifat terbuka dan gratis. Sedangkan, bursa kerja yang diselenggarakan oleh universitas bersifat semi terbuka dan memberlakukan sistem membership (keanggotaan), yang dimana anggota mendapatkan harga khusus hingga gratis. Sebaliknya, penyelenggara Job Fair swasta biasanya bersifat terbuka namun berbayar. Dalam setiap gelaran Job Fair selalu diinformasikan dalam bentuk poster yang mempermudah pencari kerja mengetahui dengan cepat penyelenggara, besaran biaya, hingga terbukanya atau tersedianya lowongan bagi penyandang disabilitas. Beberapa Dinas Tenaga Kerja di tingkat kabupaten/kota dan/atau propinsi biasanya menuliskan juga bahwa Job Fair terbuka pula bagi penyandang disabilitas dengan menyediakan akomodasi lokasi yang aksesibel, sehingga pelamar kerja dengan disabilitas dapat dengan tenang mengikuti Job Fair tersebut. </p>
                    </li>
                    <li>
                        <p className='text-justify pt-3'><span className='text-black font-semibold'>2.</span> Siapkan berkas yang dibutuhkan untuk melamar pekerjaan.
Beda perusahaan, beda lowongan, berbeda juga jenis berkas yang dibutuhkan dalam melamar sebuah lowongan. Namun biasanya yang wajib dibuat adalah daftar riwayat hidup/CV (berbagai template CV bisa dilihat melalui link berikut: https://www.canva.com/id_id/contoh/cv/), kualifikasi pendidikan terakhir (ijazah terakhir), dan surat lamaran. Beberapa yang lain mensyaratkan Surat Keterangan Berkelakuan Baik (SKCK) dari kepolisian dan surat keterangan sehat dari RSUD atau puskesmas. Siapkan berkas-berkas tersebut dalam dua bentuk; bentuk cetak dan bentuk soft file. Hal ini dikarenakan ada sejumlah perusahaan yang menggunakan sistem pelamaran secara online, dimana semua berkas harus bersifat soft file yang kemudian dengan mudah dapat diunggah ke sistem rekrutmen perusahaan. Jadi, tidak perlu lagi bawa setumpuk berkas untuk lowongan pekerjaan ke Job Fair, cukup bawa flash disk saja. </p>
                    </li>
                    <li>
                        <p className='text-justify pt-3'><span className='text-black font-semibold'>3.</span> Siapkan juga bahan dan diri untuk langsung walk-in-interview.
Beberapa perusahaan biasanya juga membuka lowongan pekerjaan untuk posisi manajerial sehingga membutuhkan kandidat yang berkualitas dalam waktu yang cukup singkat. Hal ini biasanya disiasati oleh perusahaan dengan menggunakan sistem walk-in-interview dimana, peserta Job Fair dapat dengan langsung melakukan proses wawancara tahap awal tanpa mengikuti serangkaian proses sebelumnya. Biasanya pihak penyelenggara menyediakan lokasi khusus untuk wawancara sehingga peserta dapat meyampaikan seluruh potensi dirinya kepada perusahaan.  Ketika ada beberapa perusahaan impian kalian membuka bentuk rekrutmen seperti ini di sebuah Job Fair, kalian dapat mengutarakan seluruh kemampuan dan hal-hal unik kalian kepada perusahaan, sehingga perusahaan dengan secara keseluruhan dapat menilai kemampuan kalian. </p>
                    </li>
                    <li>
                        <p className='text-justify pt-3'><span className='text-black font-semibold'>4.</span> Tetap berusaha dan berdoa setelah mengikuti Job Fair.
Job Fair memang menyediakan kesempatan bagi semua pencari kerja yang datang, namun Job Fair bukanlah satu-satunya cara dan jawaban atas masalah pengangguran. Kalau seusai mengikuti Job Fair, maksimal dua minggu hingga satu bulan belum ada komunikasi lebih lanjut dengan perusahaan yang kalian lamar, itu bisa bermakna bahwa lamaran kalian belum diterima. Jadi jangan terlalu berlarut-larut menunggu keputusan dari satu perusahaan. Masih banyak perusahaan yang membuka kesempatan untuk berkarya dan menunggu kontribusi kalian.</p>
                    </li>
                </ul>
            </div>
            </div>
        </div>
    </>
  )
}

export default TipDetail