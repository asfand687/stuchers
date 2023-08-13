import React from 'react'

const Drawer = ({ showNav }) => {
  return (
    <div className={`w-96 absolute top-20 right-0 transition-all ease-in-out duration-300 ${showNav ? "opacity-100" : "opacity-0"}`}>
      <ul className="font-semibold">
        <li className={`bg-[#F99B7D] rounded absolute top-0 right-4 w-48 p-[10px] transition-all ease-in-out duration-400`}>home</li>
        <li className={`absolute ${showNav ? "top-8" : "top-0"} right-4 w-48 p-[10px] transition-all ease-in-out duration-400`}>our therapists</li>
        <li className={`absolute ${showNav ? "top-16" : "top-0"} right-4 w-48 p-[10px] transition-all ease-in-out duration-400`}>e-books</li>
        <li className={`absolute ${showNav ? "top-24" : "top-0"} right-4 w-48 p-[10px] transition-all ease-in-out duration-400`}>gift cards</li>
        <li className={`absolute ${showNav ? "top-32" : "top-0"} right-4 w-48 p-[10px] transition-all ease-in-out duration-400`}>match me with a therapist</li>
      </ul>
    </div>
  )
}

export default Drawer