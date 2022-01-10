import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux'
import { store } from 'store'

import MeetupList from "./MeetupList"

describe("MeetUpList", () => {
    it("renders h3 in MeetupCard in MeetUpList without errors (smoke test)", () => {
      render(<Provider store={store}> <MeetupList /> </Provider>)
      const h3 = screen.getByText(/Grillkorvsfest/i);
      expect(h3).toBeInTheDocument();
    })
  })
  