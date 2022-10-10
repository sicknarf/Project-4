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
        <Link to="/videos">Video History</Link>
        &nbsp; | &nbsp;
        <Link to="/videos/new">New Video</Link>
        &nbsp; | &nbsp;
        <span>Welcome, {user.name}</span>
        &nbsp; | &nbsp;
        &nbsp;&nbsp; <Link to="" onClick={handleLogout}>Logout</Link>
    </nav>
    )

}

export default NavBar