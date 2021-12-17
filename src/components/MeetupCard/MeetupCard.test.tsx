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
    it("organiser cancel/delete meetup on click", () => {
      const wrapper = mount(<Provider store={store}> <App /> </Provider>)
      const inputs = wrapper.find('[data-test="login-form-input"]')
      const button = wrapper.find('[data-test="login-form-button"]')
      inputs.at(0).simulate('change', { target: { value: 'Anders' } } )
      inputs.at(1).simulate('change', { target: { value: 'bananKorv2' } } )
      button.simulate('click')
      const deleteButton = wrapper.find('[data-test="meetup-delete-button"]')
      deleteButton.simulate('click')
      const listItems = wrapper.find('.meetupList .meetupListItem')
      expect(listItems.length).toBe(4)
    })
  })