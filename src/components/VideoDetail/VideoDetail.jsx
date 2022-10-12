import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import * as usersAPI from '../../utilities/users-api'
import * as videosAPI from '../../utilities/videos-api'

export default function VideoDetail({video, user, setVideos}){

    const [username, setUsername] = useState('')
    const [editor, setEditor] = useState('')
    const navigate = useNavigate();

    useEffect(function (){
        async function getUsername() {
            const user = await usersAPI.findUser(video.requester)
            console.log(`below is video.requester`)
            console.log(video.requester)
            setUsername(user.name)
        }
        getUsername();
      }, [])

    useEffect(function() {
        async function getEditor(){
            try{
            console.log('directly below is video.editor')
            console.log(video.editor)
            const user = await usersAPI.findUser(video.editor)
            setEditor(user.name)
        } catch {
            setEditor('there was an issue pulling the editor\'s information')
        }
        }
        getEditor()
    }, [])

    async function assignEditor(){
        videosAPI.assignEditor(video, user);
        navigate('/videos')
    }

    return(
        <div>
            <h3>url</h3>
            {video.url}
            <h3>requester</h3>
            {username}
            <h3>title</h3>
            {video.title}
            <h3>description</h3>
            {video.requestDescription}
            <h3>editor</h3>
            {editor === '' ? 'no editor yet!' : editor }
            {user.isEditor && video.editor === null ? 
            <div>
                <br />
            <button onClick={assignEditor}>this user is an editor</button>
            </div>
            : ''}
        </div>
    )
}