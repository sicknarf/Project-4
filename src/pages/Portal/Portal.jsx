import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as usersAPI from '../../utilities/users-api'
import { Link } from "react-router-dom";

export default function Portal({user, gigs, myVideos}){
    let id = useParams().id;

    const [filtered, setFiltered] = useState({})

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
                
    

    return(
        <div>
            <h2>this should be the portal</h2>
            <h3>{filtered.title}</h3>
            requested by: {requesterName} | editing by: {editorName} <br />
            <Link to={filtered.url}>video link</Link>
            <p>{filtered.requestDescription}</p>
        </div>
    )
}