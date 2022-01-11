import {useState} from "react"
import { useSelector } from 'react-redux'
import { RootState } from 'store'
import { useDispatch } from 'react-redux'
import { actions } from 'features/meetups'
import { actions as viewActions } from 'features/view'
import Meetup from "models/Meetup"
import AppPanel from "models/AppPanel"

const MeetupEdit = () => {
    const meetup = useSelector((state: RootState) => state.meetups.list[state.meetups.index])
    const [name, setName] = useState<string>(meetup.name)
    const [description, setDescription] = useState<string>(meetup.description)
    const [genre, setGenre] = useState<string>(meetup.genre)
    const [location, setLocation] = useState<string>(meetup.location)
    const [date, setDate] = useState<string>(meetup.date)
    const [time, setTime] = useState<string>(meetup.time)
    const [maxGuests, setMaxGuests] = useState<number>(meetup.maxGuests)
    const dispatch = useDispatch()
    const deleteMeetup = () => {
        dispatch(actions.deleteMeetup(meetup))
        dispatch(viewActions.view(AppPanel.VIEW_MEETUP))
    }
    const editMeetup = () => {
        const editedMeetup: Meetup = {name, description, genre, location, date, time, maxGuests, organiserId: meetup.organiserId, id: meetup.id, comments: meetup.comments, points: meetup.points, guestList: meetup.guestList}
        // hämta userId from local host
        // skapa id med uid
        dispatch(actions.editMeetup(editedMeetup))
        dispatch(viewActions.view(AppPanel.VIEW_MEETUP))
    }
    return (
        <div className="meetupEdit">
            <label>
                name
                <input 
                type="text"
                data-test="meetup-edit-input"
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
                data-test="meetup-edit-input"
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
                data-test="meetup-edit-input"
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
                data-test="meetup-edit-input"
                value={location}
                onChange={(
                ev: React.ChangeEvent<HTMLInputElement>,
                ) => setLocation(ev.target.value)}
                />
            </label>
            <label>
                Date
                <input 
                type="text"
                data-test="meetup-edit-input"
                value={date}
                onChange={(
                ev: React.ChangeEvent<HTMLInputElement>,
                ) => setDate(ev.target.value)}
                />
            </label>
            <label>
                Time
                <input 
                type="text"
                data-test="meetup-edit-input"
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
                data-test="meetup-edit-input"
                value={maxGuests}
                onChange={(
                ev: React.ChangeEvent<HTMLInputElement>,
                ) => setMaxGuests(Number(ev.target.value))}
                />
            </label>
            <button 
            onClick={editMeetup}
            data-test="meetup-edit-button"
            >
                Edit meetup
            </button>
            <button data-test="meetup-delete-button" onClick={deleteMeetup}>Delete meetup</button>
        </div>
    )
}

export default MeetupEdit