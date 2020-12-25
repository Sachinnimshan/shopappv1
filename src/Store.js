import Data from './Data';
import {createStore} from 'redux';

const initialState = {};

const reducer = (state, action)=>{
    return {products: Data.ProductData};
}

const store = createStore(reducer, initialState);

export default store;