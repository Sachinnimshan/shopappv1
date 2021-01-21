import React from 'react';
import {Card} from 'react-bootstrap';
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
import './AdminDashBoard.css';

function AdminDashBoard() {
    return (
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
            </div>
        
    )
}

export default AdminDashBoard;
