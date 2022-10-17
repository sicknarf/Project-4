import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import * as usersAPI from '../../utilities/users-api'
import { Link } from "react-router-dom";
import './Portal.css'
import * as videosAPI from '../../utilities/videos-api'
import VideoCommentItem from '../../components/VideoCommentItem/VideoCommentItem'
import VideoComments from '../../components/VideoComments/VideoComments'



export default function Portal({user, gigs, myVideos, setUploadUrl}){
    let id = useParams().id;
    const navigate = useNavigate();

    const [filtered, setFiltered] = useState({})
    const [comment, setComment] = useState({comment: '', user: user._id})
    const [newUrl, setNewUrl] = useState({text:''})
    const [myComments, setMyComments] = useState()
    
    const [commentsDependency, setCommentsDependency] = useState([])

    const [requesterName, setRequesterName] = useState('[data loading]')
    const [editorName, setEditorName] = useState('[data loading]')



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
          setMyComments([comments])
          } catch {
    
          }
        }
        getVideoComments();
      }, [])

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

    function handleAddUrl(evt){
        evt.preventDefault();
        console.log('portal.jsx going to videosApi')
        videosAPI.addUrl(filtered._id, newUrl)
        navigate('/videos')
        setUploadUrl([1])

    }

    function handleUrlChange(e) {
        setNewUrl({...newUrl, [e.target.name]:e.target.value})
    }

    // console.log(myComments)
    // console.log('this is filtered.comments')
    // console.log(filtered.comments)
    // console.log('this is filtered')
    // console.log(filtered)

    // const [allComments, setAllComments] = useState()

    let allComments = null
    
    async function pullComments(){
        allComments = await myComments.map((c)=>
        <VideoCommentItem 
            comment={c}
            />
        )
    }
    pullComments();


    // let allComments = filtered.comments.map((c) =>

    //     <VideoCommentItem 
    //         text={c.comment}
    //         commenter={c.user}/>
        
    
    // )


    return(
        <div>
            <h1>Portal for video: {filtered.title}</h1>
            <div className="portal-card">
            requested by: {requesterName} | editing by: {editorName} <br />
            <Link to={filtered.url} target="_blank">video link</Link>
            <h5>description:</h5>
            <p>{filtered.requestDescription}</p>
            {filtered.editedResponse !== '' ? <Link to={filtered.editedResponse}>edited video</Link> : '' }
            {user.isEditor ? 
            <form onSubmit={handleAddUrl}>
                <input 
                    type="text"
                    name="text"
                    value={newUrl.text}
                    onChange={handleUrlChange}
                    
                    />
                    <button type="submit">add url</button>
            </form>
            : ''}
            <div className="comments-section">
                {/* {allComments} */}
                {/* <VideoComments comments={myComments}/> */}
                <form onSubmit={handleAddComment}>
                <textarea name='comment' onChange={handleCommentChange} placeholder="enter a comment"/>
                <br />
                <button type='submit'>submit comment</button>
                </form>
            </div>
            </div>
        </div>
    )
}