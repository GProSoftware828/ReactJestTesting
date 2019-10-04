import React, { Component } from 'react';
import { shallow, mount, render } from 'enzyme';
import Button from './button';
import Adapter from 'enzyme-adapter-react-16';

test('renders with text', () => {
  const text = 'text';

  const button = shallow(<Button text={text} />);

  expect(button.type()).toBe('button');
  expect(button.text()).toBe(text);
});

test('fires the onClick callback', () => {
  const onClick = jest.fn();

  const button = shallow(<Button onClick={onClick} />);

  button.simulate('click');
  expect(onClick).toBeCalled();
});
