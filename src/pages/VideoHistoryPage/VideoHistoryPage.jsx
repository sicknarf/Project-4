import { useEffect, useState } from 'react';
import VideoList from '../../components/VideoList/VideoList';
import EditorGigs from '../../components/EditorGigs/EditorGigs';
import * as videosAPI from '../../utilities/videos-api'
import { Routes, Route, useNavigate } from 'react-router-dom';
import Portal from '../Portal/Portal';
import { Navigate } from 'react-router-dom';

function VideoHistoryPage({user, gigs, myVideos, setVidDelete }) {



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
          <h1>Content Creators: My Posted Videos</h1>
          <VideoList videos={myVideos} user={user} setVidDelete={setVidDelete}/>
        </div>
        }
        
    </div>
    
  );
  
}

export default VideoHistoryPage;
