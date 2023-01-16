import React from 'react'
import { images } from '../../constants';

const TipDetail2 = () => {
  return (
    <>
        <div className='min-h-screen'>
            <div className='flex sm:flex-row flex-col justify-evenly pt-10 detail-content'>
            <div className="basis-3/4 detail-content-left min-h-max tip__detail border border-black drop-shadow-lg">
                <h1 className="text-2xl pt-4 pl-4 detail-title font-bold">CARA ASYIK BERINTERAKSI DENGAN ORANG DENGAN AUTISME.</h1>
                <img src={images.tip2} alt="barbarian" className='img__center__tip py-4'/>
                <p className='text-justify indent-8'>Mungkin ada beberapa dari kalian yang masih bingung bagaimana berinteraksi dengan orang dengan autisme, terutama masih banyak yang menganggap bahwa autisme hanya terjadi pada anak kecil dan usia dini. Nah kali ini kami akan memberikan tips bagaimana berinteraksi dengan orang dengan autisme. Dalam hal ini adalah cara berkomunikasi dan memahami perilaku sosialnya. </p>
                <ul>
                    <li>
                        <h2 className='text-xl pt-3 pb-1 font-semibold'>1. Sapalah dan perkenalkanlah diri kalian.</h2>
                        <p className='text-justify'>Ketika bertemu dengan orang dengan autisme, sapalah mereka seperti biasa yang kamu lakukan setiap hari apabila bertemu orang baru. Tidak perlu canggung dan kikuk. Apabila mereka menghindar dan belum mau, tunggulah beberapa saat. Apabila situasi sudah baik, silahkan berkenalan kembali. </p>
                    </li>
                    <li>
                        <h2 className='text-xl pt-3 pb-1 font-semibold'>2. Jelaskan dan utarakan maksud kalian.</h2>
                        <p className='text-justify'>Hal ini sangat penting agar mereka mengerti apa yang sedang kalian lakukan. Terlebih jika kalian adalah orang baru di sekitar mereka. </p>
                    </li>
                    <li>
                        <h2 className='text-xl pt-3 pb-1 font-semibold'>3. Beri waktu bagi orang dengan Autisme untuk memahami informasi yang kamu akan bagikan.</h2>
                        <p className='text-justify'>Tunggulah responnya. Apabila tidak ada respon berikanlah respon secepatnya. Agar informasi yang kamu ingin sampaikan tidak salah arti dan semua bisa memahami.</p>
                    </li>
                    <li>
                        <h2 className='text-xl pt-3 pb-1 font-semibold'>4. Apabila bertanya, pertanyaan haruslah jelas.</h2>
                        <p className='text-justify'>Gunakan kalimat-kalimat yang mudah dan langsung dapat dimengerti.</p>
                    </li>

                    <li>
                        <h2 className='text-xl pt-3 pb-1 font-semibold'>5. Hindari kata-kata yang bermakna ganda atau humor yang tidak perlu.</h2>
                        <p className='text-justify'>Orang dengan autisme seringkali tidak paham dengan kata-kata yang bermakna ganda dan perumpamaan. Karena cenderung mereka akan mengulangi kalimatnya. Lalu meskipun kalian nanti akan terlibat dengan obrolan yang menarik hindari humor yang sekiranya mereka tidak akan mengerti dengan mudah.</p>
                    </li>
                    <li>
                        <h2 className='text-xl pt-3 pb-1 font-semibold'>6. Perhatikan lingkungan.</h2>
                        <p className='text-justify'>Orang dengan autisme biasanya sensitif terhadap cahaya, bau, dan suara. Kalau bisa jagalah lingkungan kalian berinteraksi tenang dan sepi.</p>
                    </li>
                    <li>
                        <h2 className='text-xl pt-3 pb-1 font-semibold'>7. Selalu bertanya pada pendamping atau orang tua orang dengan autisme.</h2>
                        <p className='text-justify'>Jika kalian bertemu mereka bersama pendamping dan orang tua mereka, selalu tanyakan apabila kalian menemukan masalah. Hal ini juga akan membantu kalian belajar lebih baik lagi untuk berinteraksi dengan orang dengan autisme. </p>
                    </li>
                </ul>
                <p className='text-justify indent-8 pt-5'>Berikut tadi adalah beberapa tips untuk berinteraksi dengan orang dengan autisme. Sangat sederhana bukan? Kami juga yakin semakin kalian sering berinteraksi dengan orang dengan autisme akan semakin mudah memahami hambatan apa yang mereka alami setiap harinya. Selamat mencoba!!</p>
            </div>
            </div>
        </div>
    </>
  )
}

export default TipDetail2