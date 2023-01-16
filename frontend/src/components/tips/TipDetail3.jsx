import React from 'react'
import { images } from '../../constants';

const TipDetail3 = () => {
  return (
    <>
        <div className='min-h-screen'>
            <div className='flex sm:flex-row flex-col justify-evenly pt-10 detail-content'>
            <div className="basis-3/4 detail-content-left min-h-max tip__detail border border-black">
                <h1 className="text-2xl pt-4 pl-4 detail-title font-bold">MAKSIMALKAN AKHIR MINGGUMU UNTUK MEMAKSIMALKAN PEKERJAANMU</h1>
                <img src={images.tip3} alt="barbarian" className='img__center__tip py-4'/>
                <p className='text-justify indent-8'>Selama ini banyak yang menganggap bahwa weekend atau akhir pekan adalah saat yang tepat untuk “melupakan “ sejenak rutinitas kerja sehari-hari selama satu minggu penuh, bersenang-senang, mungkin ini cara yang tepat bagi kalian yang tidak sepenuhnya mencintai dan menyukai pekerjaan mereka, lalu bagaimana dengan kalian yang menyukai pekerjaan anda dan siapa tahu weekend dapat memberikan pandangan lain untuk memaksimalkan karir kalian. </p>
                <p className='text-justify indent-8 pt-5'>Pertimbangkan ini, akhir pekan adalah waktu yang menyenangkan pula untuk meningkatkan karir kalian. </p>
                <p className='text-justify indent-8 pt-5'>Sebelum kalian berpikir bahwa akan sangat merepotkan dan tidak menyenangkannya memikirkan pekerjaan pada saat akhir pekan, berikut ada hal-hal yang bisa dilakukan untuk fokus pada hal yang penting pada karir atau impian yang sedang kalian wujudkan. </p>
                <ul>
                    <li>
                        <h2 className='text-xl pt-3 pb-1 font-semibold'>1. Membangun kembali “ Brand” kalian secara professional</h2>
                        <p className='text-justify'>Brand disini berarti adalah Portofolio ataupun Curriculum Vitae (CV). Selama ini mungkin karena terlalu sibuk bekerja kalian lupa untuk memperbarui Portofolio atau CV, lengkapi dengan karya ataupun hasil kerja kalian selama bekerja di tempat kerja sekarang. Ini juga bisa berarti bagi mereka yang merintis sebuah usaha baik Start Up atau E-Commerce yang sedang kalian mulai. Akhir pekan menawarkan banyak kesempatan dalam mengembangkannya. </p>
                    </li>
                    <li>
                        <h2 className='text-xl pt-3 pb-1 font-semibold'>2. Meningkatkan project-project  yang spesial</h2>
                        <p className='text-justify'>Sering kali dalam karir kita ada beberapa hal yang sangat kita sukai tidak bisa kita lakukan di tempat kerja, layaknya “me time” meningkatkan proyek spesial kalian yang akan kalian mulai atau sempat tertunda dapat menyegarkan kembali pikiran kalian, hal ini juga dapat memperbaiki manajemen waktu kalian selama bekerja.</p>
                    </li>
                    <li>
                        <h2 className='text-xl pt-3 pb-1 font-semibold'>3. Mempelajari hal baru</h2>
                        <p className='text-justify'>Di era serba digital ini banyak sekali hal baru, baik hal kreatif, inovatif , menarik dan keren diluar sana. Terlebih kalian yang sangat terhubung dengan tekhnologi dapat mempelajari menggunakan tekhnologi tersebut untuk mempermudah karir dan kehidupan anda, semakin sedikit pula waktu yang terbuang untuk menyesali pekerjaan yang tidak anda suka.</p>
                    </li>
                    <li>
                        <h2 className='text-xl pt-3 pb-1 font-semibold'>4. Menjadi lebih teroganisir</h2>
                        <p className='text-justify'>Hari senin mungkin bisa menjadi mimpi buruk bagi kalian, karena jadwal yang saling betabrakan, belum selesainya pekerjaan minggu lalu membuat kalian semakin membenci hari senin, namun hal tersebut dapat dikurangi dengan membuat semua lebih terorganisir pada akhir pekan. Pada hari minggu kalian dapat mengatur semuanya, berpikir strategis perencanaan di minggu depan, memprioritaskan mana yang lebih penting dan mengerjakan yang lain setelahnya.</p>
                    </li>
                </ul>
                <p className='text-justify indent-8 pt-5'>Kedisiplinan dan keinginan untuk memajukan karir kalian pada saat akhir pekan akan memaksimalkan karir kalian selanjutnya. Selamat mencoba dan jangan lupa nikmati akhir pekanmu. </p>
            </div>
            </div>
        </div>
    </>
  )
}

export default TipDetail3