import MeetupListItem from "./MeetupListItem"
import Meetup from "../../models/Meetup"
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

type Props = {
    meetupList: Array<Meetup>,
    view: (item:Meetup) => void
}

const MeetupList = ({meetupList, view}:Props) => {
    const searchString = useSelector((state: RootState) => state.searchString)
	const meetups = useSelector((state: RootState) => state.meetups)
	const filteredData = meetups.filter(meetup => meetup.name.toLowerCase().includes(searchString.toLowerCase()))
    return (
        <ul className="meetupList">
            {filteredData.map(item => <MeetupListItem key={item.id} meetup={item} view={() => view(item)}/>)}
        </ul>
    )
}

export default MeetupList