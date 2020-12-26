import Data from './Data';
import {createStore, compose, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {ProductListReducer} from './Reducers/ProductReducer';

const initialState = {};

const reducer = combineReducers({
    ProductList: ProductListReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore
(reducer, initialState, 
    composeEnhancer(applyMiddleware(thunk)));

export default store;