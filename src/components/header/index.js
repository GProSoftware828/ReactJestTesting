import React from 'react';
import './styles.scss';

const Header = props => {
  return (
    <header data-test="headerComponent" className="intro">
      <h1>React Application with Random People API Data:</h1>
      <p>
        My name is <span className="title-name">George Payne</span>. How's it
        going, guys?
      </p>
      <p>
        Scroll down to see my course certifications in descending order of date
        completed. Always learning- some courses I didn't complete to do the
        important stuff.
      </p>
      <p>
        Visitor, ask yourself. Would this person have all these
        certifications???
      </p>
    </header>
  );
};

export default Header;
