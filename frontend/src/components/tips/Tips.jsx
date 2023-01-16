import React, {useState} from 'react'
import TipCard from './TipCard';
import './Tips.scss'
import { images } from '../../constants';

const Tips = () => {

    const tips = [
        {id: '1', imgurl: images.tip1, title: "BEKAL YANG HARUS DIBAWA SEBELUM KE JOB FAIR"},
        {id: '2', imgurl: images.tip2, title: "CARA ASYIK BERINTERAKSI DENGAN ORANG DENGAN AUTISME."},
        {id: '3', imgurl: images.tip3, title: "MAKSIMALKAN AKHIR MINGGUMU UNTUK MEMAKSIMALKAN PEKERJAANMU"},
        {id: '4', imgurl: images.tip4, title: "KULIAH SAMBIL KERJA? WHY NOT?"},
        {id: '5', imgurl: images.tip5, title: "3 HAL PENTING SAAT MELAMAR PEKERJAAN SECARA ONLINE"},
    ];

  return ( 
    <>
        <div className='maylike-products-wrapper pt-16' id='tips'>
            <h2>Tips Karir</h2>
            <div className='marquee'>
                <div className='maylike-products-container track'>
                    {tips && tips.map((tip, index) => (
                        <TipCard key={index} tip={tip}/>
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}

export default Tips