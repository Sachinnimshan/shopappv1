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
import { ListProducts } from '../Actions/ProductActions';
import LoadingBox from '../Components/LoadingBox';
import MessageBox from '../Components/MessageBox';

function AdminHome() {
    const UserSign = useSelector((state)=>state.UserSign);
    const{UserInfo}= UserSign;

    return (
        <div className='main-admin-home-container'>
            <div className='admin-home-container'>
                <div className='admin-home-left'>
                    <div className='admin-home-left-profile-container'>
                        <div><BiUserCircle className='user-profile'/></div>
                        <div className='admin-home-left-profile'>
                            <ul>
                                <li><span>{UserInfo.Name}</span></li>
                                <li>Admin</li>
                            </ul>
                        </div>
                    </div>
                <ul>
                    <li><Link className='side-bar-links'>PRODUCTS</Link></li>
                    <li><Link className='side-bar-links'>USERS</Link></li>
                    <li><Link className='side-bar-links'>ORDERS</Link></li>
                    <li><Link className='side-bar-links'>SALES</Link></li>
                </ul>
                </div>
                <div className='admin-home-right'>
                    <div className='admin-home-right-top'>
                        <div >
                            <Card className='admin-home-right-top-card'>
                                <Card.Body>
                                    <VscGift className='card-icons'/>
                                    <Card.Title className='card-title'>Products</Card.Title>
                                    <span>
                                        <h3></h3>
                                    </span>
                                </Card.Body>
                            </Card>

                        </div>
                        <div >
                        <Card className='admin-home-right-top-card'>
                                <Card.Body>
                                <FiUsers className='card-icons'/>
                                    <Card.Title className='card-title'>USERS</Card.Title>
                                    <span>
                                        <h3></h3>
                                    </span>
                                </Card.Body>
                            </Card>

                        </div>
                        <div>
                        <Card className='admin-home-right-top-card'>
                                <Card.Body>
                                <HiOutlineDocumentReport className='card-icons'/>
                                    <Card.Title className='card-title'>ORDERS</Card.Title>
                                    <span>
                                        <h3></h3>
                                    </span>
                                </Card.Body>
                            </Card>
                        </div>

                        <div>
                        <Card className='admin-home-right-top-card'>
                                <Card.Body>
                                <FcSalesPerformance className='card-icons'/>
                                    <Card.Title className='card-title'>SALES</Card.Title>
                                    <span>
                                        <h3></h3>
                                    </span>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>

                <div className='admin-home-right-product'>
                <AdminProductView/>
                </div>

                </div>

                
            
            </div>


            
        </div>
    )
}

export default AdminHome;
