import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import './AuthPage.css';

function AuthPage({setUser}) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main>
        <button onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'sign up instead' : 'log in instead'}</button>
        {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
    </main>
  );

}

export default AuthPage;