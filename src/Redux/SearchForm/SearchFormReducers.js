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

const intialstate = {
  bookingTime:"7:00 pm",
  bookingDate: "",
  people: 2,
  address: null,
  showclear: true,
  current_address: "",
  latitude : null,
  longitude: null,
  error : ''
}

const SearchFormReducers = (state = intialstate,action) =>{
  switch(action.type){
    case BOOKING_TIME : return{
      ...state,
      bookingTime:action.payload
    }
    case BOOKING_DATE : return{
      ...state,
      bookingDate:action.payload
    }
    case BOOKING_PEOPLE : return{
      ...state,
      people:action.payload
    }
    case BOOKING_ADDRESS_SELECT : return{
      ...state,
      address:action.payload.address,
      showclear:action.payload.showclear
    }
    case BOOKING_ADDRESS_CHANGE : return{
      ...state,
      address:action.payload.address,
      showclear:action.payload.showclear
    }
    case LOCATION_POINT : return{
      ...state,
      latitude:action.payload.latitude,
      longitude:action.payload.longitude
    }
    case CURRENT_ADDRESS : return{
      ...state,
      current_address:action.payload
    }
    case CURRENT_ADDRESS_ERROR : return{
      ...state,
      error:action.payload
    }
    case REMOVE_CLEAR_BUTTON : return{
      ...state,
      address : action.payload.address,
      current_address : action.payload.current_address,
      showclear :action.payload.showclear

    }
    default: return state
  }

}

export default SearchFormReducers
