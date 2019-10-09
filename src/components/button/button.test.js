import React from 'react';
import { shallow } from 'enzyme';
import { FindByTestAttr, checkProps } from '../../../Utils';
import SharedButton from './index';

describe('SharedButton Component', () => {
  describe('Checking PropTypes', () => {
    it('Should Not throw a warning', () => {
      const expectedProps = {
        buttonText: 'Example button text',
        emitEvent: () => {}
      };
      const propsError = checkProps(SharedButton, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe('Renders', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        buttonText: 'Example button text',
        emitEvent: () => {}
      };
      wrapper = shallow(<SharedButton {...props} />);
    });

    it('Should render a button', () => {
      const button = FindByTestAttr(wrapper, 'buttonComponent');
      expect(button.length).toBe(1);
    });
  });
});
