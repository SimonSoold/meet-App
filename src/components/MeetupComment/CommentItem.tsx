import Comment from "../../models/Comment"

type Props = {
    comment: Comment 
}

const CommentItem = ({comment}:Props) => {
    return (
        <li className="commentItem">
            <h5>{comment.name}</h5>
            <p>{comment.description}</p>
        </li>
    )
}

export default CommentItem