import React from 'react';
import App from '../App';

import  { shallow } from "enzyme";

describe('Render App component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App/>);
  });

  it('renders the main title', () => {
    expect(wrapper.find('#main-title').text()).toBe("CRUD React")
  });
});