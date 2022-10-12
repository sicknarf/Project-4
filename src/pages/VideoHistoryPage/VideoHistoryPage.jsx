import { useEffect, useState } from 'react';
import NoEditorVideos from '../../components/NoEditorVideos/NoEditorVideos';
import VideoList from '../../components/VideoList/VideoList';
import * as userService from '../../utilities/user-services'
import * as videosAPI from '../../utilities/videos-api'

function OrderHistoryPage({user, setUser}) {
  const [videos, setVideos] = useState([])
  const [myVideos, setMyVideos] = useState([])

  useEffect(function (){
    async function getNoEditorVideos() {
      const videos = await videosAPI.getNoEditVideos()
      setVideos(videos)
    }
    getNoEditorVideos();
  }, [])

  useEffect(function(){
    async function getMyVideos() {
      const videos = await videosAPI.getMyVideos()
      setMyVideos(videos)
    }
    getMyVideos();
  }, [])

  return (
    <div>
       {user.isEditor ?
        // THIS IS FOR VIDEO EDITORS
        <div>
          <h1>this is video history page for video editors</h1>  
          <NoEditorVideos videos={videos} user={user}/>
        </div>

        // THIS IS FOR CONTENT CREATORS
        :
        <div>
          <h1>this is video history page for content creators</h1>
          <VideoList videos={myVideos}/>
        </div>
        }
    </div>
  );
  
}

export default OrderHistoryPage;
