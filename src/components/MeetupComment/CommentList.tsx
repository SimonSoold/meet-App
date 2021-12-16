import CommentItem from "./CommentItem"
import Comment from "../../models/Comment"
import {useEffect} from "react"

type Props = {
    commentList: Array<Comment>
}

const CommentList = ({commentList}: Props) => {
    useEffect(() => {
    });
    return (
        <ul className="commentList">
            {
                commentList.map((item, index) => <CommentItem key={index} comment={item}/>)
            }
        </ul>
    )
}

export default CommentList