import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index';
import { FindByTestAttr, checkProps } from '../../../Utils';
import checkPropTypes from 'check-prop-types';

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe('Headline Component', () => {
  describe('Nested', () => {
    describe('Checking PropTypes', () => {
      it('Should not throw a warning from Check PropTypes', () => {
        const expectedProps = {
          header: 'Test Header',
          desc: 'Test Desc',
          tempArr: [
            {
              fName: 'Test fName',
              lName: false,
              email: 'test@email.com',
              location: 'CentralStation',
              onlineStatus: false
            }
          ]
        };
        const propsErr = checkProps(Headline, expectedProps);
        expect(propsErr).toBeUndefined();
      });
    });

    describe('Have props', () => {
      let wrapper;
      beforeEach(() => {
        const props = {
          header: 'Testing header as a prop',
          desc: 'Testing description as a prop'
        };
        wrapper = setUp(props);
      });
      it('Should render withouterrors', () => {
        const component = FindByTestAttr(wrapper, 'HeadlineComponent');
        expect(component.length).toBe(1);
      });
      it('Should render a H1', () => {
        const h1 = FindByTestAttr(wrapper, 'header');
        expect(h1.length).toBe(1);
      });
      it('Should render a Desc', () => {
        const desc = FindByTestAttr(wrapper, 'desc');
        expect(desc.length).toBe(1);
      });
    });
    describe('Have NO props', () => {
      let wrapper;
      beforeEach(() => {
        wrapper = setUp();
      });
      it('Should not render', () => {
        const component = FindByTestAttr(wrapper, 'HeadlineComponent');
        expect(component.length).toBe(0);
      });
    });
  });
});
it('Placeholder', () => {});
