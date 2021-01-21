import React, {useEffect} from 'react';
import {Card, ButtonGroup, Button} from 'react-bootstrap';
import './AdminHome.css';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {FiUsers} from 'react-icons/fi';
import{BiUserCircle} from 'react-icons/bi';
import {HiOutlineDocumentReport} from 'react-icons/hi';
import {FcSalesPerformance} from 'react-icons/fc';
import {VscGift} from 'react-icons/vsc';
import AdminProductView from './AdminProductView';
import AdminUserView from './AdminUserView';
import { ListProducts } from '../Actions/ProductActions';
import LoadingBox from '../Components/LoadingBox';
import MessageBox from '../Components/MessageBox';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AdminDashBoard from './AdminDashBoard';

function AdminHome() {
    const UserSign = useSelector((state)=>state.UserSign);
    const{UserInfo}= UserSign;

    const ProductList = useSelector((state)=> state.ProductList);
    const {loading, error, products} = ProductList;
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(ListProducts());
    },[dispatch]);

    return (
        <div className='main-admin-home-container'>
            <AdminDashBoard/>
        </div>    

    )
}

export default AdminHome;
