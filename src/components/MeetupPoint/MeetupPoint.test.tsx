import { mount } from 'enzyme';
import { Provider } from 'react-redux'
import { store } from 'store'

import App from "App"

describe("MeetUpPoint", () => {
    it("changes point on click", () => {
      const wrapper = mount(<Provider store={store}> <App /> </Provider>)
      const inputs = wrapper.find('[data-test="login-form-input"]')
      const button = wrapper.find('[data-test="login-form-button"]')
      inputs.at(0).simulate('change', { target: { value: 'Göran' } } )
      inputs.at(1).simulate('change', { target: { value: 'bananKorv2' } } )
      button.simulate('click')
      const voteButton = wrapper.find('[data-test="meetup-vote-point-button"]')
      const pointButton = wrapper.find(".pointButtons button").at(1)
      pointButton.simulate("click")
      voteButton.simulate("click")
      const pointParagraph = wrapper.find('[data-test="meetupCard-point"]')
      expect(pointParagraph.text()).toBe("3/5 (3 votes)")
    })
  })