import { createStore,applyMiddleware } from 'redux'; 
import rootReducer from './REDUX/reducers/index';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware =[thunk]
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(...middleware)))
export default store

// import { configureStore } from '@reduxjs/toolkit'
// import counterSlice from './components/counterSlice'

// export const store = configureStore({
//   reducer: {counter:counterSlice},
// })