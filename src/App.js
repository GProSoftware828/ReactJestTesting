import React from 'react';
import './app.scss';
import Header from './components/header';
import Headline from './components/headline';
import Randoms from './components/randomPerson';
import Certifications from './components/certifications';
import './app.scss';

const App = () => {
  return (
    <div className="App">
      <Header />
      <section className="headline">
        <Headline
          header="Rand-o Pers-O (These people are random)"
          desc="Click 'Next' for random people"
        />
        <Randoms />
      </section>
      <Certifications />
    </div>
  );
};

export default App;
