import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import * as videosAPI from '../../utilities/videos-api'
import { useNavigate } from 'react-router-dom';
import NoEditorVideos from '../../components/NoEditorVideos/NoEditorVideos';

function NewVideoPage({user, setUser, setVidCreate}) {

  const navigate = useNavigate();

  const [assignVideo, setAssignVideo] = useState([])
  const [videos, setVideos] = useState([])
  const [newVideo, setNewVideo] = useState({
    url: "",
    requester: "",
    title: "",
    requestDescription: "",
    editor: null,
    editedResponse: "",
    comments: []
  })

    useEffect(function (){
      async function getNoEditorVideos() {
        const videos = await videosAPI.getNoEditVideos()
        setVideos(videos)
      }
      getNoEditorVideos();
    }, [])

  async function handleAddVideo(evt){
    evt.preventDefault();
    await videosAPI.creatorPostVideo(newVideo);
    setVidCreate([1])
    navigate('/videos')
  }

    function handleChange(e) {
      setNewVideo({...newVideo, [e.target.name]:e.target.value})
    }


  return (
    <div>
       {user.isEditor ?
        // THIS IS FOR VIDEO EDITORS
        <div>
        <h1>Video Editors: Take on New Gig</h1>
        <NoEditorVideos videos={videos} user={user} setVideos={setVideos}/>  
        </div>

        : // THIS IS FOR CONTENT CREATORS
        <div>
          <h1>this is new video page for content creators</h1>
          <form className='ccVideoForm' onSubmit={handleAddVideo}>
            <label>title:</label>
            <input 
              type="text"
              name="title"
              value={newVideo.title}
              onChange={handleChange}
              />
            <label>video link:</label>
            <input 
              // type="url"
              value={newVideo.url}
              name="url"
              onChange={handleChange}
              placeholder="enter a video link"
              />
            <label>description:</label>
            <textarea 
              name="requestDescription"
              value={newVideo.requestDescription}
              onChange={handleChange}
              placeholder="please provide a brief description.."
              />
          <button type='submit'>submit</button>
          </form>
        </div>
        }
    </div>
  );
  
}

export default NewVideoPage;
