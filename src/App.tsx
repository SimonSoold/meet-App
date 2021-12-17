import 'App.css';
import { useSelector } from 'react-redux'
import { RootState } from 'store'

import Header from "components/Header/Header"
import MeetupCard from "components/MeetupCard/MeetupCard"
import MeetupForm from "components/MeetupForm/MeetupForm"
import MeetupList from "components/MeetupList/MeetupList"

import AppPanel from 'models/AppPanel';

function App() {
  const view = useSelector((state: RootState) => state.view.current)
  let main = null
  if (view === AppPanel.VIEW_MEETUP) {
    main = <MeetupCard />
  } 
  else if (view === AppPanel.NEW_MEETUP) {
    main = <MeetupForm />
  }
  return (
    <div className="App">
      <Header />
      <main>
        <div className="meetupContainer">
          {
            main
          }
        </div>
        <MeetupList />
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
