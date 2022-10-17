import { useState } from "react";
import VideoDetail from "../VideoDetail/VideoDetail";

// coming in from VideoHistoryPage.jsx

export default function EditorGigs({videos, user, setVidDelete }){
    const myVideos = videos.map(v => 
        <VideoDetail video={v} key={v._id} user={user} setVidDelete={setVidDelete} />
        )

    return(
        <div>
            {myVideos}
        </div>
    )
}