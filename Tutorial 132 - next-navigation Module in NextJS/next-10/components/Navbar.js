"use client"
import React from 'react'
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const pathname = usePathname()
    return (
        <div>
            I am Navbar, I am at {pathname}
        </div>
    )
}

export default Navbar
