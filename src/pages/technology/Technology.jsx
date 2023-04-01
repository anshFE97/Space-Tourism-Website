import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import './Technology.css'

import data from '../../../data.json'

const Technology = ({navBar, setNavBar}) => {
    const [selected, setSelected] = useState(0)

    const [screenSize, setScreenSize] = useState(window.innerWidth);

    useEffect(() => {
      function handleResize() {
        setScreenSize(window.innerWidth);
      }
  
      window.addEventListener('resize', handleResize);
  
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    const source = data.technology[selected]

  return (
    <div className='technology'>
        <Navbar navBar={navBar} setNavBar={setNavBar}/>

        {screenSize < 800 && (
                    <div className='technology__tab'>
                    <h2><span>03</span> SPACE LAUNCH 101</h2>
                    </div>
        )}

        <div className='technology__main' onClick={() => setNavBar(false)}>

            <div className='technology__main--left'>
                <div className='technology__main--left__up'>
                {screenSize > 800 && (
                    <div>
                    <h2><span>03</span> SPACE LAUNCH 101</h2>
                    </div>
                )}

                <div className='technology__middle'>
                <div className='circle__main'>
                <button className={`circles ${selected === 0 ? 'active' : ''}`} onClick={() => setSelected(0)}>1</button>
                <button className={`circles ${selected === 1 ? 'active' : ''}`} onClick={() => setSelected(1)}>2</button>
                <button className={`circles ${selected === 2 ? 'active' : ''}`} onClick={() => setSelected(2)}>3</button>
                </div>

                    <div className='technology__main--left__down'>
                    <h2>THE TERMINOLOGY</h2>
                    <h2>{source.name}</h2>
                    <p>{source.description}</p>
                    </div>
                </div>

                </div>
            </div>

            <div className='technology__main--right'>
                <div className='technology__right'>
                {screenSize <= 900 ?
                <img src={source.images.landscape} alt={source.name} />
                :
                <img src={source.images.portrait} alt={source.name} />
                }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Technology