"use client"

import Image from 'next/image'
import React from 'react'
import {FaBars} from "react-icons/fa"

const Navbar = () => {
  return (
    <nav className="bg-[#B04759] text-white p-4">
      <div className="flex justify-between items-center w-full max-w-[1140px] mx-auto">
        <Image 
          src="/logo.png"
          alt="Stuchers"
          width={130}
          height={100}
        />
        <ul className="hidden lg:flex items-center gap-x-8 font-semibold">
          <li>therapists</li>
          <li>ebook</li>
          <li>gift cards</li>
          <li className="rounded-full bg-[#8BACAA] text-white px-3 py-1">match me with a therapist</li>
        </ul>
        <div className="block lg:hidden" onClick={() => console.log("show nav")}>
          <FaBars
            className="block lg:hidden text-3xl"
          />
        </div>
      </div>
    </nav>
  )
}

export default Navbar