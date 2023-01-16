import React, {useState} from 'react'
import './FormCariGawianNew.scss'

const FormCariGawianNew = () => {
    const [kategori, setKategori] = useState('')
    const [spesifikasi, setSpesifikasi] = useState('')
    const [lokasi, setLokasi] = useState('')
    const [namaPerusahaan, setNamaPerusahaan] = useState('')

  return (
    <>
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
    </>
  )
}

export default FormCariGawianNew