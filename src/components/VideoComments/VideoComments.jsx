import VideoCommentItem from "../VideoCommentItem/VideoCommentItem"

export default async function VideoComments({comments}){
    console.log('below is comments in VideoComments.jsx')
    console.log(comments)
    let allComments = await comments.map((c) =>
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