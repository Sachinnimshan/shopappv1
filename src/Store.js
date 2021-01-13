
import {createStore, compose, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {ProductDetailsReducer, ProductListReducer} from './Reducers/ProductReducer';
import { CartReducer } from './Reducers/CartReducer';
import { UserRegisterReducer, UserSignReducer } from './Reducers/UserSignReducer';
import { OrderCreateReducer } from './Reducers/OrderCreateReducer';
import { OrderDetailsReducer, OrderPayReducer } from './Reducers/OrderDetailsReducer';
import { OrderHistoryReducer } from './Reducers/OrderHistoryReducer';
import { UserProfileReducer, UserProfileUpdateReducer } from './Reducers/UserProfileReducer';

const initialState = {

    UserSign: {
        UserInfo: localStorage.getItem('UserInfo') ?
        JSON.parse(localStorage.getItem('UserInfo')): null,
    },

    Cart: {
        CartItems: localStorage.getItem('CartItems') ? 
        JSON.parse(localStorage.getItem('CartItems')): [],

        ShippingAddress: localStorage.getItem('ShippingAddress')?
        JSON.parse(localStorage.getItem('ShippingAddress')): {},

        PaymentMethod: 'PayPal',
    },
};

 const reducer = combineReducers({
    ProductList: ProductListReducer,
    ProductDetails: ProductDetailsReducer,
    Cart: CartReducer, UserSign: UserSignReducer,
    Register: UserRegisterReducer,
    OrderCreate: OrderCreateReducer,
    OrderDetails: OrderDetailsReducer,
    OrderPay: OrderPayReducer,
    HistoryOrder: OrderHistoryReducer,
    UserDetails: UserProfileReducer,
    UserDetailsUpdate: UserProfileUpdateReducer
 });

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore
(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;