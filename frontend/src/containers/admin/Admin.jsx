import React,{useState, useEffect} from 'react'
import axios from 'axios';
import './Admin.scss'

const Admin = () => {
    const [fotoPerusahaan, setFotoPerusahaan] = useState('')
    const [namaPerusahaan, setNamaPerusahaan] = useState('')
    const [namaPekerjaan, setNamaPekerjaan] = useState('')
    const [jenisDisabilitas, setJenisDisabilitas] = useState('')
    const [lokasiPerusahaan, setLokasiPerusahaan] = useState('')
    const [deadlineDate, setDeadlineDate] = useState('')
    const [detailLowongan, setDetailLowongan] = useState('')
    const [kreteriaUmum, setKreteriaUmum] = useState('')
    const [kreteriaKhusus, setKreteriaKhusus] = useState('')
    const [catatanLain, setCatatanLain] = useState('')
    const [tentangPerusahaan, setTentangPerusahaan] = useState('')
    const [kategoriPekerjaan, setKategoriPekerjaan] = useState('')
    const [spesifikasiPekerjaan, setSpesifikasiPekerjaan] = useState('')

    const [lowongans, setLowongans] = useState(null)
    const [error, setError] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('fotoPerusahaan', fotoPerusahaan)
        formData.append('namaPerusahaan', namaPerusahaan)
        formData.append('namaPekerjaan', namaPekerjaan)
        formData.append('jenisDisabilitas', jenisDisabilitas)
        formData.append('lokasiPerusahaan', lokasiPerusahaan)
        formData.append('deadlineDate', deadlineDate)
        formData.append('detailLowongan', detailLowongan)
        formData.append('kreteriaUmum', kreteriaUmum)
        formData.append('kreteriaKhusus', kreteriaKhusus)
        formData.append('catatanLain', catatanLain)

        formData.append('tentangPerusahaan', tentangPerusahaan)
        formData.append('kategoriPekerjaan', kategoriPekerjaan)
        formData.append('spesifikasiPekerjaan', spesifikasiPekerjaan)
        const config = {
            Headers: {
                'content-type': 'multipart/form-data'
            }
        }

        const url = "http://localhost:5000/api/lowongans";
        axios
            .post(url, formData, config)
            .then((response) => {
                console.log(response)
                setFotoPerusahaan('')
                setNamaPerusahaan('')
                setNamaPekerjaan('')
                setJenisDisabilitas('')
                setLokasiPerusahaan('')
                setDeadlineDate('')
                setDetailLowongan('')
                setKreteriaUmum('')
                setKreteriaKhusus('')
                setCatatanLain('')
                setTentangPerusahaan('')
                setKategoriPekerjaan('')
                setSpesifikasiPekerjaan('')
                setError(null)
            })
            .catch((err) => {
                console.log('err', err)
            });
        
        setTimeout(() => {
            setFotoPerusahaan('')
            setNamaPerusahaan('')
            setNamaPekerjaan('')
            setJenisDisabilitas('')
            setLokasiPerusahaan('')
            setDeadlineDate('')
            setDetailLowongan('')
            setKreteriaUmum('')
            setKreteriaKhusus('')
            setCatatanLain('')
            setTentangPerusahaan('')
            setKategoriPekerjaan('')
            setSpesifikasiPekerjaan('')
            setError(null)
        }, 1000);
    }

    const onImageUpload = (e) => {
        const file = e.target.files[0];
        setFotoPerusahaan(file)
    }

  return (
    <>
    <div className="flex flex-col items-center pt-6 sm:justify-center sm:pt-0">
        <div className="create pb-8 my-32 w-full px-6 py-4 bg-gray-50 shadow-md sm:rounded-lg">
            <h2>Tambah Lowongan</h2>
            <form onSubmit={handleSubmit}>
                <div className='form__gawian__admin'>
                    <div className='gawian__kategori'>
                        <label
                              className="block text-sm font-medium text-gray-700 undefined"
                        >FOTO PERUSAHAAN</label>
                        <div className="flex flex-col items-start">
                            <input 
                                type="file" 
                                required
                                onChange={(e) => onImageUpload(e)}
                                className="block w-full mt-1 border-slate-500 px-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                        <label
                              className="block text-sm font-medium text-gray-700 undefined"
                        >NAMA PERUSAHAAN</label>
                        <div className="flex flex-col items-start">
                            <input 
                                type="text" 
                                required
                                className="block w-full mt-1 border-slate-500 px-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                value={namaPerusahaan}
                                onChange={(e) => setNamaPerusahaan(e.target.value)}
                            />
                        </div>
                        <label
                              className="block text-sm font-medium text-gray-700 undefined"
                        >NAMA PEKERJAAN</label>
                        <div className="flex flex-col items-start">
                            <input 
                                type="text" 
                                required
                                className="block w-full mt-1 border-slate-500 px-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                value={namaPekerjaan}
                                onChange={(e) => setNamaPekerjaan(e.target.value)}
                            />
                        </div>
                        <label
                              className="block text-sm font-medium text-gray-700 undefined"
                        >JENIS DISABILITAS</label>
                        <div className="flex flex-col items-start">
                            <input 
                                type="text" 
                                required
                                className="block w-full mt-1 border-slate-500 px-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                value={jenisDisabilitas}
                                onChange={(e) => setJenisDisabilitas(e.target.value)}
                            />
                        </div>
                        <label
                              className="block text-sm font-medium text-gray-700 undefined"
                        >LOKASI PERUSAHAAN</label>
                        <div className="flex flex-col items-start">
                            <select
                            className="block w-full mt-1 border-slate-500 px-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            value={lokasiPerusahaan}
                            onChange={(e) => setLokasiPerusahaan(e.target.value)}
                            >
                                <option value="#">Pilih Lokasi Perusahaan</option>
                                <option value="Tanah Laut">Tanah Laut</option>
                                <option value="Kotabaru">Kotabaru</option>
                                <option value="Banjar">Banjar</option>
                                <option value="Barito Kuala">Barito Kuala</option>
                                <option value="Tapin">Tapin</option>
                                <option value="Hulu Sungai Selatan">Hulu Sungai Selatan</option>
                                <option value="Hulu Sungai Tengah">Hulu Sungai Tengah</option>
                                <option value="Hulu Sungai Utara">Hulu Sungai Utara</option>
                                <option value="Tanah Laut">Tanah Laut</option>
                                <option value="Tabalong">Tabalong</option>
                                <option value="Tanah Bumbu">Tanah Bumbu</option>
                                <option value="Balangan">Balangan</option>
                                <option value="Banjarmasin">Banjarmasin</option>
                                <option value="Banjarbaru">Banjarbaru</option>
                            </select>
                        </div>
                        <label
                              className="block text-sm font-medium text-gray-700 undefined"
                        >DEADLINE DATE</label>
                        <div className="flex flex-col items-start">
                            <input 
                                type="text" 
                                required
                                className="block w-full mt-1 border-slate-500 px-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                value={deadlineDate}
                                onChange={(e) => setDeadlineDate(e.target.value)}
                            />
                        </div>
                        <label
                              className="block text-sm font-medium text-gray-700 undefined"
                        >DETAIL LOWONGAN</label>
                        <div className="flex flex-col items-start">
                            <input 
                                type="text" 
                                required
                                className="block w-full mt-1 border-slate-500 px-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                value={detailLowongan}
                                onChange={(e) => setDetailLowongan(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='gawian__kategori'>
                        <label
                              className="block text-sm font-medium text-gray-700 undefined"
                        >KRETERIA UMUM</label>
                        <div className="flex flex-col items-start">
                            <input 
                                type="text" 
                                required
                                className="block w-full mt-1 border-slate-500 px-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                value={kreteriaUmum}
                                onChange={(e) => setKreteriaUmum(e.target.value)}
                            />
                        </div>
                        <label
                              className="block text-sm font-medium text-gray-700 undefined"
                        >KRETERIA KHUSUS</label>
                        <div className="flex flex-col items-start">
                            <input 
                                type="text" 
                                required
                                className="block w-full mt-1 border-slate-500 px-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                value={kreteriaKhusus}
                                onChange={(e) => setKreteriaKhusus(e.target.value)}
                            />
                        </div>
                        <label
                              className="block text-sm font-medium text-gray-700 undefined"
                        >CATATAN LAIN</label>
                        <div className="flex flex-col items-start">
                            <input 
                                type="text" 
                                required
                                className="block w-full mt-1 border-slate-500 px-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                value={catatanLain}
                                onChange={(e) => setCatatanLain(e.target.value)}
                            />
                        </div>
                        <label
                              className="block text-sm font-medium text-gray-700 undefined"
                        >TENTANG PERUSAHAAN</label>
                        <div className="flex flex-col items-start">
                            <input 
                                type="text" 
                                required
                                className="block w-full mt-1 border-slate-500 px-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                value={tentangPerusahaan}
                                onChange={(e) => setTentangPerusahaan(e.target.value)}
                            />
                        </div>
                        <label
                              className="block text-sm font-medium text-gray-700 undefined"
                        >KATEGORI PEKERJAAN</label>
                        <div className="flex flex-col items-start">
                            <select
                            value={kategoriPekerjaan}
                            className="block w-full mt-1 border-slate-500 px-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            onChange={(e) => setKategoriPekerjaan(e.target.value)}
                            >
                                <option value="#">Pilih Kategori Pekerjaan</option>
                                <option value="Administrasi">Administrasi</option>
                                <option value="Desain dan Aksitektur">Desain dan Aksitektur</option>
                                <option value="Editing, Media dan Informasi">Editing, Media dan Informasi</option>
                                <option value="Elektronik">Elektronik</option>
                                <option value="Hotel dan Katering">Hotel dan Katering</option>
                                <option value="House Keeping">House Keeping</option>
                                <option value="IT dan Telekomunikasi">IT dan Telekomunikasi</option>
                                <option value="Keamanan dan Perlindungan Sipil">Keamanan dan Perlindungan Sipil</option>
                                <option value="Kesehatan dan Kecantikan">Kesehatan dan Kecantikan</option>
                                <option value="Keuangan dan Akutansi">Keuangan dan Akutansi</option>
                                <option value="Layanan Sipil">Layanan Sipil</option>
                                <option value="Legal">Legal</option>
                                <option value="Manajemen, Manajemen Eksekutif dan Strategis">Manajemen, Manajemen Eksekutif dan Strategis</option>
                                <option value="Palatihan / Instruksi">Palatihan / Instruksi</option>
                                <option value="Pelayanan Pelanggan">Pelayanan Pelanggan</option>
                                <option value="Pemasaran dan Perikanan">Pemasaran dan Perikanan</option>
                                <option value="Pemeliharaan">Pemeliharaan</option>
                                <option value="Penelitian, Pengembangan dan Ilmu Pengetahuan">Penelitian, Pengembangan dan Ilmu Pengetahuan</option>
                                <option value="Penjualan dan Perdagangan">Penjualan dan Perdagangan</option>
                                <option value="Perbankan, Asuransi dan Keuangan">Perbankan, Asuransi dan Keuangan</option>
                                <option value="Pertanian, Kehutanan, Laut dan Lingkungan">Pertanian, Kehutanan, Laut dan Lingkungan</option>
                                <option value="Produksi, Konstruksi dan Perdagangan">Produksi, Konstruksi dan Perdagangan</option>
                                <option value="Quality Control">Quality Control</option>
                                <option value="Seni, Budaya dan Hiburan">Seni, Budaya dan Hiburan</option>
                                <option value="Sosial">Sosial</option>
                                <option value="Sumber Daya Manusia">Pemeliharaan</option>
                                <option value="Teknik">Teknik</option>
                                <option value="Transportasi dan Logistik">Transportasi dan Logistik</option>
                            </select>
                        </div>
                        <label
                              className="block text-sm font-medium text-gray-700 undefined"
                        >SPESIFIKASI PEKERJAAN</label>
                        <div className="flex flex-col items-start">
                            <input 
                                type="text" 
                                required
                                className="block w-full mt-1 border-slate-500 px-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                value={spesifikasiPekerjaan}
                                onChange={(e) => setSpesifikasiPekerjaan(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <button>TAMBAHKAN</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default Admin