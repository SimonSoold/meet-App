import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store'
import { actions } from '../features/search'

import Login from "./LoginForm"

type Props = {
    view: () => void
}

const Header = ({view}:Props) => {
    const dispatch = useDispatch()
	const searchText = useSelector((state: RootState) => state.searchString)
	const user = useSelector((state: RootState) => state.users.user)
    return (
    <header className="App-header">
        <h1>Meetup</h1>
        {
            user ? 
            (
            <div>
                <label htmlFor=""
                data-test="header-search-filter"
                >
                    Search meetups
                    <input type="text" 
                    value={searchText}
                    onChange={(
                        ev: React.ChangeEvent<HTMLInputElement>,
                      ) => dispatch( actions.changeSearchString(ev.target.value) )}
                    />
                </label>
                <button
                data-test="header-create-meetup"
                onClick={view}
                >
                    create meetup
                </button>
            </div>
            ) :
            (
            <Login/>
            )
        }
    </header>
    )
}

export default Header