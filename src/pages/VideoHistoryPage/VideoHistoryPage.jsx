import VideoList from '../../components/VideoList/VideoList';
import EditorGigs from '../../components/EditorGigs/EditorGigs';


function VideoHistoryPage({user, gigs, myVideos, setVidDelete }) {



  return (
    <div>
       {user.isEditor ?
        // THIS IS FOR VIDEO EDITORS
        <div>
          <h1>My Current Gigs</h1>  
          <EditorGigs videos={gigs} user={user} setVidDelete={setVidDelete}/>
        </div>

        // THIS IS FOR CONTENT CREATORS
        :
        <div>
          <h1>My Posted Videos</h1>
          <VideoList videos={myVideos} user={user} setVidDelete={setVidDelete}/>
        </div>
        }
        
    </div>
    
  );
  
}

export default VideoHistoryPage;
