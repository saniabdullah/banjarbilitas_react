import React, {useState, useEffect} from 'react'
import { useParams, useHistory } from "react-router-dom";

import './ProfilUser.scss'

const ProfilUser = () => {
    const { id } = useParams();
    const [userLogin, setUserLogin] = useState(null)
    const [profile, setProfile] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const history = useHistory();

    // Update
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [alamat, setAlamat] = useState('')
    const [usia, setUsia] = useState('')
    const [gender, setGender] = useState('')

    const [formData, setFormData] = useState({
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      address: '',
      age: '',
      gender: ''
    });



    useEffect(() => {
      const user = JSON.parse(localStorage.getItem('user'))
      setUserLogin(user)
    }, [])


    useEffect(() => {
      const fetchUser = async () => {
        const response = await fetch('http://localhost:5000/api/user/' + id)
        const json = await response.json()
        if (response.ok) {
          setProfile(json)
          setIsLoading(false)
        }
      }
      fetchUser()
      
    }, [])


    // const handleSubmit = (event) => {
    //   event.preventDefault();
    //   console.log(formData)
  
    //   fetch('http://localhost:5000/api/user/' + id, {
    //     method: 'POST',
    //     // headers: {'Content-Type': 'application/json'},
    //     body: JSON.stringify({formData})
    //   })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     history.push("/");
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
    // }

    // const handleChange = (event) => {
    //   const { name, value } = event.target;
    //   setFormData({ ...formData, [name]: value });
    // }

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log({firstname, lastname, email, phone, alamat, usia, gender})
      
      const response = await fetch('http://localhost:5000/api/user/' + id, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({firstname, lastname, email, phone, alamat, usia, gender})
      })
      const json = await response.json()
      console.log(json)
  
      if (!response.ok) {
        setIsLoading(false)
        setError(json.error)
      }
      if (response.ok) {
        history.push("/");
      }
    }

    const handleLogout = () => {
        localStorage.setItem('user', null)
    }



  return (
    <>
        {userLogin ?
        <div>
        <div className="flex flex-col items-center pt-6 sm:justify-center sm:pt-0">
          <div className="create pb-8 my-32 w-full px-6 py-4 bg-gray-50 shadow-md sm:rounded-lg">
              <h2>Profil</h2>
              <form onSubmit={handleSubmit}>
                  <div className='form__gawian'>
                      <div className='gawian__kategori'>
                          <label
                              className="block text-sm font-medium text-gray-700 undefined"
                          >Nama Depan</label>
                          <div className="flex flex-col items-start">
                            <input 
                              type="text" 
                              className="block w-full mt-1 border-slate-500 px-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                              value={profile && profile.firstname}
                              // name="firstname"
                              // onChange={handleChange}
                              onChange={(e) => setFirstname(e.target.value)}
                              placeholder='Nama Depan'
                              required
                            />
                          </div>
                          <label
                              className="block text-sm font-medium text-gray-700 undefined"
                          >Nama Belakang</label>
                          <div className="flex flex-col items-start">
                            <input 
                              type="text" 
                              value={profile && profile.lastname}
                              // name='lastname'
                              // onChange={handleChange}
                              onChange={(e) => setLastname(e.target.value)}
                              required
                              placeholder='Nama Belakang'
                              className="block w-full mt-1 border-slate-500 px-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/>
                          </div>
                          <label
                              className="block text-sm font-medium text-gray-700 undefined"
                          >Alamat</label>
                          <div className="flex flex-col items-start">
                            <input 
                              type="text" 
                              required
                              value={profile && profile.alamat}
                              // name='alamat'
                              // onChange={handleChange}
                              onChange={(e) => setAlamat(e.target.value)}
                              placeholder='Alamat'
                              className="block w-full mt-1 border-slate-500 px-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/>
                          </div>
                          <label
                              className="block text-sm font-medium text-gray-700 undefined"
                          >Usia</label>
                          <div className="flex flex-col items-start">
                            <input 
                              type="text" 
                              required
                              value={profile && profile.usia}
                              // name='usia'
                              // onChange={handleChange}
                              onChange={(e) => setUsia(e.target.value)}
                              placeholder='Usia'
                              className="block w-full mt-1 border-slate-500 px-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/>
                          </div>
                      </div>
                      <div className='gawian__kategori'>
                          <label
                              className="block text-sm font-medium text-gray-700 undefined"
                          >Email</label>
                          <div className="flex flex-col items-start">
                            <input 
                              type="text" 
                              required
                              className="block w-full mt-1 border-slate-500 px-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                              disabled
                              value={profile && profile.email}
                              // name='email'
                              // onChange={handleChange}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                          <label
                              className="block text-sm font-medium text-gray-700 undefined"
                          >Nomor HP</label>
                          <div className="flex flex-col items-start">
                              <input 
                                type="text" 
                                required
                                value={profile && profile.phone}
                                // name='phone'
                                // onChange={handleChange}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder='Nomor Hp'
                                className="block w-full mt-1 border-slate-500 px-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/>
                          </div>
                          <label
                              className="block text-sm font-medium text-gray-700 undefined"
                          >Jenis Kelamin</label>
                          <div className="flex flex-col items-start">
                              <input 
                                type="text" 
                                required
                                value={profile && profile.gender}
                                // name='gender'
                                // onChange={handleChange}
                                onChange={(e) => setGender(e.target.value)}
                                placeholder='Jenis Kelamin'
                                className="block w-full mt-1 border-slate-500 px-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/>
                          </div>
                          {/* <div className="flex flex-col items-start">
                              <input 
                                type="text" 
                                required
                                value={profile && profile.password}
                                placeholder='Jenis Kelamin'
                                className="block w-full mt-1 border-slate-500 px-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                          </div> */}
                      </div>
                  </div>
                  <button className='mr-5' style={{color: 'black'}}>Simpan</button>
                  <button onClick={handleLogout}>Logout</button>
              </form>
          </div>
        </div>
        </div>
        : <div style={{minHeight: '40vh'}} className="my-32 text-center">Login duluuuu</div>
        }
    </>
  )
}

export default ProfilUser