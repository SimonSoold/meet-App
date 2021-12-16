import { mount } from 'enzyme';
import { Provider } from 'react-redux'
import { store } from '../store'
import Header from "./Header"
import App from "../App"


describe("Header", () => {
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
    it("renders h1 in App without errors (smoke test)", () => {
        const wrapper = mount(<Provider store={store}> <Header view={() => console.log("view")}/> </Provider>);
        const h1 = wrapper.find('h1').at(0)
        expect(h1.text()).toBe('Meetup')
    })
    it("header input filters meetupList", () => {
        const wrapper = mount(<Provider store={store}> <App /> </Provider>)
        const input = wrapper.find('[data-test="header-search-filter"] input')
        input.simulate('change', { target: { value: "Barnkalas" } })
        const listItems = wrapper.find('.meetupList .meetupListItem')
        expect(listItems.length).toBe(1)
    })
})