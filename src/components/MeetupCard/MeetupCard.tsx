import {useState, useEffect} from "react"
import { useSelector } from 'react-redux'
import { RootState } from 'store'
import { useDispatch } from 'react-redux'
import { actions } from 'features/view'

import CommentForm from "../MeetupComment/CommentForm"
import CommentList from "../MeetupComment/CommentList"
import MeetupPoint from "../MeetupPoint/MeetupPoint"

import AppPanel from "models/AppPanel"


const MeetupCard = () => {
    const dispatch = useDispatch()
    const meetup = useSelector((state: RootState) => state.meetups.list[state.meetups.index])
    const user = useSelector((state: RootState) => state.users.user)
    const [point, setPoint] = useState<number>(0)
    let pointVote = null
    const average = () => {
        let total = 0
        if (meetup.points.length > 0) {
            meetup.points.forEach(point => total += Number(point.point))
            total = total / meetup.points.length
        }
        setPoint(total)
    }
    if (user && user.id !== meetup.organiserId) {
        pointVote = <MeetupPoint id={meetup.id}/>
    } else if (user && user.id === meetup.organiserId) {
        pointVote = (            
        <button
        data-test="meetupCard-edit-meetup"
        onClick={() => dispatch(actions.view(AppPanel.EDIT_MEETUP))}
        >
            edit metup
        </button>)
    }
    useEffect(() => {
        average()
    })
    return (
        <article className="meetupCard">
            <h3>{meetup.name}</h3>
            <p>{meetup.description}</p>
            <p>{meetup.genre}</p>
            <p>{meetup.location}</p>
            <p>{meetup.date}</p>
            <p>{meetup.time}</p>
            <p>{meetup.maxGuests - meetup.guestList.length} seats left</p>
            <p data-test="meetupCard-point">{point}/5 ({meetup.points.length} votes)</p>
            {pointVote}
            <CommentForm id={meetup.id} />
            <CommentList commentList={meetup.comments} />
        </article>
    )
}

export default MeetupCard