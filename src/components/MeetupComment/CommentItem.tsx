import { useSelector } from 'react-redux'
import { RootState } from 'store'

import Comment from "models/comment"

type Props = {
    comment: Comment 
}

const CommentItem = ({comment}:Props) => {
    const user = useSelector((state: RootState) => state.users.user)
    const meetup = useSelector((state: RootState) => state.meetups.list[state.meetups.index])
    const checkAuthor = () => {
        if (comment.userId === meetup.organiserId) {
            return " authorComment"
        } else if (user && comment.userId === user.id) {
            return " yourComment"
        } else {
            return " userComment"
        }
    }
    return (
        <li className={"commentItem" + checkAuthor()}>
            <h5>{comment.name}</h5>
            <p>{comment.description}</p>
        </li>
    )
}

export default CommentItem