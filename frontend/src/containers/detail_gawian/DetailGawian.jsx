import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import './DetailGawian.scss'
import { images } from '../../constants';

const DetailGawian = () => {
    const { id } = useParams();
    console.log(id)
    const [lowongan, setLowongan] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [foto, setFoto] = useState(null)

    useEffect(() => {
        const fetchLowongan = async () => {
          const response = await fetch('http://localhost:5000/api/lowongans/' + id)
          const json = await response.json()
          if (response.ok) {
            setLowongan(json)
            setIsLoading(false)
            
          }
        }
        fetchLowongan()
      }, [])
    

    console.log(lowongan)

  return (
    <>
    {isLoading && <div className='loading min-h-screen'>Loading ... 🕵️‍♀️</div>}
    {lowongan &&
    <div>
        <article className='detail'>
            <div className="detail-banner">
                    <div className='detail-text-center'> 
                        <img src={`data:image/png;base64,${btoa(
                            String.fromCharCode(...new Uint32Array(lowongan.fotoPerusahaan.data.data))
                        )}`} alt="barbarian" className='img-center'/>
                        {/* <div className="img__perusahaan rounded-lg justify-items-center max-w-fit">
                        </div> */}
                        <h1>{lowongan.namaPekerjaan.toUpperCase()}</h1>
                        <h3>{lowongan.kategoriPekerjaan}</h3>
                        <h2>{lowongan.namaPerusahaan}</h2>
                    </div>
            </div>

            <div className='flex sm:flex-row flex-col justify-evenly pt-10 detail-content'>
                <div className="basis-1/2 detail-content-left min-h-max">
                    <div>
                        <h1 className="text-2xl pt-4 pl-4 detail-title underline">DETAIL LOWONGAN</h1>
                        <div>{lowongan.detailLowongan.split('|').map((detail, index)=> (
                            <>
                                <ul className='pl-8 py-1'>
                                    <li>- {detail}</li>
                                </ul>
                            </>
                        ))}
                        </div>
                    </div>

                    <div>
                        <h1 className="text-2xl pt-4 pl-4 detail-title underline">KRETERIA UMUM</h1>
                        <div>{lowongan.kreteriaUmum.split('|').map((detail, index)=> (
                            <>
                                <ul className='pl-8 py-1'>
                                    <li>- {detail}</li>
                                </ul>
                            </>
                        ))}
                        </div>
                    </div>

                    <div>
                        <h1 className="text-2xl pt-4 pl-4 detail-title underline">KRETERIA KHUSUS</h1>
                        <div>{lowongan.kreteriaKhusus.split('|').map((detail, index)=> (
                            <>
                                <ul className='pl-8 py-1'>
                                    <li>- {detail}</li>
                                </ul>
                            </>
                        ))}
                        </div>
                    </div>

                    <div>
                        <h1 className="text-2xl pt-4 pl-4 detail-title underline">CATATAN LAIN</h1>
                        <div>{lowongan.catatanLain.split('|').map((detail, index)=> (
                            <>
                                <ul className='pl-8 py-1'>
                                    <li>- {detail}</li>
                                </ul>
                            </>
                        ))}
                        </div>
                    </div>

                    <div className='py-8 m-auto px-4 text-center'>
                        <button type="button">Kirim Lamaran</button>
                    </div>
                </div>          
                <div className="basis-1/4">
                    <div className='detail-banner-right'>
                        <h1 className='text-2xl pt-4 pl-4 detail-title underline uppercase'>Tentang Perusahaan</h1>
                        <p className='pl-4 py-4'>{lowongan.tentangPerusahaan}</p>

                        <div className='py-8 m-auto px-4 text-center'>
                            <button type="button">Detail Perusahaan</button>
                        </div>
                    </div>
                </div>
            </div>
        </article>

        <div>

        </div>
    </div>
    }
    </>
  )
}

export default DetailGawian