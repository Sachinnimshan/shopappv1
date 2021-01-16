import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Button,Table} from 'react-bootstrap';
import './AdminProductView.css';
import LoadingBox from '../Components/LoadingBox';
import MessageBox from '../Components/MessageBox';
import { AllUserDetails } from '../Actions/AdminActions';

function AdminUserView() {

    const dispatch = useDispatch();
    const UserDetailsAll = useSelector((state)=>state.UserDetailsAll);
    const {users, loading, error} = UserDetailsAll;

    useEffect(()=>{
        dispatch(AllUserDetails());
    },[dispatch]);
    
    
    return (
            <div className='admin-product-table-container'>
                <div><span>LIST OF USERS</span></div>
                {(loading)? (<LoadingBox></LoadingBox>):
                (error)? (<MessageBox>{error}</MessageBox>):
            (<div>
                   <Table className='admin-product-view-table'>
                       <thead>
                           <tr>
                               <th>USER ID</th>
                               <th>NAME</th>
                               <th>E-Mail</th>
                               <th>Password</th>
                               <th>Is Admin</th>
                               <th>ACTION</th>
                               <th>ACTION</th>
                           </tr>
                       </thead>
                       <tbody>
                           {users.map((user)=>(
                               <tr key={user._id}>
                                   <td>{user._id}</td>
                                   <td>{user.Name}</td>
                                   <td>{user.Email}</td>
                                   <td>{user.Password}</td>
                                   <td>{user.IsAdmin}</td>
                               </tr>
                           ))}
                           
                           
                       </tbody>
                   </Table>
               </div>)}

            </div>
    )
}

export default AdminUserView;
