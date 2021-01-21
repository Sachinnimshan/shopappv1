import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Button,Table, Badge} from 'react-bootstrap';
import './AdminUserView.css';
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
            <div className='main-admin-user-container'>
                <div className='main-admin-user-top-container'>
                <div><Badge variant='info'><span>LIST OF USERS</span></Badge></div>
                <div><Button variant='success'>Create New User</Button></div>
                </div>
                <div className='admin-user-table-container'>
                
                {(loading)? (<LoadingBox></LoadingBox>):
                (error)? (<MessageBox>{error}</MessageBox>):
            (<div>
                   <Table className='admin-user-view-table'>
                       <thead>
                           <tr>
                               <th>USER ID</th>
                               <th>NAME</th>
                               <th>E-Mail</th>
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
                                   <td><Button variant='info'>VIEW</Button></td>
                                   <td><Button variant='danger'>DELETE</Button></td>
                               </tr>
                           ))}
                           
                           
                       </tbody>
                   </Table>
               </div>)}

            </div>
            </div>
    )
}

export default AdminUserView;
