import React from 'react';
import About from './About';

test('render the app', () => {
  const wrapper = shallow(<About />);

  const aboutComponent = findByTestAttr(wrapper, 'component-about');

  expect(aboutComponent.length).toBe(1);
});
