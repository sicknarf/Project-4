import { useEffect, useState } from 'react';
import * as userService from '../../utilities/user-services'
import * as videosAPI from '../../utilities/videos-api'

function OrderHistoryPage({user, setUser}) {
  const [videos, setVideos] = useState([])

  useEffect(function (){
    async function getNoEditorVideos() {
      const videos = await videosAPI.getNoEditVideos()
      setVideos(videos)
    }
    getNoEditorVideos();
  }, [])



  // async function handleCheckToken(){
  //   const expDate = await userService.checkToken()
  //   console.log(expDate)
  // }

  return (
    <div>
       {user.isEditor ?
        // THIS IS FOR VIDEO EDITORS
        <h1>this is video history page for video editors</h1> : 


        // THIS IS FOR CONTENT CREATORS
        <h1>this is video history page for content creators</h1>}
    </div>
  );
  
}

export default OrderHistoryPage;
