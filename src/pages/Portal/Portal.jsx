import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as usersAPI from '../../utilities/users-api'
import { Link } from "react-router-dom";
import './Portal.css'
import * as videosAPI from '../../utilities/videos-api'

export default function Portal({user, gigs, myVideos}){
    let id = useParams().id;

    const [filtered, setFiltered] = useState({})
    const [comment, setComment] = useState({comment: '', user: user._id})
    const [myComments, setMyComments] = useState([])
    const [commentsDependency, setCommentsDependency] = useState([])

    const [requesterName, setRequesterName] = useState('[data loading]')
    const [editorName, setEditorName] = useState('[data loading]')

    console.log('============================Portal starts here============================')

   


    useEffect(function(){
        async function getFiltered() {
            if(user.isEditor){
                gigs.filter((gig)=>{
                    if(gig._id === id){
                        setFiltered(gig)
                    }
                })
            } else {
                myVideos.filter((video)=>{
                    if(video._id === id){
                        setFiltered(video)
                    }
                })
        }
        }
        getFiltered()
    }, [])

    useEffect(function(){
        async function getVideoComments() {
          try{
          const comments = await videosAPI.getMyComments(filtered)
          setMyComments(comments)
          } catch {
    
          }
        }
        getVideoComments();
      }, [handleAddComment])

    async function getUsername() {
        const user = await usersAPI.findUser(filtered.requester)
        setRequesterName(user.name)
    }

    async function getEditorName() {
        const user = await usersAPI.findUser(filtered.editor)
        setEditorName(user.name)
    }

    getUsername();
    getEditorName();
                
    function handleCommentChange(e) {
        setComment({...comment, [e.target.name]:e.target.value})

    }

    function handleAddComment(evt){
        evt.preventDefault();
        videosAPI.addComment(filtered._id, comment);
        setCommentsDependency([1]);
    }

    return(
        <div>
            <h2>this should be the portal</h2>
            <h3>{filtered.title}</h3>
            requested by: {requesterName} | editing by: {editorName} <br />
            <Link to={filtered.url} target="_blank">video link</Link>
            <p>{filtered.requestDescription}</p>
            <form onSubmit={handleAddComment}>
                <textarea name='comment' onChange={handleCommentChange} placeholder="enter a comment"/>
                <br />
                <button type='submit'>submit comment</button>
            </form>
        </div>
    )
}