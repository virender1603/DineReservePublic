import {
  FETCH_ALLRESTAURANT_REQUEST,
  FETCH_ALLRESTAURANT_SUCCESS,
  FETCH_ALLRESTAURANT_ERROR
} from './HomeFeatureConstants'

const intialstate = {
  loading : false,
  restaurants : [],
  error : ''
}

const HomeFeatureReducers = (state = intialstate,action) =>{
  switch(action.type){
    case FETCH_ALLRESTAURANT_REQUEST : return{
      ...state,
      loading:true
    }
    case FETCH_ALLRESTAURANT_SUCCESS : return{
      ...state,
      loading:false,
      restaurants:action.payload
    }
    case FETCH_ALLRESTAURANT_ERROR : return{
      ...state,
      error : action.payload
    }
    default: return state
  }

}

export default HomeFeatureReducers
