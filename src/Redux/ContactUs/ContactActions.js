import {
  CREATE_CONTACT_REQUEST,
  CREATE_CONTACT_SUCCESS,
  CREATE_CONTACT_FALIURE
} from './ContactConstants'
import {config} from '../config'

export const createContactRequest = (data) =>{
  return{
    type : CREATE_CONTACT_REQUEST,
    payload : data
  }
}
export const createContactSuccess = (success) =>{
  return{
    type : CREATE_CONTACT_SUCCESS,
    payload : success
  }
}
export const createContactFaliure = (error) =>{
  return{
    type : CREATE_CONTACT_FALIURE,
    payload : error
  }
}

export const contactCreate = (data) =>{
    return(dispatch) => {
      dispatch(createContactRequest(data))
      const url =`${config.api_root}/contact?contact_name=${data.contact_name}&contact_email=${data.contact_email}&contact_phone=${data.contact_phone}&contact_subject=${data.contact_subject}&contact_message=${data.contact_message}`;
      const request_option = {
      method: "POST"
    }
    fetch(url, request_option)
    .then(response => response.json())
    .then(contact_info =>{
      const success = contact_info
      dispatch(createContactSuccess(success))
    })
    .catch(error => {
      const errorMsg = error
      dispatch(createContactFaliure(errorMsg))
    })
    }
}
