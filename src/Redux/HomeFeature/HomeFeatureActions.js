import {
  FETCH_ALLRESTAURANT_REQUEST,
  FETCH_ALLRESTAURANT_SUCCESS,
  FETCH_ALLRESTAURANT_ERROR
} from './HomeFeatureConstants'
import {config} from '../config'

export const fetchAllrestaurantRequest = () =>{
  return{
    type : FETCH_ALLRESTAURANT_REQUEST
  }
}

export const fetchAllrestaurantSuccess = (restaurants) =>{
  return{
    type : FETCH_ALLRESTAURANT_SUCCESS,
    payload : restaurants
  }
}

export const fetchAllrestaurantFailure = (error) =>{
  return{
    type : FETCH_ALLRESTAURANT_ERROR,
    payload : error
  }
}

export const fetchRestaurant = () =>{
    return(dispatch) => {
      dispatch(fetchAllrestaurantRequest())
      const url =`${config.api_root}/all-restaurant`;
      const request_option = {
      method: "GET"
    }
    fetch(url, request_option)
    .then(response => response.json())
    .then(restaurant_info =>{
      const restaurants = restaurant_info
      dispatch(fetchAllrestaurantSuccess(restaurants))
    })
    .catch(error => {
      const errorMsg = error
      dispatch(fetchAllrestaurantFailure(errorMsg))
    })
    }
}
