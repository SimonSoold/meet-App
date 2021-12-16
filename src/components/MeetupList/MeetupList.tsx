import MeetupListItem from "./MeetupListItem"
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

import { useDispatch } from 'react-redux'
import { actions } from '../../features/meetups'

type Props = {
    view: () => void
}

const MeetupList = ({view}:Props) => {
    const dispatch = useDispatch()

    const searchString = useSelector((state: RootState) => state.searchString)
	const meetups = useSelector((state: RootState) => state.meetups.list)
	const filteredData = meetups.filter(meetup => meetup.name.toLowerCase().includes(searchString.toLowerCase()))
    const viewItem = (index:number) => {
        dispatch(actions.changeIndex(index))
        view()
    }
    return (
        <ul className="meetupList">
            {filteredData.map((item, index) => <MeetupListItem key={item.id} meetup={item} view={() => viewItem(index)}/>)}
        </ul>
    )
}

export default MeetupList