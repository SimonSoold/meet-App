import {useState} from "react"
import Comment from "../../models/Comment"
import { useDispatch } from 'react-redux'
import { actions } from '../../features/meetups'

type Props = {
    id: string
}

const CommentForm = (props: Props) => {
    const dispatch = useDispatch()
    const [name, setName] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const newComment = () => {
        const comment: Comment = {name, description, userId: "test"}
        dispatch(actions.addComment({id: props.id, comment}))
        setName("")
        setDescription("")
    }
    return (
        <div className="commentForm">
            <label>
                name
                <input 
                type="text"
                data-test="comment-form-input"
                value={name}
                onChange={(
                ev: React.ChangeEvent<HTMLInputElement>,
                ) => setName(ev.target.value)}
                />
            </label>
            <label>
                Description
                <input 
                type="text"
                data-test="comment-form-input"
                value={description}
                onChange={(
                ev: React.ChangeEvent<HTMLInputElement>,
                ) => setDescription(ev.target.value)}
                />
            </label>
            <button 
            type="submit"
            onClick={newComment}
            data-test="comment-form-button"
            >
                Comment
            </button>
        </div>
    )
}

export default CommentForm