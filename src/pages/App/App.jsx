import './App.css';
import { useState } from 'react';
import AuthPage from '../AuthPage/AuthPage';
import NewVideoPage from '../NewVideoPage/NewVideoPage';
import VideoHistoryPage from '../VideoHistoryPage/VideoHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/user-services';




function App() {

  const [user, setUser] = useState(getUser());


  return (
    <main className="App">
      { user ? 
      <div>
      <NavBar user={user} setUser={setUser}/>
      <Routes>
        <Route path="/videos/new" element={<NewVideoPage user={user} setUser={setUser}/>} />
        <Route path="/videos" element={<VideoHistoryPage user={user} setUser={setUser}/>} />
      </Routes>
      </div>: 
        <AuthPage setUser={setUser}/>}
    </main>
  );
}

export default App;
