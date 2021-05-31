import userReducer  from './user';
import hotelReducer from './hotel';
import { combineReducers } from 'redux';

const allReducers = () => {
   combineReducers({
	userReducer: userReducer,
	hotelReducer: hotelReducer
}); 
} 

export default allReducers;
