import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import * as usersAPI from '../../utilities/users-api'
import * as videosAPI from '../../utilities/videos-api'
import './VideoDetail.css'

export default function VideoDetail({ video, user, setVidDelete, setGigAssign }){
    
    const navigate = useNavigate();
    const [username, setUsername] = useState('[data loading]')
    const [editor, setEditor] = useState('[no editor yet]')
    

    useEffect(function (){
        async function getUsername() {
            const user = await usersAPI.findUser(video.requester)
            setUsername(user.name)
        }
        getUsername();
      }, [])

    useEffect(function() {
        async function getEditor(){
            try{
            const user = await usersAPI.findUser(video.editor)
            setEditor(user.name)
        } catch {
            setEditor('there was an issue pulling the editor\'s information')
        }
        }
        getEditor()
    }, [])

    async function assignEditor(){
        await videosAPI.assignEditor(video, user)
        setGigAssign([1])
        navigate(`/videos`)
    }

    async function deleteVideo(){
        videosAPI.deleteVideo(video)
        setVidDelete([1])
    }
    

    return(
        <div className='video-detail'>
            <h3>{video.title}</h3>
            <div className='detail-titles'>
                <div>
                    <h4>url</h4>
                    <a href={video.url} target="_blank">[link]</a>
                </div>
                <div>
                    <h4>requester</h4>
                    <span>{username}</span>
                </div>
                <div>
                    <h4>editor</h4>
                    {editor === '[no editor yet]' && !user.isEditor ? 
                        <button className='cancel' onClick={deleteVideo}>click to cancel request</button> 
                    : editor }
                </div>
            </div>
            
            <div className='detail-body'>
                <div><h4>description:&nbsp;</h4></div>
                <div><span>{video.requestDescription}</span></div>
            </div>
            

            {user.isEditor && video.editor === null ? 
            <div>
            <button className='new-gig' onClick={assignEditor}>take on this gig</button>
            </div>
            : ''}
            {video.editor ? 
            <div>
                <Link to={`/videos/${video._id}`}>
                <button>click to see more</button>
                </Link>
            </div> 
            
            
            : ''}
        </div>
    )
}