import { useParams } from "react-router-dom";

export default function Portal({user, gigs, myVideos}){
    let id = useParams().id;

    let filtered = undefined

    if(user.isEditor){
        filtered = gigs.filter((gig)=>{
            if(gig._id === id){
                return gig
            }
        })[0]
    } else {
        filtered = myVideos.filter((video)=>{
            if(video._id === id){
                return video
            }
        })[0]
    }

    return(
        <div>
            <h2>this should be the portal</h2>
            {filtered.title}
        </div>
    )
}