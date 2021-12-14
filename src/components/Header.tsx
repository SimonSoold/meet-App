
type Props = {
    view: () => void
}

const Header = ({view}:Props) => {
    return (
    <header className="App-header">
        <h1>Meetup</h1>
        <div>
            <label htmlFor=""
            data-test="header-search-filter"
            >
                Search meetups
                <input type="text" 
                
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