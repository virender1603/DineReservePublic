import {
  BOOKING_TIME,
  BOOKING_DATE,
  BOOKING_PEOPLE,
  BOOKING_ADDRESS_SELECT,
  BOOKING_ADDRESS_CHANGE,
  CURRENT_ADDRESS,
  CURRENT_ADDRESS_ERROR,
  LOCATION_POINT,
  REMOVE_CLEAR_BUTTON
} from './SearchFormConstants'
import {config} from '../config'

export const getSelectedDate = (date) =>{
  return{
    type : BOOKING_DATE,
    payload : date
  }
}

export const getChangeTime = (time) =>{
  return{
    type : BOOKING_TIME,
    payload : time
  }
}
export const getChangePeople = (people) =>{
  return{
    type : BOOKING_PEOPLE,
    payload : people
  }
}

export const getSelectedAddress = (data) =>{
  return{
    type : BOOKING_ADDRESS_SELECT,
    payload : data
  }
}

export const getChangeAddress = (data) =>{
  return{
    type : BOOKING_ADDRESS_CHANGE,
    payload : data
  }
}

export const getLocationPointChange = (location_pont) =>{
  return{
    type : LOCATION_POINT,
    payload : location_pont
  }
}
export const getCurrentAddressChange = (current_address) =>{
  return{
    type : CURRENT_ADDRESS,
    payload : current_address
  }
}

export const handleCurrentAddressFaliure = (error) =>{
  return{
    type : CURRENT_ADDRESS_ERROR,
    payload : error
  }
}

export const removeClearButton = (data) =>{
  return{
    type : REMOVE_CLEAR_BUTTON,
    payload : data
  }
}

export const getCurrentAddress = () =>{
    return(dispatch) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          const location_pont = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          }
      dispatch(getLocationPointChange(location_pont))
      const url =`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location_pont.latitude},${location_pont.longitude}&sensor=false&key=AIzaSyAbGLWqhmWGpFt8Ppc8WSDc8mDfyv2oI84`;
    fetch(url)
    .then(response => response.json())
    .then(res =>{
      const current_address = res.results[0].formatted_address
      dispatch(getCurrentAddressChange(current_address))
    })
    .catch(error => {
      const errorMsg = error
      dispatch(handleCurrentAddressFaliure(errorMsg))
    })
      })
    }
  }
}
