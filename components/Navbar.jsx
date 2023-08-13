"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import { FaBars, FaTimes} from "react-icons/fa"
import Drawer from '@/components/Drawer'

const Navbar = () => {
  const [showNav, setShowNav] = useState(false)
  return (
    <nav className={`relative bg-[#B04759] transition-all ease-out duration-300 text-white p-4 ${showNav ? "pb-40" : "pb-4"}`}>
      <div className="flex justify-between items-center w-full max-w-[1140px] mx-auto">
        <Image 
          src="/logo-new.png"
          alt="Stuchers"
          width={80}
          height={80}
        />
        <ul className="hidden lg:flex items-center gap-x-8 font-semibold">
          <li>therapists</li>
          <li>ebook</li>
          <li>gift cards</li>
          <li className="rounded-full bg-[#8BACAA] text-white px-3 py-1">match me with a therapist</li>
        </ul>
        <div className="block lg:hidden" onClick={() => setShowNav(prev => !prev)}>
          {
            showNav ? 
            <FaTimes
              className="block lg:hidden text-3xl"
            />:
            <FaBars
              className="block lg:hidden text-3xl"
            />
          }
        </div>
      </div>
      <Drawer showNav={showNav}/>
    </nav>
  )
}

export default Navbar