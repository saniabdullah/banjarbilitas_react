import React from 'react'
import './Profil.scss'
import { images } from '../../constants';
import { BsFillFilePostFill } from 'react-icons/bs';
import { FiSend, FiPhoneCall } from 'react-icons/fi';


const Profil = () => {
  return (
    <>
        <article className='profile'>
            <picture className='profile__img'>
                <img src={images.banjarbilitas}/>
            </picture>

            <div className="profile__content">
              <div className='profile__header'>
                <h1>Buat <span style={{color: 'white'}}>PROFIL KERJABILITAS</span> dan raih peluangmu!</h1>      
              </div>  
              <div>
                <div className='profile__p pb-8'><BsFillFilePostFill />Selalu di depan dengan peluang kerja baru yang dikirim lewat email setiap hari</div>
                <div className='profile__p'><FiSend />Melamar cepat dengan aplikasi lamaran yang sudah di lengkapi lebih dulu</div>
                <div className='profile__p'><FiPhoneCall />Mudah di hubungi oleh penyedia kerja dan peluang yang sesuai kualifikasi kamu</div>
                <div className='button-search lg:pt-12'>
                  <button type="button" >Ayo!</button>
                </div>
              </div>        
            </div>
        </article>
    </>
  )
}

export default Profil