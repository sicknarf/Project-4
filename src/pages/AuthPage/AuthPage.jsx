import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

function AuthPage({setUser}) {
  // const[showSignUp, setShowSignUp] = useState(false)
  return (
    <main>
        <h1>Sign Up Today!</h1>
        <SignUpForm setUser={setUser}/>
        <LoginForm setUser={setUser}/>
    </main>
  );

}

export default AuthPage;