"use client"
import Image from 'next/image'
import React from 'react'
import HeaderStrip from './HeaderStrip'

const Header = () => {
  return (
    <>
    <header className='flex justify-between px-4 pt-2 max-w-7xl m-auto'>
        <div className="logo">
            <Image width={150} height={150} src={"/logo.avif"} />
        </div>
        <div className="search">Search</div>
        <div className="auth">Signin</div>
    </header>
    <div className='mt-4 mb-2 border-b'>

    <HeaderStrip />
    </div>
    </>
  )
}

export default Header