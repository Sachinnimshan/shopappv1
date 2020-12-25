import React, {useState, useEffect} from 'react';
import Products from './Products';
import './HomeScreen.css';
import axios from 'axios';
import LoadingBox from '../Components/LoadingBox';
import MessageBox from '../Components/MessageBox';

function HomeScreen() {
    const [products, setproducts] = useState([]);
    const [loading, setloading] = useState(false);
    const [error, seterror] = useState(false);

    useEffect(()=>{
        const FetchData = async() => {
        try{
        setloading(true);    
        const {data} = await axios.get('/api/products');
        setloading(false);
        setproducts(data);
        }catch(err){
        seterror(err.message);
        setloading(false);
        }
        };
        FetchData();
    }, []);

    return (
        <div>
            { loading ? (<LoadingBox></LoadingBox>)
           : error ? (<MessageBox>{error}</MessageBox>)
        : (
            <div className='main-products-container'>
            {products.map((product)=>(
                <Products key={product._id} product={product}/>
        ))}

            </div>)}


        </div>
          
        

    );
}

export default HomeScreen;
