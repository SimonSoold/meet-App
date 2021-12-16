import { render, screen } from '@testing-library/react'
import { mount } from 'enzyme';
import { Provider } from 'react-redux'
import { store } from '../../store'

import CommentForm from "./CommentForm"
import App from "../../App"

import {meetupList} from "../../testData"

describe("MeetupForm", () => {
    it("renders MeetupForm without errors (smoke test)", () => {
      render(<Provider store={store}> <CommentForm id={meetupList[0].name}/> </Provider>)
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
  })
  