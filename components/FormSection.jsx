"use client"
import React, { useContext, useState } from 'react'
import GetStarted from './GetStarted'
import Form from './Form'
import { FaChevronUp, FaChevronDown } from 'react-icons/fa'
import { GlobalContext } from '@/context/GlobalState'

const FormSection = () => {
  const [showForm, setShowForm] = useState(false)
  const { formStep, addStep, subStep, changeTranslateClass } = useContext(GlobalContext)
  return (
    <div className="relative my-10 rounded overflow-y-hidden h-[576px] w-full p-4 max-w-[1140px] mx-auto bg-[#8BACAA] text-center py-20">
      {
        showForm ? 
        <Form /> :
        <GetStarted
          formComponentShown = {showForm}
          showFormComponent = {() => setShowForm(true)}
        />
      }
      <div className={`w-fit text-xl px-4 py-2 rounded-full gap-x-2 bg-[#F99B7D] text-white flex absolute bottom-4 right-4 transition-opacity ease-in-out duration-300 ${showForm  ? "opacity-100" : "opacity-0"}`}>
      <button
        type="button" 
        onClick={() => {
          addStep()
          changeTranslateClass(`-translate-y-[${formStep * 576}px]`)
        }}
      >
        <FaChevronUp/>
      </button>
      <button
        className="disabled:opacity-50"
        type="button" 
        disabled={formStep === 1}
        onClick={() => {
          subStep()
          changeTranslateClass(`translate-y-[${formStep * 576}px]`)
        }}
        >
          <FaChevronDown/>
        </button> 
      </div>
    </div>
  )
}

export default FormSection