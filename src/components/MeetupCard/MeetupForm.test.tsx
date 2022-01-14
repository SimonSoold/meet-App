import { render, screen } from '@testing-library/react'
import { mount } from 'enzyme';
import { Provider } from 'react-redux'
import { store } from 'store'

import MeetupForm from "./MeetupForm"
import App from "App"

describe("MeetupForm", () => {
    it("renders MeetupForm without errors (smoke test)", () => {
      render(<Provider store={store}> <MeetupForm /> </Provider>)
      const button = screen.getByText(/Create Event/i);
      expect(button).toBeInTheDocument();
    })
    it("login on Click", () => {
      const wrapper = mount(<Provider store={store}> <App /> </Provider>)
      const inputs = wrapper.find('[data-test="login-form-input"]')
      const button = wrapper.find('[data-test="login-form-button"]')
      inputs.at(0).simulate('change', { target: { value: 'Anders' } } )
      inputs.at(1).simulate('change', { target: { value: 'bananKorv2' } } )
      button.simulate('click')
      const headerButton = wrapper.find('[data-test="header-create-meetup"]')
      expect(headerButton.text()).toBe('Create meetup')
    })
    it("creates new meetup on click", () => {
      const wrapper = mount(<Provider store={store}> <App /> </Provider>)
      const navigateButton = wrapper.find('[data-test="header-create-meetup"]')
      navigateButton.simulate('click')
      const inputs = wrapper.find('[data-test="meetup-form-input"]')
      const formButton = wrapper.find('[data-test="meetup-form-button"]')
  
      inputs.at(0).simulate('change', { target: { value: 'Grillkorvs fest' } } )
      inputs.at(1).simulate('change', { target: { value: 'Grattis korv till gänget' } } )
      inputs.at(2).simulate('change', { target: { value: 'Mat' } } )
      inputs.at(3).simulate('change', { target: { value: 'Köpenhamn' } } )
      inputs.at(4).simulate('change', { target: { value: '2022-09-07' } } )
      inputs.at(5).simulate('change', { target: { value: '18:00' } } )
      inputs.at(6).simulate('change', { target: { value: 2 } } )
      formButton.simulate('click')
      const listItems = wrapper.find('.meetupList .meetupListItem')
      expect(listItems.length).toBe(6)
    })
  })
  