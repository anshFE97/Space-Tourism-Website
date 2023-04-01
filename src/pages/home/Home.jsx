import React from 'react'
import './Home.css'
import Navbar from '../../components/navbar/Navbar'
import { Link } from 'react-router-dom'

const Home = ({navBar, setNavBar}) => {
    return (
        <div className='home'>
        <Navbar navBar={navBar} setNavBar={setNavBar} />
        <div className='home__main' onClick={() => setNavBar(false)}>
            <div className='home__main--left'>
            <h5>So, you want to travel to </h5>
            <h1>Space</h1> 
            <p>
            Let’s face it; if you want to go to space, you might as well 
            <br/>
            genuinely go to outer space and not hover kind of on the
            <br/>
            edge of it. Well sit back, and relax because we’ll give you a
            <br/>
            truly out of this world experience!</p> 
            </div>
            
            <Link to="/destination" className='home__main--right'>
                <div className='circle'><h3>Explore</h3></div>
            </Link>
        </div>
        </div>
    )
}

export default Home