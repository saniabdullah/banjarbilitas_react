import React from 'react'
import { BiSearchAlt2 } from 'react-icons/bi';
import './Banner.scss'

const Banner = () => {
  return (
    <div className="banner-container bg-gray-50">
      <div className='banner-text-center'>
        <h1>Cari Gawian Sesuai Keunikan Pian</h1>
        <h3>Apapun tentang pian, selalu ada peluang di sini.</h3>
        <div className='button-search'>
          <a href='/cari-gawian'>
            <button type="button"><BiSearchAlt2 /> Cari Gawian</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Banner