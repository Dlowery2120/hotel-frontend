import {createStore} from 'redux'
import {combineReducers} from 'redux'
import hotelReducer from './reducers/hotel'
const rootReducer = combineReducers({
    hotelState: hotelReducer
})


const store = createStore( rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store