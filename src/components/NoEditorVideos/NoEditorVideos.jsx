import VideoDetail from "../VideoDetail/VideoDetail"

export default function NoEditorVideos({videos, user, setVideos, setGigAssign}){
    const noEditorVideoItem = videos.map(v => 
        <VideoDetail 
            video={v} 
            key={v._id} 
            user={user} 
            setVideos={setVideos} 
            setGigAssign={setGigAssign}
            />
        )
    return(
        <div>
            {noEditorVideoItem}
        </div>
    )
}