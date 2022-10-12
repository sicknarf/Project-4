import VideoDetail from "../VideoDetail/VideoDetail";

export default function NoEditorVideoItem({video}){
    return(
        <div>
            <h2>individual video</h2>
            <VideoDetail video={video} />
        </div>
    )
}