import { render, screen } from '@testing-library/react';
import { mount } from 'enzyme';

import MeetupForm from "./MeetupForm"

describe("MeetupForm", () => {
    it("renders MeetupForm without errors (smoke test)", () => {
      render(<MeetupForm newMeetup={(item) => console.log(item)} />)
    })
    it("returns a new meetup object on click", () => {
      let testObject = {}
      const wrapper = mount(<MeetupForm newMeetup={(item) => testObject = item} />)
      const inputs = wrapper.find('[data-test="meetup-form-input"]')
      const button = wrapper.find('[data-test="meetup-form-button"]')
  
      inputs.at(0).simulate('change', { target: { value: 'Grillkorvs fest' } } )
      inputs.at(1).simulate('change', { target: { value: 'Grattis korv till gänget' } } )
      inputs.at(2).simulate('change', { target: { value: 'Mat' } } )
      inputs.at(3).simulate('change', { target: { value: 'Köpenhamn' } } )
      inputs.at(4).simulate('change', { target: { value: '24 februari' } } )
      inputs.at(5).simulate('change', { target: { value: '18:00' } } )
      inputs.at(6).simulate('change', { target: { value: 2 } } )
      button.simulate('click')
      const keys = Object.keys(testObject)
      expect(keys[0]).toBe('name')
      expect(keys[8]).toBe('id')
    })
  })
  