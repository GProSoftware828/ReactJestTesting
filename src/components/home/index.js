import React from 'react';
import { Headline } from '../headline';
import { Randoms } from '../randomPerson';
import { Link } from 'react-router-dom';

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: [
        {
          title: 'React'
        },
        {
          title: '.NET'
        },
        {
          title: 'Angular'
        },
        {
          title: 'JavaScript in general'
        },
        {
          title: 'Ruby on Rails'
        },
        {
          title: 'C# in general'
        },
        {
          title: 'Linux command line/Git'
        }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <section className="headline">
          <Link to="/certifications">View Certifications</Link>
          <Headline
            header="Random people that don't have my certifications!! LOL"
            desc="Click 'Next' for random people"
          />
          <Randoms />
        </section>
        <h3>Array.map() of some of my main skills:</h3>
        {this.state.Data.map((item, index) => (
          <p>{item.title}</p>
        ))}
      </div>
    );
  }
}

export default Home;
