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
  it("login on Click", () => {
    const wrapper = mount(<Provider store={store}> <App /> </Provider>)
    const inputs = wrapper.find('[data-test="login-form-input"]')
    const button = wrapper.find('[data-test="login-form-button"]')
    inputs.at(0).simulate('change', { target: { value: 'Anders' } } )
    inputs.at(1).simulate('change', { target: { value: 'bananKorv2' } } )
    button.simulate('click')
    const headerButton = wrapper.find('[data-test="header-create-meetup"]')
    expect(headerButton.text()).toBe('create meetup')
  })
  it("navigates to MeetupForm onClick", () => {
    const wrapper = mount(<Provider store={store}> <App /> </Provider>)
    const button = wrapper.find('[data-test="header-create-meetup"]')
    button.simulate('click')
    const formButton = wrapper.find('[data-test="meetup-form-button"]').at(0)
    expect(formButton.text()).toBe('Create Event')
  })
  it("navigates to Meetup and changes index for meetupCard onClick", () => {
    const wrapper = mount(<Provider store={store}> <App /> </Provider>)
    const button = wrapper.find('[data-test="meetup-item-button"]').at(1)
    button.simulate('click')
    const h3 = wrapper.find("h3")
    expect(h3.text()).toBe('Barnkalas')
  })
})

