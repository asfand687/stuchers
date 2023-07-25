"use client"
import React, { useState } from 'react'
import GetStarted from './GetStarted'
import Form from './Form'

const FormSection = () => {
  const [showForm, setShowForm] = useState(false)
  return (
    <div className="my-10 rounded overflow-y-hidden h-[576px] w-full p-4 max-w-[1140px] mx-auto bg-[#8BACAA] text-center py-20">
      <Form
        formComponentShown = {showForm}
      /> :
      <GetStarted
        formComponentShown = {showForm}
        showFormComponent = {() => setShowForm(true)}
      />
    </div>
  )
}

export default FormSection