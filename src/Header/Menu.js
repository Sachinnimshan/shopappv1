import React from 'react';
import './Menu.css';
import {Link} from 'react-router-dom';
import {SidebarData} from './SidebarData';
import {IoCloseOutline} from 'react-icons/io5';
import {CgProfile} from 'react-icons/cg';
import {useSelector, useDispatch} from 'react-redux';

function Menu({closesidebar}) {
    const UserSign = useSelector(state=> state.UserSign);
    const {UserInfo}= UserSign;
    return (
           <div className='menu'>
            <div className='side-menu-profile-container'>
                <div ><span className='user-info'>
                {(UserInfo) ? (UserInfo.Name): (<><CgProfile/>'Hello, Sign In'</>)}
                </span></div>
            <div><IoCloseOutline className='close-menu-icon' onClick={closesidebar}/></div>
            </div>
           {SidebarData.map((sblink)=>(
               <div className='menu-item' key={sblink.Title}>
                   <Link to={sblink.path} onClick={closesidebar} className={sblink.CName}>{sblink.Title}</Link></div>
           ))}
        </div>
    )
}

export default Menu;
