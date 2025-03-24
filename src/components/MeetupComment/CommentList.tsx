import CommentItem from "./CommentItem"

import Comment from "models/comment"

type Props = {
    commentList: Array<Comment>
}

const CommentList = ({commentList}: Props) => {
    return (
        <ul className="commentList">
            {
                commentList.map((item, index) => <CommentItem key={index} comment={item}/>)
            }
        </ul>
    )
}

export default CommentList