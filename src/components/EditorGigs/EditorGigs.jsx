import { useState } from "react";
import VideoDetail from "../VideoDetail/VideoDetail";

// coming in from VideoHistoryPage.jsx

export default function EditorGigs({videos, user, setVidDelete }){
    console.log(videos)
    console.log('this is from the EditorGigs.jsx')
    const myVideos = videos.map(v => 
        <VideoDetail video={v} key={v._id} user={user} setVidDelete={setVidDelete} />
        )

    return(
        <div>
            <h2>this should be a list of all gigs the editor agreed to</h2>
            {myVideos}
        </div>
    )
}