import { useState, useEffect } from 'react';
import './App.css';
import Header from "./components/Header"

import MeetupCard from "./components/MeetupCard/MeetupCard"
import MeetupForm from "./components/MeetupForm/MeetupForm"
import MeetupList from "./components/MeetupList/MeetupList"

enum AppPanel {
  VIEW_MEETUP = "meetup",
  NEW_MEETUP = "new"
}

function App() {
  const [view, setView] = useState<AppPanel>(AppPanel.VIEW_MEETUP)
  let main = null
  if (view === AppPanel.VIEW_MEETUP) {
    main = <MeetupCard />
  } 
  else if (view === AppPanel.NEW_MEETUP) {
    main = <MeetupForm />
  }
  return (
    <div className="App">
      <Header view={() => setView(AppPanel.NEW_MEETUP)} />
      <main>
        <div className="meetupContainer">
          {
            main
          }
        </div>
        <MeetupList view={() => setView(AppPanel.VIEW_MEETUP)}/>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
