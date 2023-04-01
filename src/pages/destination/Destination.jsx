import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import './Destination.css'
import data from '../../../data.json'
import Celestial from '../../components/celestial/Celestial'

const Destination = ({navBar, setNavBar}) => {
    const [selected, setselected] = useState(0)
    const source = data.destinations[selected]

  return (
    <div className='destination'>
        <Navbar navBar={navBar} setNavBar={setNavBar}/>
        <div className='destination__main' onClick={() => setNavBar(false)}>

            <div className='destination__main--left'>
                <h2><span>01</span> PICK YOUR DESTINATION</h2>
                <div className='destinaion__main--left__img'>
                    <img src={source.images.webp} alt={source.name} />
                </div>
            </div>

            <div className='destination__main--right'>
                <div className='destination__right'>
                <div className='destination__right--nav'>
                {data.destinations.map((nav, index) => (
                    <a href="#" onClick={() => setselected(index)} className={selected === index ? "active" : ""} key={index}>{nav.name}</a>
                ))}
                </div>
                <Celestial source={source} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Destination