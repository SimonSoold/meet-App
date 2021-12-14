import Comment from "./Comment"
import Point from "./Point"

interface Meetup {
    name: string
    description: string
    genre: string
    location: string
    date: string
    time: string
    maxGuests: number
    organiserId: string
    comments: Array<Comment>
    points: Array<Point>
    guestList: Array<string>
    id: string
}

export default Meetup