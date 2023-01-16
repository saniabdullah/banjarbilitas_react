import React from 'react'
import './FormCariGawian.scss'

const FormCariGawian = () => {
  return (
    <>
    <div>
        <div className="create pb-8 my-32 bg-gray-50 shadow-md sm:rounded-lg">
            <h2>Pencarian Lanjutan</h2>
            <form>
                <div className='form__gawian'>
                    <div className='gawian__kategori'>
                        <label>KATEGORI</label>
                        <select>
                            <option value="#">Semua Kategori</option>
                        </select>
                        <label>SPESIFIKASI</label>
                        <select>
                            <option value="#">Semua Spesifikasi Pekerjaan</option>
                        </select>
                    </div>
                    <div className='gawian__kategori'>
                        <label>LOKASI</label>
                        <select>
                            <option value="#">Lokasi</option>
                        </select>
                        <label>PERUSAHAAN</label>
                        <input type="text" />
                    </div>
                </div>
                <button>Cari</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default FormCariGawian