import React from 'react';
import './app.scss';
import Header from './components/header';
import Headline from './components/headline';
import Randoms from './components/randomPerson';
import SharedButton from './components/button';
import Certifications from './components/certifications';
import './app.scss';

const tempArr = [
  {
    fName: 'Geo',
    lName: 'Doe',
    email: 'geoDoe123@gmail.com',
    location: 'Dayton',
    onlineStatus: true
  }
];

const App = () => {
  return (
    <div className="App">
      <Header />
      <SharedButton buttonText="TDD Button" />
      <section className="headline">
        <Headline
          header="Rand-o Pers-O (These people are random)"
          desc="Click 'Next' for random people"
          tempArr={tempArr}
        />
        <Randoms />
      </section>
      <Certifications />
    </div>
  );
};

export default App;
