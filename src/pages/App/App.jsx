import './App.css';
import { useState } from 'react';
import AuthPage from '../AuthPage/AuthPage';
import NewVideoPage from '../NewVideoPage/NewVideoPage';
import VideoHistoryPage from '../VideoHistoryPage/VideoHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import * as videosAPI from '../../utilities/videos-api'
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/user-services';
import { useEffect } from 'react';
import Portal from '../Portal/Portal';


function App() {

  const [user, setUser] = useState(getUser());
  const [vidDelete, setVidDelete] = useState([]);
  const [gigAssign, setGigAssign] = useState([]);
  const [vidCreate, setVidCreate] = useState([]);
  const [signIn, setSignIn] = useState([]);
  const [gigs, setGigs] = useState([]);
  const [myVideos, setMyVideos] = useState([]);

  useEffect(function(){
    async function getEditorGigs() {
      try{
      const videos = await videosAPI.getEditorGigs()
      setGigs(videos)
      } catch {
      
      }
    }
    getEditorGigs()
  }, [vidDelete, vidCreate, signIn, gigAssign])
  

  useEffect(function(){
    async function getMyVideos() {
      try{
      const videos = await videosAPI.getMyVideos()
      setMyVideos(videos)
      } catch {

      }
    }
    getMyVideos();
  }, [vidDelete, vidCreate, signIn])
  

  return (
    <main className="App">
      { user ? 
      <div>
      <NavBar user={user} setUser={setUser}/>
      <Routes>
        <Route path="/videos/new" element={<NewVideoPage 
                                            user={user} 
                                            setUser={setUser} 
                                            setVidCreate={setVidCreate} 
                                            setGigAssign={setGigAssign}
                                            />} />
        <Route path="/videos" element={<VideoHistoryPage 
                                        user={user} 
                                        setUser={setUser}
                                        myVideos={myVideos}
                                        gigs={gigs}
                                        setGigs={setGigs}
                                        setMyVideos={setMyVideos} 
                                        setVidDelete={setVidDelete}/>} />
        <Route path="/videos/:id" element={<Portal 
                                              user={user}
                                              gigs={gigs}
                                              myVideos={myVideos}
                                              setUser={setUser}
                                              setGigs={setGigs}
                                              setMyVideos={setMyVideos}
                                              />} />
      </Routes>
      </div>: 
        <AuthPage setUser={setUser} setSignIn={setSignIn}/>}
    </main>
  );
}

export default App;
