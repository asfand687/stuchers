"use client"
import React, { useState } from 'react'
import { FaArrowRight, FaCheck } from "react-icons/fa"

const Form = () => {
  const [translateClass, setTranslateClass] = useState("-translate-y-0")
  return (
    <section className="w-full">
      <form className={`w-full transition-transform ease-in-out duration-700 ${translateClass}`}>
        <div className="w-full h-[576px] max-w-[720px] mx-auto flex items-center">
          <div className="flex flex-col h-[70%]">
            <label className="flex items-center gap-x-2 w-fit text-2xl pb-6">
                <div className="flex items-center text-xl text-[#3b6966]">
                  <span>1</span>
                  <FaArrowRight className="text-base"/>
                </div>
                <span>What is your first name?*</span>
              </label>
              <input
                className="w-full text-4xl bg-transparent outline-none border-b-2 pb-4 text-[#3b6966] placeholder:text-[#90dad5]"
                placeholder="Type your answer here..."
                type="text"
              /> 
              <button 
                onClick={() => setTranslateClass("-translate-y-[576px]")}
                type="button" 
                className="flex items-center gap-x-1 mt-4 w-fit text-xl font-medium rounded-full bg-[#B04759] text-white px-3 py-1"
              >
                <span>
                  OK
                </span>
                <FaCheck/>
              </button>
          </div>
        </div>
        <div className="w-full h-[576px] max-w-[720px] mx-auto flex items-center">
          <div className="flex flex-col h-[70%]">
            <label className="flex items-center gap-x-2 w-fit text-2xl pb-6">
                <div className="flex items-center text-xl text-[#3b6966]">
                  <span>2</span>
                  <FaArrowRight className="text-base"/>
                </div>
                <span>What is your last name?*</span>
              </label>
              <input
                className="w-full text-4xl bg-transparent outline-none border-b-2 pb-4 text-[#3b6966] placeholder:text-[#90dad5]"
                placeholder="Type your answer here..."
                type="text"
              /> 
              <button 
                onClick={() => setTranslateClass("-translate-y-[576px]")}
                type="button" 
                className="flex items-center gap-x-1 mt-4 w-fit text-xl font-medium rounded-full bg-[#B04759] text-white px-3 py-1"
              >
                <span>
                  OK
                </span>
                <FaCheck/>
              </button>
          </div>
        </div>
        <div className="w-full h-[576px] max-w-[720px] mx-auto flex items-center">
          <div className="flex flex-col h-[70%]">
            <label className="flex items-center gap-x-2 w-fit text-2xl pb-6">
                <div className="flex items-center text-xl text-[#3b6966]">
                  <span>2</span>
                  <FaArrowRight className="text-base"/>
                </div>
                <span>What are your preferred nouns?*</span>
              </label>
              <input
                className="w-full text-4xl bg-transparent outline-none border-b-2 pb-4 text-[#3b6966] placeholder:text-[#90dad5]"
                placeholder="Type your answer here..."
                type="text"
              /> 
              <button 
                onClick={() => setTranslateClass("-translate-y-[576px]")}
                type="button" 
                className="mt-4 w-fit text-xl font-light rounded-full bg-[#B04759] text-white px-3 py-1"
              >
                OK
              </button>
          </div>
        </div>
      </form>
    </section>
  )
}

export default Form