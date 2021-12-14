import {useState, useEffect} from "react"

import Meetup from "../../models/Meetup"

type Props = {
    meetup: Meetup
}

const MeetupCard = ({meetup}:Props) => {
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
    });
    return (
        <article className="meetupCard">
            <h3>{meetup.name}</h3>
            <p>{meetup.description}</p>
            <p>{meetup.genre}</p>
            <p>{meetup.location}</p>
            <p>{meetup.date}</p>
            <p>{meetup.time}</p>
            <p>{meetup.maxGuests}</p>
            <p>{point}</p>
        </article>
    )
}

export default MeetupCard