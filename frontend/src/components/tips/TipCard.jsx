import React from 'react'
import { BsFillShareFill } from 'react-icons/bs';
import './Tips.scss'


const TipCard = ({tip}) => {
  return (
    <div className='app__profile-item product-card'>
        <div className="slide-container">
            <div className="wrapper">
                <div className="clash-card__tip barbarian">
                    <div className="clash-card__image clash-card__image--barbarian">
                        <img src={tip.imgurl} alt="barbarian"/>
                    </div>
                    <div className="clash-card__unit-description" style={{color: "black", fontSize: '20px', marginBottom: '15px'}}>
                        {tip.title}
                    </div>
                    <div className="clash-card__unit-stats clash-card__unit-stats--barbarian">
                    <div><a href={`/tip-detail/${tip.id}`}>Baca Selengkapnya</a></div>
                    </div>
                </div>
            </div> 
        </div>    
    </div>
  )
}

export default TipCard