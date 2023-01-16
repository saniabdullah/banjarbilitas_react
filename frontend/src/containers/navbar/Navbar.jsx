import React, { useState, useEffect } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import './Navbar.scss';
import { images } from '../../constants';
import { useJwt } from "react-jwt";


const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [userLogin, setUserLogin] = useState(null)
  const [token, setToken] = useState('')
  


  const handleLogout = () => {
    localStorage.setItem('user', null)
  }
  
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    const tokenLokal = user && user.token
    setToken(tokenLokal)
    setUserLogin(user)

  }, [])

  const { decodedToken, isExpired } = useJwt(token);
  const id = decodedToken && decodedToken._id

  console.log(id)



  useEffect(() => {
    if (userLogin) {
      setIsLoading(false)
    }
  }, [])


  // console.log("user", userLogin)

  return (
    <nav className="app__navbar m-0 bg-gray-50">
      <div className="app__navbar-logo">
        <a href="/">
          <img src={images.banjarbilitas} alt="logo" />
        </a>
      </div>
      <ul className="app__navbar-links">
        <li><a href="/cari-gawian">Cari Lowongan</a></li>
        {/* <li>Daftar Perusahaan</li> */}
        <li><a href="#tips">Tips Karir</a></li>
        {
            !userLogin ? (<>
              <li className='rounded-full button__masuk'><a href="/login">Masuk</a></li>
              <li className='rounded-full button__daftar'><a href="/signup">Daftar</a></li>
            </>) : (<>
              {/* <li className='rounded-full button__masuk'><a href="/profil-user">Profil</a></li> */}
              <li className='rounded-full button__masuk'><a href={`/profil-user/${id}`}>Profil</a></li>
            </>)  
        }
        
      </ul>

      <div className="app__navbar-menu bg-white">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              <li><a href="/cari-gawian">Cari Lowongan</a></li>
              <li><a href="#tips">Tips Karir</a></li>
              {
                !userLogin ? (<>
                  <li className='rounded-full button__masuk'><a href="/login">Masuk</a></li>
                  <li className='rounded-full button__daftar'><a href="/signup">Daftar</a></li>
                </>) : (<>
                  <li className='rounded-full button__masuk'><a href="/profil-user">Profil</a></li>
                </>)  
              }
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

export default Navbar