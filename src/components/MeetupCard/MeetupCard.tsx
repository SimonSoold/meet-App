import { useState, useEffect } from "react"
import { useSelector } from 'react-redux'
import { RootState } from 'store'
import { useDispatch } from 'react-redux'
import { actions } from 'features/view'
import { actions as meetupActions } from "features/meetups"

import CommentForm from "../MeetupComment/CommentForm"
import CommentList from "../MeetupComment/CommentList"
import MeetupPoint from "./MeetupPoint"

import AppPanel from "models/AppPanel"


const MeetupCard = () => {
    const dispatch = useDispatch()
    const meetup = useSelector((state: RootState) => state.meetups.list[state.meetups.index])
    const user = useSelector((state: RootState) => state.users.user)
    const [point, setPoint] = useState<number>(0)
    let pointVote = null
    let commentForm = null
    let attend = null
    let editMeetup = null
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
        editMeetup = null
    } else if (user && user.id === meetup.organiserId) {
        pointVote = null
        editMeetup = (
        <button
        data-test="meetupCard-edit-meetup"
        onClick={() => dispatch(actions.view(AppPanel.EDIT_MEETUP))}
        >
            Edit
        </button>)
    }
    if (user) {
        commentForm = <CommentForm id={meetup.id} />
    } else {
        commentForm = null
    }
    if (user && meetup.guestList.includes(user.id)) {
        attend = <button 
        data-test="unAttend-button"
        onClick={() => dispatch(meetupActions.attendMeetup({userId: user.id, id: meetup.id}))}
        >Unattend</button>
    } else if (user) {
        attend = <button 
        data-test="attend-button"
        onClick={() => dispatch(meetupActions.attendMeetup({userId: user.id, id: meetup.id}))}
        >Attend</button>
    }
    useEffect(() => {
        average()
    })
    return (
        <div className="meetupCard">
            <article>
                <h3>{meetup.name}</h3>
                <p>{meetup.description}</p>
                <p>{meetup.genre}</p>
                <p>{meetup.location}</p>
                <p>{meetup.date}</p>
                <p>{meetup.time}</p>
                <p>{meetup.maxGuests - meetup.guestList.length} seats left</p>
                <p data-test="meetupCard-point">{point}/5 ({meetup.points.length} votes)</p>
            </article>
            <div className="meetupButtons">
                {pointVote}
                {editMeetup}
                {attend}
            </div>
            {commentForm}
            <CommentList commentList={meetup.comments} />
        </div>
    )
}

export default MeetupCard