import { mount } from 'enzyme';
import Header from "./Header"
//import { mount } from 'enzyme';
import { Provider } from 'react-redux'
import { store } from '../store'

describe("Header", () => {
    it("renders h1 in App without errors (smoke test)", () => {
        const wrapper = mount(<Provider store={store}> <Header view={() => console.log("view")}/> </Provider>);
        const h1 = wrapper.find('h1').at(0)
        expect(h1.text()).toBe('Meetup')
    })
})