import { render, screen } from '@testing-library/react'
import { mount } from 'enzyme';
import { Provider } from 'react-redux'
import { store } from 'store'

import CommentForm from "./CommentForm"
import App from "App"

import {meetupList} from "testData"

describe("MeetupForm", () => {
    it("renders MeetupForm without errors (smoke test)", () => {
      render(<Provider store={store}> <CommentForm id={meetupList[0].name}/> </Provider>)
      const button = screen.getByText(/Comment/i);
      expect(button).toBeInTheDocument();
    })
    it("creates new comment on click", () => {
      const wrapper = mount(<Provider store={store}> <App /> </Provider>)
      const inputs = wrapper.find('[data-test="comment-form-input"]')
      const formButton = wrapper.find('[data-test="comment-form-button"]')
  
      inputs.at(0).simulate('change', { target: { value: 'Grillkorvs fest' } } )
      inputs.at(1).simulate('change', { target: { value: 'Grattis korv till gänget' } } )
      formButton.simulate('click')
      const listItems = wrapper.find('.commentList .commentItem')
      expect(listItems.length).toBe(3)
    })
    it("creates new comment with authorComment class if auhtor", () => {
      const wrapper = mount(<Provider store={store}> <App /> </Provider>)
      let inputs = wrapper.find('[data-test="login-form-input"]')
      const button = wrapper.find('[data-test="login-form-button"]')
      inputs.at(0).simulate('change', { target: { value: 'Anders' } } )
      inputs.at(1).simulate('change', { target: { value: 'bananKorv2' } } )
      button.simulate('click')

      inputs = wrapper.find('[data-test="comment-form-input"]')
      const formButton = wrapper.find('[data-test="comment-form-button"]')

      inputs.at(0).simulate('change', { target: { value: 'Grillkorvs fest' } } )
      inputs.at(1).simulate('change', { target: { value: 'Grattis korv till gänget' } } )
      formButton.simulate('click')
      const listItems = wrapper.find('.commentList .commentItem')
      expect(listItems.at(listItems.length-1).hasClass("authorComment")).toBe(true)
      wrapper.unmount()
    })
    it("creates new comment with yourComment class", () => {
      const wrapper = mount(<Provider store={store}> <App /> </Provider>)
      let button = wrapper.find('[data-test="meetup-item-button"]')
      button.at(2).simulate('click')

      const inputs = wrapper.find('[data-test="comment-form-input"]')
      const formButton = wrapper.find('[data-test="comment-form-button"]')

      inputs.at(0).simulate('change', { target: { value: 'Grillkorvs fest' } } )
      inputs.at(1).simulate('change', { target: { value: 'Grattis korv till gänget' } } )
      formButton.simulate('click')
      const listItems = wrapper.find('.commentList .commentItem')
      expect(listItems.at(0).hasClass("yourComment")).toBe(true)
    })
  })
  