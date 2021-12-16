import { mount } from 'enzyme';
import { Provider } from 'react-redux'
import { store } from '../../store'

import MeetupCard from "./MeetupCard"

describe("MeetUpPoint", () => {
    it("changes point on click", () => {
      const wrapper = mount(<Provider store={store}> <MeetupCard /> </Provider>)
      const button = wrapper.find('[data-test="meetup-vote-point-button"]')
      const pointButton = wrapper.find(".pointButtons button").at(1)
      pointButton.simulate("click")
      button.simulate("click")
      const pointParagraph = wrapper.find('[data-test="meetupCard-point"]')
      expect(pointParagraph.text()).toBe("3/5 (3 votes)")
    })
  })