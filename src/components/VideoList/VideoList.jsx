import { useState } from "react";
import VideoDetail from "../VideoDetail/VideoDetail";

export default function VideoList({videos, user, setVidDelete }){

    const myVideos = videos.map(v => 
        <VideoDetail video={v} key={v._id} user={user} setVidDelete={setVidDelete} />
        )

    return(
        <div>
            <h2>this should be a list of all videos the user posted</h2>
            {myVideos}
        </div>
    )
}