import Data from './Data';
import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const initialState = {};

const reducer = (state, action)=>{
    return {products: Data.ProductData};
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore
(reducer, initialState, 
    composeEnhancer(applyMiddleware(thunk)));

export default store;