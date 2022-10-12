import { useState } from "react";
import * as videosAPI from '../../utilities/videos-api'
import VideoDetail from "../VideoDetail/VideoDetail";

export default function VideoList({videos}){

    const myVideos = videos.map(v => 
        <VideoDetail video={v} key={v._id} />
        )

    return(
        <div>
            <h2>this should be a list of all videos the user posted</h2>
            {myVideos}
        </div>
    )
}