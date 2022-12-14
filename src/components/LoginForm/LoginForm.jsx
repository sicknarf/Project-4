import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/user-services';


export default function LoginForm({setUser, setSignIn}){
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    });

    const [error, setError] = useState('')

    function handleChange(evt) {
        setCredentials({...credentials, [evt.target.name]: evt.target.value });
        setError('');
    }

    async function handleSubmit(evt){
        evt.preventDefault();
        try{
            // The promise returned by the signUp service method 
            // will resolve to the user object included in the
            // payload of the JSON Web Token (JWT)
            const user = await userService.login(credentials); 
            setUser(user);
            setSignIn([1])
            navigate('/videos');
        }catch{
            setError('Log In Failed - Try Again')
        }
    }

    return(
        <div>
        <div className="form-container" onSubmit={handleSubmit}>
          <form autoComplete="off" >
            <label>Email</label>
            <input type="text" name="email" value={credentials.email} onChange={handleChange} required />
            <label>Password</label>
            <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
            <br /><button type="submit">LOG IN</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{error}</p>
      </div>
    )

}