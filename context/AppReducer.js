export default (state, action) => {
  switch(action.type) {
    case 'ADD_STEP':
      return {
        ...state,
        formStep: state.formStep + 1
      }
    case 'SUB_STEP':
      return {
        ...state,
        formStep: state.formStep - 1
      }
    case 'ADD_FORM_DATA':
      return {
        ...state,
        formData: {...state.formData, ...action.payload}
      }

    case 'CHANGE_TRANSLATE_CLASS':
      return {
        ...state,
        translateClass: action.payload
      }
    default:
      return state;
  }
}