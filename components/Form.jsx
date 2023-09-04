"use client"
import { GlobalContext } from '@/context/GlobalState'
import React, { useState, useContext } from 'react'
GlobalContext
import { FaArrowRight, FaCheck } from "react-icons/fa"
import FormInput from './FormInput'

const Form = () => {
  const { 
    formStep, 
    appState, 
    addStep,
    addValueToForm, 
    translateClass, 
    changeTranslateClass, 
  } = useContext(GlobalContext)

  const number = 576 * 2
  return (
    <section className="w-full">
      <form className={`w-full transition-transform ease-in-out duration-700`}>
        {/* <div className="w-full h-[576px] max-w-[720px] mx-auto flex items-center">
          <div className="flex flex-col h-[70%]">
            <label className="flex items-center gap-x-2 w-fit text-2xl pb-6">
                <div className="flex items-center text-xl text-[#3b6966]">
                  <span>1</span>
                  <FaArrowRight className="text-base"/>
                </div>
                <span>What is your first name?*</span>
              </label>
              <input
                value={appState.formData.firstName}
                onChange={(e) => addValueToForm({firstName: e.target.value})}
                className="w-full text-4xl bg-transparent outline-none border-b-2 pb-4 text-[#3b6966] placeholder:text-[#90dad5]"
                placeholder="Type your answer here..."
                type="text"
              /> 
              <button 
                onClick={() => {
                  addStep()
                  changeTranslateClass(`-translate-y-[${formStep * 576}px]`)
                }}
                type="button" 
                className="flex items-center gap-x-1 mt-4 w-fit text-xl font-medium rounded-full bg-[#B04759] text-white px-3 py-1"
              >
                <span>
                  OK
                </span>
                <FaCheck/>
              </button>
          </div>
        </div> */}
        <FormInput
          number="1"
          labelText="What is your first name?*"
          valueName="firstName"
          inputType="text"
        />
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
                value={ appState.formData.lastName }
                onChange={(e) => addValueToForm({ lastName: e.target.value })}
                className="w-full text-4xl bg-transparent outline-none border-b-2 pb-4 text-[#3b6966] placeholder:text-[#90dad5]"
                placeholder="Type your answer here..."
                type="text"
              /> 
              <button 
                onClick={() => {
                  addStep()
                  changeTranslateClass(`-translate-y-[${formStep * 576}px]`)
                }}
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
                value={ appState.formData.preferredNouns }
                onChange={(e) => addValueToForm({ preferredNouns: e.target.value })}
                className="w-full text-4xl bg-transparent outline-none border-b-2 pb-4 text-[#3b6966] placeholder:text-[#90dad5]"
                placeholder="Type your answer here..."
                type="text"
              /> 
              <button 
                onClick={() => {
                  addStep()
                  changeTranslateClass(`-translate-y-[${formStep * 576}px]`)
                }}
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