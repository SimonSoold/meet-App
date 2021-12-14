import { render, screen } from '@testing-library/react';
//import { mount } from 'enzyme';

import MeetupList from "./MeetupList"
import {meetupList} from "../../testData"

describe("MeetUpList", () => {
    it("renders h3 in MeetupCard in MeetUpList without errors (smoke test)", () => {
      render(<MeetupList meetupList={meetupList} view={(item) => console.log(item)}/>)
      const h3 = screen.getByText(/Grillkorvsfest/i);
      expect(h3).toBeInTheDocument();
    })
  })
  