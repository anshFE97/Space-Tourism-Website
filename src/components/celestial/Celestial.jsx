import React from 'react'
import './Celestials.css'

const Celestial = ({source}) => {
  return (
    <div className='celestials'>
      <h2 className='celestials__name'>{source.name}</h2>
      <p className='celestials__desc'>{source.description}</p>

      <hr className='celestials__line'/>

      <div className='celestials__down'>
        <div>
          <h6 className='celestials__values'>Avg. Distance</h6>
          <h5 className='celestials__values--numb'>{source.distance}</h5>
        </div>
        <div>
          <h6 className='celestials__values'>Est. Travel Time</h6>
          <h5 className='celestials__values--numb'>{source.travel}</h5>
        </div>
      </div>
    </div>
  )
}

export default Celestial