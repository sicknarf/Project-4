import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Portal({user, gigs, myVideos}){
    let id = useParams().id;

    const [filtered, setFiltered] = useState({})
    // let filtered = undefined

    // if(user.isEditor){
    //     filtered = gigs.filter((gig)=>{
    //         if(gig._id === id){
    //             return gig
    //         }
    //     })[0]
    // } else {
    //     filtered = myVideos.filter((video)=>{
    //         if(video._id === id){
    //             return video
    //         }
    //     })[0]
    // }

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
                
            
        
    

    return(
        <div>
            <h2>this should be the portal</h2>
            {filtered.title}
        </div>
    )
}