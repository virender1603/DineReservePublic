import {combineReducers} from 'redux';
import HomeFeatureReducers from './HomeFeature/HomeFeatureReducers'
import ContactReducers from './ContactUs/ContactReducers'
import SearchFormReducers from './SearchForm/SearchFormReducers'


const rootReducer = combineReducers({
    All_Restaurant : HomeFeatureReducers,
    Contact : ContactReducers,
    Search : SearchFormReducers
})

export default rootReducer
