import { useState, useEffect } from 'react'
import * as usersAPI from '../../utilities/users-api'

export default function VideoDetail({video}){

    const [username, setUsername] = useState('')
    const [editor, setEditor] = useState()

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
            console.log('directly below is video.editor')
            console.log(video.editor)
            const user = await usersAPI.findUser(video.editor)
            setEditor(user.name)
            console.log(editor+" is editor")
        }
        getEditor()
    }, [])

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
            {editor}
        </div>
    )
}