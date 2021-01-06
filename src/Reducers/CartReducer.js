import { ADD_CART_ITEM, REMOVE_CART_ITEM, SAVE_SHIPPING_ADDRESS } from "../Constants/CartConstants"

export const CartReducer =(state={CartItems:[]}, action)=>{
    switch(action.type){
        case ADD_CART_ITEM:
            const Item = action.payload;
            const ExistItem = state.CartItems.find((x)=> x.product === Item.product);

            if(ExistItem){
                return {
                    ...state, CartItems: state.CartItems.map
                    ((x)=> x.product === ExistItem.product ? Item : x),
                };
            }else{
                return{...state, CartItems : [...state.CartItems, Item]};
            }

            case REMOVE_CART_ITEM:
                return{
                    ...state, 
                    CartItems: state.CartItems.filter((x)=> x.product !== action.payload),
                };
            case SAVE_SHIPPING_ADDRESS: 
            return{ ...state, ShippingAddress: action.payload};
             default:
                return state;
                }
            };

    

