import { useEffect, useState } from 'react';
import VideoList from '../../components/VideoList/VideoList';
import EditorGigs from '../../components/EditorGigs/EditorGigs';
import * as videosAPI from '../../utilities/videos-api'

function OrderHistoryPage({user, setUser, gigs, setGigs, myVideos, setMyVideos}) {


  return (
    <div>
       {user.isEditor ?
        // THIS IS FOR VIDEO EDITORS
        <div>
          <h1>Video Editors: My Current Gigs</h1>  
          <EditorGigs videos={gigs} user={user} />
        </div>

        // THIS IS FOR CONTENT CREATORS
        :
        <div>
          <h1>this is video history page for content creators</h1>
          <VideoList videos={myVideos} user={user}/>
        </div>
        }
    </div>
  );
  
}

export default OrderHistoryPage;
