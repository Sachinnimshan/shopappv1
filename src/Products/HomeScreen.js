import React, { Component } from 'react';
import {Data} from './Data';
import Products from './Products';
import './HomeScreen.css';

export class HomeScreen extends Component {
    constructor(){
        super();
        this.state = {
            products: Data.ProductData
        }
    }
    render() {
        return (
            <div className='home-main-container'>
                <Products products= {this.state.products}/>  
            </div>
        )
    }
}

export default HomeScreen;
