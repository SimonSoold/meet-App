import {useState, useEffect} from "react"

import CommentForm from "../MeetupComment/CommentForm"
import CommentList from "../MeetupComment/CommentList"
import MeetupPoint from "./MeetupPoint"

import { useSelector } from 'react-redux'
import { RootState } from '../../store'

const MeetupCard = () => {
    const meetup = useSelector((state: RootState) => state.meetups.list[state.meetups.index])
    const [point, setPoint] = useState<number>(0)
    const average = () => {
        let total = 0
        if (meetup.points.length > 0) {
            meetup.points.forEach(point => total += Number(point.point))
            total = total / meetup.points.length
        }
        setPoint(total)
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
            <MeetupPoint id={meetup.id}/>
            <CommentForm id={meetup.id} />
            <CommentList commentList={meetup.comments} />
        </article>
    )
}

export default MeetupCard