import { render, screen } from '@testing-library/react';

import MeetupCard from "./MeetupCard"

import {meetupList} from "../../testData"

describe("MeetUpCard", () => {
    it("renders h3 in MeetupCard without errors (smoke test", () => {
      render(<MeetupCard meetup={meetupList[0]}/>)
      const h3 = screen.getByText(/Grillkorvsfest/i);
      expect(h3).toBeInTheDocument();
    })
  })