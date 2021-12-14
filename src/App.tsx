import { useState } from 'react';
import './App.css';
import Header from "./components/Header"

import MeetupCard from "./components/MeetupCard/MeetupCard"
import MeetupForm from "./components/MeetupForm/MeetupForm"
import MeetupList from "./components/MeetupList/MeetupList"

import Meetup from "./models/Meetup"

import {meetupList} from "./testData"

enum AppPanel {
  VIEW_MEETUP = "meetup",
  NEW_MEETUP = "new"
}

function App() {
  const [view, setView] = useState<AppPanel>(AppPanel.VIEW_MEETUP)
  const [meetup, setMeetup] = useState<Meetup>(meetupList[0])
  let main = null
  if (view === AppPanel.VIEW_MEETUP) {
    main = <MeetupCard meetup={meetup}/>
  } 
  else if (view === AppPanel.NEW_MEETUP) {
    main = <MeetupForm newMeetup={(item) => console.log(item)} />
  }
  const viewMeetup = (meetup:Meetup) => {
    setMeetup(meetup)
    setView(AppPanel.VIEW_MEETUP)
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
          <MeetupList meetupList={meetupList} view={(meetup) => viewMeetup(meetup)}/>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
