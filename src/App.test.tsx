//import { render, screen } from '@testing-library/react';
import { mount } from 'enzyme';

import App from './App';

describe("App", () => {
  it("renders h1 in App without errors (smoke test)", () => {
    const wrapper = mount(<App />);
    const h1 = wrapper.find('h1').at(0)
    expect(h1.text()).toBe('Meetup')
  })
})