import { combineReducers } from 'redux'
import countryReducer from './services/country/reducer';
import payerReducer from './services/payer/reducer'

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  payer: payerReducer,
  country: countryReducer
})

export default rootReducer;