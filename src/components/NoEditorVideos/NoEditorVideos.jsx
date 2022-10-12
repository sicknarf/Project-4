import NoEditorVideoItem from "../NoEditorVideoItem/NoEditorVideoItem"
import VideoDetail from "../VideoDetail/VideoDetail"

export default function NoEditorVideos({videos, user}){
    const noEditorVideoItem = videos.map(v => 
        <VideoDetail video={v} key={v._id} user={user}/>
        )
    return(
        <div>
            <h1>hello, this should be a list of videos</h1>
            {noEditorVideoItem}
        </div>
    )
}