import Meetup from "../../models/Meetup"


type Props = {
    meetup: Meetup
    view: () => void
}

const MeetupListItem = ({meetup, view}:Props) => {
    return (
        <li className="meetupListItem">
            <h4>{meetup.name}</h4>
            <p>{meetup.date}</p>
            <p>{meetup.time}</p>
            <button 
            data-test="meetup-item-button"
            onClick={view}
            >read more
            </button>
        </li>
    )
}

export default MeetupListItem