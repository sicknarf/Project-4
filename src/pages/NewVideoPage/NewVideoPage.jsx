import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import * as videosAPI from '../../utilities/videos-api'
import { useNavigate } from 'react-router-dom';

function NewVideoPage({user, setUser}) {

  const navigate = useNavigate();

  const [newVideo, setNewVideo] = useState({
    url: "",
    requester: "",
    title: "",
    requestDescription: "",
    editor: null,
    editedResponse: "",
    comments: []
  })

  async function handleAddVideo(evt){
    evt.preventDefault();
    await videosAPI.creatorPostVideo(newVideo);
    navigate('/videos')
  }

    function handleChange(e) {
      setNewVideo({...newVideo, [e.target.name]:e.target.value})
    }


  return (
    <div>
       {user.isEditor ?
        // THIS IS FOR VIDEO EDITORS
        <h1>this is new video page for video editors</h1> : 


        // THIS IS FOR CONTENT CREATORS
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
