import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store'
import { actions } from '../features/search'

type Props = {
    view: () => void
}

const Header = ({view}:Props) => {
    const dispatch = useDispatch()
	const searchText = useSelector((state: RootState) => state.searchString)
    return (
    <header className="App-header">
        <h1>Meetup</h1>
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
    </header>
    )
}

export default Header