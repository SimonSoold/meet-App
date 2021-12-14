//import { render, screen } from '@testing-library/react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux'
import { store } from './store'

import App from './App';

describe("App", () => {
  it("renders h1 in App without errors (smoke test)", () => {
    const wrapper = mount(<Provider store={store}> <App /> </Provider>)
    const h1 = wrapper.find('h1').at(0)
    expect(h1.text()).toBe('Meetup')
  })
  it("navigates to MeetupForm onClick", () => {
    const wrapper = mount(<Provider store={store}> <App /> </Provider>)
    const button = wrapper.find('[data-test="header-create-meetup"]')
    button.simulate('click')
    const formButton = wrapper.find('[data-test="meetup-form-button"]').at(0)
    expect(formButton.text()).toBe('Create Event')
  })
})

