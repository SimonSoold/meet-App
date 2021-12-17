import { useSelector } from 'react-redux'
import { RootState } from 'store'
import { useDispatch } from 'react-redux'
import { actions } from 'features/meetups'

import MeetupListItem from "./MeetupListItem"

const MeetupList = () => {
    const dispatch = useDispatch()
    const searchString = useSelector((state: RootState) => state.searchString)
	const meetups = useSelector((state: RootState) => state.meetups.list)
	const filteredData = meetups.filter(meetup => meetup.name.toLowerCase().includes(searchString.toLowerCase()))
    return (
        <ul className="meetupList">
            {filteredData.map((item, index) => <MeetupListItem key={item.id} meetup={item} view={() => dispatch(actions.changeIndex(index))}/>)}
        </ul>
    )
}

export default MeetupList