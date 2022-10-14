import VideoCommentItem from "../VideoCommentItem/VideoCommentItem"

export default function VideoComments({comments}){
    let allComments = comments.map((c) =>
        <VideoCommentItem 
            text={c.comment}
            commenter={c.user}/>
    )
    console.log('this is comments')
    console.log(comments)

    return (
    <div>
        {allComments}
    </div>
    )
}