import React, { Component } from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

class Button extends Component {
  render() {
    return <button onClick={this.props.onClick}>{this.props.text}</button>;
  }
}
export default Button;
