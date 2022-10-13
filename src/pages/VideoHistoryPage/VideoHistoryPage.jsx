import { useEffect, useState } from 'react';
import VideoList from '../../components/VideoList/VideoList';
import EditorGigs from '../../components/EditorGigs/EditorGigs';
import * as videosAPI from '../../utilities/videos-api'
import { Routes, Route, useNavigate } from 'react-router-dom';
import Portal from '../Portal/Portal';
import { Navigate } from 'react-router-dom';

function VideoHistoryPage({user, setUser, gigs, setGigs, myVideos, setMyVideos, setVidDelete }) {
  // gigs={gigs}
  // setGigs={setGigs}
  // myVideos={myVideos}
  // setMyVideos={setMyVideos}
  const navigate = useNavigate();

  // const [gigs, setGigs] = useState([])
  // const [vidDelete, setVidDelete] = useState([])
  // const [myVideos, setMyVideos] = useState([])


  // useEffect(function(){
  //   async function getEditorGigs() {
  //     try{
  //     console.log('console log in the videohistorypage')
  //     const videos = await videosAPI.getEditorGigs()
  //     setGigs(videos)
  //     } catch {
      
  //     }
  //   }
  //   getEditorGigs()
  // }, [vidDelete])
  

  // useEffect(function(){
  //   async function getMyVideos() {
  //     try{
  //     const videos = await videosAPI.getMyVideos()
  //     setMyVideos(videos)
  //     } catch {

  //     }
  //   }
  //   getMyVideos();
  // }, [vidDelete])

  


  return (
    <div>
       {user.isEditor ?
        // THIS IS FOR VIDEO EDITORS
        <div>
          <h1>Video Editors: My Current Gigs</h1>  
          <EditorGigs videos={gigs} user={user} setVidDelete={setVidDelete}/>
        </div>

        // THIS IS FOR CONTENT CREATORS
        :
        <div>
          <h1>this is video history page for content creators</h1>
          <VideoList videos={myVideos} user={user} setVidDelete={setVidDelete}/>
        </div>
        }
        
    </div>
    
  );
  
}

export default VideoHistoryPage;
