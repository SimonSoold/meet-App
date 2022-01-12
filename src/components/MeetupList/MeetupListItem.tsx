import { actions } from 'features/view'
import { useDispatch } from 'react-redux'

import AppPanel from "models/AppPanel"

import Meetup from "models/Meetup"

type Props = {
    meetup: Meetup
    view: () => void
}

const MeetupListItem = ({meetup, view}:Props) => {
    const dispatch = useDispatch()
    const viewItem = () => {
        view()
        dispatch(actions.view(AppPanel.VIEW_MEETUP))
    }
    return (
        <li className="meetupListItem">
            <button 
            data-test="meetup-item-button"
            onClick={viewItem}
            >
            {meetup.name}
            </button>
            <p>{meetup.date}</p>
            <p>{meetup.time}</p>
        </li>
    )
}

export default MeetupListItem