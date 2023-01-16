import React from 'react'
import { MdApartment } from 'react-icons/md';
import { GiHumanTarget } from 'react-icons/gi';
import { IoLocationSharp } from 'react-icons/io5';

const CardLowongan = ({lowongan : {_id, fotoPerusahaan, namaPerusahaan, namaPekerjaan, kategoriPekerjaan, jenisDisabilitas, lokasiPerusahaan, deadlineDate}}) => {
  const photo = btoa(
    String.fromCharCode(...new Uint32Array(fotoPerusahaan.data.data))
  );
  return (
    <>
        <div className='app__profile-item product-card'>
        <a href={`/detail-gawian/${_id}`}>
            <div className="slide-container">
                <div className="wrapper">
                    <div className="clash-card barbarian">
                        <div className="clash-card__image clash-card__image--barbarian overflow-hidden	bg-cover">
                            <img src={`data:image/png;base64,${photo}`} alt="barbarian" />
                        </div>
                      <div className="clash-card__unit-description" style={{color: "black", fontSize: '20px', textAlign: 'left', fontWeight: 'normal'}}>
                          {namaPerusahaan}
                      </div>
                      <div className="clash-card__unit-description" style={{color: "#cc4a1f", fontSize: '23px', textAlign: 'left', fontWeight: 'bold'}}>
                          {namaPekerjaan}
                      </div>
                      <hr />
                      <div className="clash-card__unit-description" style={{color: "black", textAlign: 'left', display: 'flex'}}>
                        <MdApartment /> 
                        {kategoriPekerjaan}
                      </div>
                      <div className="clash-card__unit-description" style={{color: "#cc4a1f", textAlign: 'left', display: 'flex'}}>
                        <GiHumanTarget /> 
                        {jenisDisabilitas}
                      </div>
                      <div className="clash-card__unit-description" style={{color: "black", textAlign: 'left', display: 'flex'}}>
                        <IoLocationSharp /> 
                        {lokasiPerusahaan}
                      </div>

                      <div className="clash-card__unit-stats clash-card__unit-stats--barbarian">
                        <div>{deadlineDate}</div>
                      </div>
                    </div>
                </div> 
            </div>    
        </a>
        </div>
    </>
  )
}

export default CardLowongan