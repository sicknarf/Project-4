import { useState, useEffect } from 'react'
import * as usersAPI from '../../utilities/users-api'
import * as videosAPI from '../../utilities/videos-api'

export default function VideoDetail({video, user}){

    const [username, setUsername] = useState('')
    const [editor, setEditor] = useState('')

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
            // if(user === null){
                // setEditor('disdoafjalsdfadsf')
            // } else {
                setEditor(user.name)
            // }
            console.log(user.name+" is userdfgsfgs")
        } catch {

        }
        }
        getEditor()
    }, [])

    async function assignEditor(){
        videosAPI.assignEditor(video, user)
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
            {user.isEditor ? 
            <div>
                <br />
            <button onClick={assignEditor}>this user is an editor</button>
            </div>
            : ''}
        </div>
    )
}