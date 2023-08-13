import { GlobalContext } from '@/context/GlobalState'
import React, { useContext } from 'react'
import { FaArrowRight, FaCheck } from 'react-icons/fa'

const FormInput = ({number, labelText, valueName, inputType}) => {
  const { 
    formStep, 
    addStep,
    addValueToForm, 
    changeTranslateClass, 
    appState
  } = useContext(GlobalContext)
  return (
    <div className="w-full h-[576px] max-w-[720px] mx-auto flex items-center">
      <div className="flex flex-col h-[70%]">
        <label className="flex items-center gap-x-2 w-fit text-2xl pb-6">
            <div className="flex items-center text-xl text-[#3b6966]">
              <span>{number}</span>
              <FaArrowRight className="text-base"/>
            </div>
            <span>{labelText}</span>
          </label>
          <input
            value={appState.formData[`${valueName}`]}
            onChange={(e) => addValueToForm({[valueName]: e.target.value})}
            className="w-full text-4xl bg-transparent outline-none border-b-2 pb-4 text-[#3b6966] placeholder:text-[#90dad5]"
            placeholder="Type your answer here..."
            type={inputType}
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
  )
}

export default FormInput