import { useState } from "react"
import { useDispatch } from 'react-redux'
import { actions } from 'features/meetups'

import Meetup from "models/Meetup"

const MeetupForm = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [genre, setGenre] = useState<string>("")
    const [location, setLocation] = useState<string>("")
    const [date, setDate] = useState<string>("")
    const [time, setTime] = useState<string>("")
    const [maxGuests, setMaxGuests] = useState<number>(0)
    const newMeetup = () => {
        const meetup: Meetup = {name, description, genre, location, date, time, maxGuests, organiserId: "test", id: "testar", comments: [], points: [], guestList: []}
        // hämta userId from local host
        // skapa id med uid
        dispatch(actions.addMeetup(meetup))
    }
    return (
        <div className="meetupForm">
            <label>
                name
                <input 
                type="text"
                data-test="meetup-form-input"
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
                data-test="meetup-form-input"
                value={description}
                onChange={(
                ev: React.ChangeEvent<HTMLInputElement>,
                ) => setDescription(ev.target.value)}
                />
            </label>
            <label>
                Genre
                <input 
                type="text"
                data-test="meetup-form-input"
                value={genre}
                onChange={(
                ev: React.ChangeEvent<HTMLInputElement>,
                ) => setGenre(ev.target.value)}
                />
            </label>
            <label>
                Location
                <input 
                type="text"
                data-test="meetup-form-input"
                value={location}
                onChange={(
                ev: React.ChangeEvent<HTMLInputElement>,
                ) => setLocation(ev.target.value)}
                />
            </label>
            <label>
                Date
                <input 
                type="date"
                data-test="meetup-form-input"
                value={date}
                onChange={(
                ev: React.ChangeEvent<HTMLInputElement>,
                ) => setDate(ev.target.value)}
                />
            </label>
            <label>
                Time
                <input 
                type="time"
                data-test="meetup-form-input"
                value={time}
                onChange={(
                ev: React.ChangeEvent<HTMLInputElement>,
                ) => setTime(ev.target.value)}
                />
            </label>
            <label>
                Max guests
                <input 
                type="text"
                data-test="meetup-form-input"
                value={maxGuests}
                onChange={(
                ev: React.ChangeEvent<HTMLInputElement>,
                ) => setMaxGuests(Number(ev.target.value))}
                />
            </label>
            <button 
            onClick={newMeetup}
            data-test="meetup-form-button"
            >
                Create Event
            </button>
        </div>
    )
}

export default MeetupForm

