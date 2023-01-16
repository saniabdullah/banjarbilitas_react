import React,{useState, useEffect} from 'react'
import './Home.scss'
import '../../components/lowongan/Lowongan.scss'
import { Banner, Lowongan, CardLowongan, Profil, Tips } from '../../components'

const Home = () => {
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
      <Banner />
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
      <Profil />
      <Tips />
    </>
  )
}

export default Home