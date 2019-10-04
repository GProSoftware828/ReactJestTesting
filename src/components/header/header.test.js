import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';
import { FindByTestAttr } from '../../../Utils';

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe('Header Component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  describe('Nested', () => {
    it('Should render without errors', () => {
      console.log(component.debug());
      const wrapper = FindByTestAttr(component, 'headerComponent');
      expect(wrapper.length).toBe(1);
    });

    it('Should render title styling', () => {
      console.log(component.debug());
      const wrapper = component.find('.title-name');
      expect(wrapper.length).toBe(1);
    });
  });
});
