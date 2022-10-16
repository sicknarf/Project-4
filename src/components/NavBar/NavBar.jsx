import { Link } from 'react-router-dom';
import * as userService from '../../utilities/user-services';
import './NavBar.css'

function NavBar({user, setUser}){

    function handleLogout(){
        userService.logOut();
        setUser(null);
    }

    return(
    <nav>
        <div><Link to="/videos"><div>{user.isEditor ? 'my gigs' : 'my posted videos'}</div></Link></div>
        <div><Link to="/videos/new"><div>{user.isEditor ? 'look for a gig' : 'post a new video'}</div></Link></div>
        <div><span>Welcome, {user.name}</span></div>
        <div><Link to="" onClick={handleLogout}><div>Logout</div></Link></div>
    </nav>
    )

}

export default NavBar