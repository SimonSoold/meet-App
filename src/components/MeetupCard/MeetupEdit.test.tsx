import { render, screen } from '@testing-library/react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux'
import { store } from 'store'

import MeetupEdit from "./MeetupEdit"
import App from "App"

describe("MeetupEdit", () => {
    it("renders h3 in MeetupEdit without errors (smoke test", () => {
      render(<Provider store={store}> <MeetupEdit /> </Provider>)
      const deleteButton = screen.getByText(/Delete meetup/i);
      expect(deleteButton).toBeInTheDocument();
    })
    it("organiser edits meetup on click", () => {
      const wrapper = mount(<Provider store={store}> <App /> </Provider>)
      const inputs = wrapper.find('[data-test="login-form-input"]')
      const button = wrapper.find('[data-test="login-form-button"]')
      inputs.at(0).simulate('change', { target: { value: 'Anders' } } )
      inputs.at(1).simulate('change', { target: { value: 'bananKorv2' } } )
      button.simulate('click')
      const navigateButton = wrapper.find('[data-test="meetupCard-edit-meetup"]')
      navigateButton.simulate('click')

      const editInputs = wrapper.find('[data-test="meetup-edit-input"]')
      const editButton = wrapper.find('[data-test="meetup-edit-button"]')
      editInputs.at(0).simulate('change', { target: { value: 'Gratis grillkorv' } } )
      editInputs.at(1).simulate('change', { target: { value: 'Grattis korv till gänget' } } )
      editInputs.at(2).simulate('change', { target: { value: 'Mat' } } )
      editInputs.at(3).simulate('change', { target: { value: 'Köpenhamn' } } )
      editInputs.at(4).simulate('change', { target: { value: '2022-01-20' } } )
      editInputs.at(5).simulate('change', { target: { value: '18:00' } } )
      editInputs.at(6).simulate('change', { target: { value: 2 } } )
      editButton.simulate('click')
      const listItemButton = wrapper.find('.meetupList .meetupListItem button').at(0)
      expect(listItemButton.text()).toBe("Gratis grillkorv")
    })
    it("organiser cancel/delete meetup on click", () => {
      const wrapper = mount(<Provider store={store}> <App /> </Provider>)

      const navigateButton = wrapper.find('[data-test="meetupCard-edit-meetup"]')
      navigateButton.simulate('click')
      const deleteButton = wrapper.find('[data-test="meetup-delete-button"]')
      deleteButton.simulate('click')
      const listItems = wrapper.find('.meetupList .meetupListItem')
      expect(listItems.length).toBe(4)
    })
  })