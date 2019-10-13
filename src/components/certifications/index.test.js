import React from 'react';
import { shallow } from 'enzyme';
import { FindByTestAttr } from '../../../Utils';
import Certifications from '../certifications';

const setUp = (props = {}) => {
  const component = shallow(<Certifications {...props} />);
  return component;
};

describe('Certifications component', () => {
  describe('Initial test render', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });
    it('Should render', () => {
      const component = FindByTestAttr(wrapper, 'CertificationsElement');
      expect(component.length).toBe(1);
    });
  });
});
