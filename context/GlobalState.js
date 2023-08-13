"use client"
import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer';

// Initial state
const initialState = {
  formStep: 1,
  translateClass: "-translate-y-0",
  formData: {
    firstName: "",
    lastName: "",
    preferredNouns: ""
  }
}

export const GlobalContext = createContext(initialState)

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  
  // Actions
  function addStep() {
    dispatch({
      type: 'ADD_STEP',
    });
  }

  function subStep() {
    dispatch({
      type: 'SUB_STEP',
    });
  }

  function addValueToForm(payload) {
    dispatch({
      type: "ADD_FORM_DATA",
      payload: payload
    })
  }

  function changeTranslateClass(translationClass) {
    dispatch({
      type: "CHANGE_TRANSLATE_CLASS",
      payload: translationClass
    })
  }

  return (
  <GlobalContext.Provider value={{
    appState: state,
    formStep: state.formStep,
    addStep,
    subStep,
    addValueToForm,
    translateClass: state.translateClass,
    changeTranslateClass
  }}>
    {children}
  </GlobalContext.Provider>);
}