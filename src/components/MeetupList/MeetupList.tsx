import MeetupListItem from "./MeetupListItem"
import Meetup from "../../models/Meetup"

type Props = {
    meetupList: Array<Meetup>,
    view: (item:Meetup) => void
}

const MeetupList = ({meetupList, view}:Props) => {
    return (
        <ul className="meetupList">
            {meetupList.map(item => <MeetupListItem key={item.id} meetup={item} view={() => view(item)}/>)}
        </ul>
    )
}

export default MeetupList