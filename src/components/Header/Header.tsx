import { useSelector } from 'react-redux'
import { RootState } from 'store'
import { actions } from 'features/view'
import { useDispatch } from 'react-redux'

import Login from "./LoginForm"
import HeaderSearch from "./HeaderSearch"

import AppPanel from "models/AppPanel"

const Header = () => {
    const dispatch = useDispatch()
	const user = useSelector((state: RootState) => state.users.user)
    let headerForm = null
    if (user) {
        headerForm = (
        <>
            <HeaderSearch />
            <button
            data-test="header-create-meetup"
            onClick={() => dispatch(actions.view(AppPanel.NEW_MEETUP))}
            >
                create meetup
            </button>
        </>
        )
    } else {
        headerForm = <Login/>
    }
    return (
    <header className="App-header">
        <h1>Meetup</h1>
        <div className="headerForm">
        {
            headerForm
        }
        </div>
    </header>
    )
}

export default Header