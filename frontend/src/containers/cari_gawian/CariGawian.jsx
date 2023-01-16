import React,{useState, useEffect} from 'react'
import './CariGawian.scss'
import {CardLowongan, FormCariGawian, FormCariGawianNew} from '../../components'

const CariGawian = () => {
  const [lowongans, setLowongans] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchLowongans = async () => {
      const response = await fetch('http://localhost:5000/api/lowongans')
      const json = await response.json()
      if (response.ok) {
        setLowongans(json)
        setIsLoading(false)
      }
    }
    fetchLowongans()
    
  }, [])
  console.log(lowongans)
  return (
    <>
      {/* <FormCariGawian />
      <hr />
      <FormCariGawianNew /> */}

      <div>
        <div className="flex flex-col items-center pt-6 sm:justify-center sm:pt-0">
          <div className="create pb-8 my-32 w-full px-6 py-4 bg-gray-50 shadow-md sm:rounded-lg">
              <h2>Pencarian Lanjutan</h2>
              <form>
                  <div className='form__gawian'>
                      <div className='gawian__kategori'>
                          <label
                              className="block text-sm font-medium text-gray-700 undefined"
                          >KATEGORI</label>
                          <div className="flex flex-col items-start">
                              <select className="block w-full mt-1 border-slate-500 px-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                                  <option value="#">Semua Kategori</option>
                              </select>
                          </div>
                          <label
                              className="block text-sm font-medium text-gray-700 undefined"
                          >SPESIFIKASI</label>
                          <div className="flex flex-col items-start">
                              <select className="block w-full mt-1 border-slate-500 px-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                                  <option value="#">Semua Spesifikasi Pekerjaan</option>
                              </select>
                          </div>
                      </div>
                      <div className='gawian__kategori'>
                          <label
                              className="block text-sm font-medium text-gray-700 undefined"
                          >LOKASI</label>
                          <div className="flex flex-col items-start">
                              <select className="block w-full mt-1 border-slate-500 px-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                                  <option value="#">Lokasi</option>
                              </select>
                          </div>
                          <label
                              className="block text-sm font-medium text-gray-700 undefined"
                          >PERUSAHAAN</label>
                          <div className="flex flex-col items-start">
                              <input type="text" className="block w-full mt-1 border-slate-500 px-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/>
                          </div>
                      </div>
                  </div>
                  <button>Cari</button>
              </form>
          </div>
        </div>
      </div>
      <hr />
      <div className='app__work-portfolio pt-16'>
        <h2 style={{textAlign: 'center', color: '#cc4a1f', fontSize: '28px'}} >Lowongan Terbaru</h2> 
          {lowongans && lowongans.map((lowongan, index) => (
            <CardLowongan 
                key={lowongan._id}
                lowongan={lowongan}
            />
          ))}
      </div>
      {isLoading && <div className='loading'>Loading ... 🕵️‍♀️</div>}
    </>
  )
}

export default CariGawian