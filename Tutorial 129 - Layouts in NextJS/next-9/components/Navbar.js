import React from 'react'
import './Navbar.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='navbar-all'>
      <div className='navbar-title'>Facebook</div>
      <div className='navbar-links'>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  )
}

export default Navbar
