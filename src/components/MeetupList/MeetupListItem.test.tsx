import { render, screen } from '@testing-library/react';

import MeetupListItem from "./MeetupListItem"

import {meetupList} from "../../testData"

describe("MeetUpCard", () => {
    it("renders h4 in MeetupListItem without errors (smoke test", () => {
      render(<MeetupListItem meetup={meetupList[0]} view={() => console.log("view")}/>)
      const h4 = screen.getByText(/Grillkorvsfest/i);
      expect(h4).toBeInTheDocument();
    })
  })