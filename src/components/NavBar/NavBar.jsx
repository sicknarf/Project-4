import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/user-services';

function NavBar({user, setUser}){

    function handleLogout(){
        userService.logOut();
        setUser(null);
    }

    return(
    <nav>
        <Link to="/orders">Order History</Link>
        &nbsp; | &nbsp;
        <Link to="/orders/new">New Order</Link>
        &nbsp; | &nbsp;
        <span>Welcome, {user.name}</span>
        &nbsp; | &nbsp;
        &nbsp;&nbsp; <Link to="" onClick={handleLogout}>Logout</Link>
    </nav>
    )

}

export default NavBar