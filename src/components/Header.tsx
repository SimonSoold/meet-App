
const Header = () => {
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
            >
                create meetup
            </button>
        </div>
    </header>
    )
}

export default Header