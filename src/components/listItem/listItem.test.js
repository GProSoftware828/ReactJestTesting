import React from 'react';
import { shallow } from 'enzyme';
import { FindByTestAttr, checkProps } from '../../../Utils';
import ListItem from './index';
import { findNodeModule } from 'jest-resolve';

describe('ListItem Component', () => {
  describe('Checking PropTypes', () => {
    it('Should Not throw a warning', () => {
      const expectedProps = {
        title: 'Example title',
        desc: 'Example desc'
      };
      const propsError = checkProps(ListItem, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe('Component Renders', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        title: 'Example title',
        desc: 'Example desc'
      };
      wrapper = shallow(<ListItem {...props} />);
    });

    it('Should renders without error', () => {
      const component = FindByTestAttr(wrapper, 'listItemComponent');
      expect(component.length).toBe(1);
    });

    it('Should render a title', () => {
      const title = FindByTestAttr(wrapper, 'componentTitle');
      expect(title.length).toBe(1);
    });

    it('Should render a desc', () => {
      const desc = FindByTestAttr(wrapper, 'componentDesc');
      expect(desc.length).toBe(1);
    });
  });

  describe('Should Not render', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        desc: 'Some text'
      };
      wrapper = shallow(<ListItem {...props} />);
    });

    it('Component is not rendered', () => {
      const component = FindByTestAttr(wrapper, 'listItemComponent');
      expect(component.length).toBe(0);
    });
  });
});
