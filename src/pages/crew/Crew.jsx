import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import './Crew.css'
import data from '../../../data.json'

const Crew = ({navBar, setNavBar}) => {
    const [selected, setSelected] = useState(0)

    const [screenSize, setScreenSize] = useState(window.innerWidth);

    useEffect(() => {
      function handleResize() {
        setScreenSize(window.innerWidth);
      }
  
      window.addEventListener('resize', handleResize);
  
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    const source = data.crew[selected]
  return (
    <div className='crew'>
        <Navbar navBar={navBar} setNavBar={setNavBar}/>

        {screenSize < 450 && (
                    <div className='crew__tab'>
                    <h2><span>02</span> MEET YOUR CREW</h2>
                    </div>
        )}

        <div className='crew__main' onClick={() => setNavBar(false)}>

            <div className='crew__main--left'>
                <div className='crew__main--left__up'>
                {
                    screenSize > 450 && (
                        <h2><span>02</span> MEET YOUR CREW</h2>
                    )
                }

                <div className='crew__main--left__down'>
                    <h2>{source.role}</h2>
                    <h2>{source.name}</h2>
                    <p>{source.bio}</p>
                </div>

                <div class="slider">
                <button
                    className={selected === 0 ? "slide-button active" : "slide-button"}
                    onClick={() => setSelected(0)}
                ></button>
                <button
                    className={selected === 1 ? "slide-button active" : "slide-button"}
                    onClick={() => setSelected(1)}
                ></button>
                <button
                    className={selected === 2 ? "slide-button active" : "slide-button"}
                    onClick={() => setSelected(2)}
                ></button>
                <button
                    className={selected === 3 ? "slide-button active" : "slide-button"}
                    onClick={() => setSelected(3)}
                ></button>
                </div>

                </div>
            </div>

            <div className='crew__main--right'>
                <div className='crew__right'>
                    <img src={source.images.webp} alt={source.name} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Crew