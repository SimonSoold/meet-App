import 'App.css';
import { useSelector } from 'react-redux'
import { RootState } from 'store'

import Header from "components/Header/Header"
import MeetupCard from "components/MeetupCard/MeetupCard"
import MeetupForm from "components/MeetupCard/MeetupForm"
import MeetupList from "components/MeetupList/MeetupList"
import MeetupEdit from "components/MeetupCard/MeetupEdit"

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
  else if (view === AppPanel.EDIT_MEETUP) {
    main = <MeetupEdit />
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
    </div>
  );
}

export default App;
