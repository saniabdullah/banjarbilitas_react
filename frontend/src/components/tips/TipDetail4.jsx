import React from 'react'
import { images } from '../../constants';

const TipDetail4 = () => {
  return (
    <>
        <div className='min-h-screen'>
            <div className='flex sm:flex-row flex-col justify-evenly pt-10 detail-content'>
            <div className="basis-3/4 detail-content-left min-h-max tip__detail border border-black">
                <h1 className="text-2xl pt-4 pl-4 detail-title font-bold">KULIAH SAMBIL KERJA? WHY NOT?</h1>
                <img src={images.tip4} alt="barbarian" className='img__center__tip py-4'/>
                <p className='text-justify indent-8'>Bekerja memanglah sangat mengasyikkan apalagi untuk kamu yang baru terjun di dunia kerja. Nah kalau saat kuliah sambil kerja itu juga sesuatu yang menantang dan membanggakan yang bisa kamu capai, karena tidak semua orang mudah melakukan dua aktifitas ini secara bersamaan. Bekerja sambil kuliah juga sebagian banyak orang dilakukan demi mendapatkan pendidikan yang lebih baik dan tentunya gelar yang lebih tinggi. Kita tidak memungkiri bahwa gelar seseorang itu mempengaruhi diri pribadi orang tersebut. Berikut tips dan trik agar kuliah dan kerjamu bisa berjalan beriringan :</p>
                <ul>
                    <li>
                        <h2 className='text-xl pt-3 pb-1 font-semibold'>1. Pandai membagi waktu</h2>
                        <p className='text-justify'>Aturlah waktumu sebaik mungkin, jangan sampai pekerjaanmu mengganggu aktivitas perkuliahanmu karena sebelum mengambil keputusan untuk kerja pastinya ada konsekuensi tersendiri yang harus kamu tanggung. Apabila pekerjaanmu tadi benar-benar sudah menyita waktumu coba carilah pekerjaan freelance yang tidak begitu menguras waktu dan tenagamu</p>
                    </li>
                    <li>
                        <h2 className='text-xl pt-3 pb-1 font-semibold'>2. Mantapkan niatmu</h2>
                        <p className='text-justify'>Kuliah sambil bekerja itu bukanlah pekerjaan yang mudah, ada saja halangan yang kapan saja bisa menggodamu untuk malas-malasan dalam mengerjakannnya. Namun apabila dari awal kamu sudah bertekad, berniat ingin bekerja sambil kuliah tentulah kamu bisa menghalau rintangan itu menjadi pemicu semangatmu dalam menjalani rutinitas kuliah dan kerjamu.</p>
                    </li>
                    <li>
                        <h2 className='text-xl pt-3 pb-1 font-semibold'>3. Proses belajar</h2>
                        <p className='text-justify'>Pengalaman adalah guru yang terbaik, kalimat ini bisa kamu jadikan sebuah proses dari belajar bahwa kelebihan menjalani kuliah sambil bekerja itu bisa membuat diri kamu mengenali dunia kerja lebih baik lagi. Akan banyak pengalaman yang kamu dapat dari sini. Kamu akan lebih bisa beradaptasi dan bersosialisasi dengan orang-orang yang pastinya berbeda karakternya.</p>
                    </li>
                    <li>
                        <h2 className='text-xl pt-3 pb-1 font-semibold'>4. Memilih pekerjaan yang tidak menyita waktu</h2>
                        <p className='text-justify'>Saat kamu memutuskan untuk kuliah sambil bekerja tentulah itu menjadi pertimbangan sendiri untuk masa depanmu. Carilah pekerjaan yang tidak begitu menyita waktu, tetap bisa memprioritaskan keduanya. Misal cari pekerjaan sesuai dengan passionmu, bisa sebagai freelance di agency pemotretan atau bisa menjadi seorang penulis atau editor yang setiap waktu bisa kamu atur jadwalnya.</p>
                    </li>
                </ul>
                <p className='text-justify indent-8 pt-5'>Mendapat hasil dari kita bekerja itu memang sesuatu yang sangat di nanti dan membanggakan namun tidak selamanya uang menjadi satu-satunya tujuan kita untuk bekerja. Segala sesuatu yang kita kerjakan pastinya punya resikonya masing-masing, tinggal bagaimana kita bisa memanfaatkan peluang itu dengan baik. Sehingga ketika ada kesempatan untuk mencari pengalaman dengan bekerja ketika kita sedang menempuh pendidikan, bisa memperkaya diri kita menjadi lebih baik. </p>
            </div>
            </div>
        </div>
    </>
  )
}

export default TipDetail4