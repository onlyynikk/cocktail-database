import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section className='section error-page'>
      <div className='error-container'>
        <h1>Oops! No results here</h1>
        <Link to='/' className='btn btn-primary'>
          Back Home
        </Link>
      </div>
      
    </section>
  )
}

export default About