import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import './AuthPage.css';

function AuthPage({setUser, setSignIn}) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main>
        <button onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'sign up instead' : 'log in instead'}</button>
        {showLogin ? <LoginForm setUser={setUser} setSignIn={setSignIn}/> : <SignUpForm setUser={setUser} setSignIn={setSignIn}/>}
    </main>
  );

}

export default AuthPage;