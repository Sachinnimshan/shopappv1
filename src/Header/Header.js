import React, {useState} from 'react';
import {Badge, Dropdown, Button} from 'react-bootstrap';
import './Header.css';
import {Link} from 'react-router-dom';
import {VscThreeBars} from 'react-icons/vsc';
import {AiOutlineCloseCircle} from 'react-icons/ai';
import {TopNavData} from './TopNavData';
import {SidebarData} from './SidebarData';
import {AiOutlineSearch} from 'react-icons/ai';
import {useSelector} from 'react-redux';

function Header() {

    const [Sidebar, SetSidebar] = useState(false);
    const ShowSidebar =()=> SetSidebar(!Sidebar);
    const CloseSidebar =()=> SetSidebar(false);

    const Cart = useSelector(state=> state.Cart);
    const {CartItems}= Cart;
    const UserSign = useSelector(state=> state.UserSign);
    const {UserInfo}= UserSign;

    return (
        <div>
            <div className='top-header-container'>
            <div className='logo-container'>
                <Link to='/'><img className='amazon-logo' src='/Images/amzlogo.png'/></Link>
            </div>

            <div className='search-bar-container'>
                <input className='main-search-bar'/>
                <button className='main-search-btn'>
                    <AiOutlineSearch className='main-search-btn-icon'/>
                    </button>
            </div>

            <div className='signin-cart-container'>

               <Link to='/cart' className='signin-cart-link-container'>
                    <span className='signin-cart'>
                    Cart {" "}{CartItems.length > 0 && 
                    (<Badge variant='danger'>{CartItems.length}</Badge>)}
                    </span></Link>

                {(UserInfo) ? (<Link className='signin-cart-link-container'>
                <span className='signin-cart'>{UserInfo.Name}</span></Link>) 
                :
                (<Link to='/signin' className='signin-cart-link-container'>
                <span className='signin-cart'>Sign in</span></Link>)}

            </div>

            </div>
            <div className='second-header-container'>
                <div className='menu-bar-container' onClick={ShowSidebar}>
               {Sidebar ?  <AiOutlineCloseCircle className='menu-bar'/> :
                <VscThreeBars className='menu-bar'/>}
                </div>
                <div>
                    <ul className={Sidebar ? 'nav-menu active': 'nav-menu'}>
                        {SidebarData.map((sidedata, index)=>{
                            return(
                        <li key={index} className='nav-item' onClick={CloseSidebar}>
                            <Link to={sidedata.Path} className={sidedata.CName}>
                                {sidedata.Title}</Link>
                             </li>

                            );
                        })}

                    </ul>
                </div>

            <div className='top-nav-data-container'>
                {TopNavData.map((navdata, index) =>{
                return(
                 <Link key={index} to={navdata.Path} 
                 className={navdata.CName}>{navdata.Title}</Link>
                 );
                })}

            </div>


            </div>
            
          </div>
    )
}

export default Header;
