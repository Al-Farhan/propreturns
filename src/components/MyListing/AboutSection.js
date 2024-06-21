import React from 'react'

const AboutSection = ({ about }) => {
  return (
    <div className='py-8 border-b'>
        <h1 className='font-bold text-3xl'>About this office space</h1>
        <p className='text-[#4C565B] py-4'>{about}</p>
    </div>
  )
}

export default AboutSection