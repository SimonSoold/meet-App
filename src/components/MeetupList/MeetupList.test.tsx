import { render, screen } from '@testing-library/react';
//import { mount } from 'enzyme';

import MeetupList from "./MeetupList"
import {meetupList} from "../../testData"
import { Provider } from 'react-redux'
import { store } from '../../store'

describe("MeetUpList", () => {
    it("renders h3 in MeetupCard in MeetUpList without errors (smoke test)", () => {
      render(<Provider store={store}> <MeetupList meetupList={meetupList} view={(item) => console.log(item)}/> </Provider>)
      const h3 = screen.getByText(/Grillkorvsfest/i);
      expect(h3).toBeInTheDocument();
    })
  })
  