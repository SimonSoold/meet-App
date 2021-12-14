import { mount } from 'enzyme';
import Header from "./Header"
//import { mount } from 'enzyme';

describe("Header", () => {
    it("renders h1 in App without errors (smoke test)", () => {
        const wrapper = mount(<Header />);
        const h1 = wrapper.find('h1').at(0)
        expect(h1.text()).toBe('Meetup')
    })
})