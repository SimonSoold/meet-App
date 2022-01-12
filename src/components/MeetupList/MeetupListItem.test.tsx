import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux'
import { store } from 'store'

import MeetupListItem from "./MeetupListItem"

import {meetupList} from "testData"

describe("MeetupListItem", () => {
    it("renders h4 in MeetupListItem without errors (smoke test)", () => {
      render(<Provider store={store}> <MeetupListItem meetup={meetupList[0]} view={() => console.log("view")}/> </Provider>)
      const button = screen.getByText(/Grillkorvsfest/i);
      expect(button).toBeInTheDocument();
    })
  })