import { useDispatch } from 'react-redux'
import { actions } from 'features/meetups'
import { useState } from 'react'

type Props = {
    id: string
}

const MeetupPoint = ({id}: Props) => {
    const dispatch = useDispatch()
    const [point, setPoint] = useState<number>(0)
    const checkClass = (number:number) => {
        if (number <= point) return "red"
    }
    const numbers = [1,2,3,4,5]
    return (
        <div className="pointContainer">
            <button 
            data-test="meetup-vote-point-button"
            onClick={() => dispatch(actions.addPoint({id, point:{point, userId: "test2"}}))}
            >
                vote
            </button>
            <div className="pointButtons">
                {
                    numbers.map(number => <button key={number} className={checkClass(number)} onClick={() => setPoint(number)}></button>)
                }
            </div>
        </div>
    )
}

export default MeetupPoint