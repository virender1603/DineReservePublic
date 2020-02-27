import {
  CREATE_CONTACT_REQUEST,
  CREATE_CONTACT_SUCCESS,
  CREATE_CONTACT_FALIURE
} from './ContactConstants'

const intialstate = {
  loading : false,
  success : false,
  contact_info : [],
  error : ''
}

const ContactReducers = (state = intialstate,action) =>{
  switch(action.type){
    case CREATE_CONTACT_REQUEST : return{
      ...state,
      loading:true
    }
    case CREATE_CONTACT_SUCCESS : return{
      ...state,
      success:true,
      contact_info:action.payload
    }
    case CREATE_CONTACT_FALIURE : return{
      ...state,
      error : action.payload
    }
    default: return state
  }

}

export default ContactReducers
