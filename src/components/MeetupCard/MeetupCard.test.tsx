import { render, screen } from '@testing-library/react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux'
import { store } from 'store'

import MeetupCard from "./MeetupCard"
import App from "App"

describe("MeetUpCard", () => {
    it("renders h3 in MeetupCard without errors (smoke test", () => {
      render(<Provider store={store}> <MeetupCard /> </Provider>)
      const h3 = screen.getByText(/Grillkorvsfest/i);
      expect(h3).toBeInTheDocument();
    })
})