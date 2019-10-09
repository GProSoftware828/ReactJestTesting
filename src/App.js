import React, { Component } from 'react';
import './app.scss';
import Header from './components/header';
import Headline from './components/headline';
import Randoms from './components/randomPerson';
import SharedButton from './components/button';
import Certifications from './components/certifications';
import ListItem from './components/listItem';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import { store } from './createStore';
import { fetchPosts } from './actions';
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

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: [
        {
          title: 'React'
        },
        {
          title: 'Redux'
        },
        {
          title: 'Axios'
        }
      ]
    };
    // this.fetch = this.fetch.bind(this);
  }

  // fetch() {
  //   this.props.fetchPosts();
  // }

  render() {
    const { props } = this.props;

    const configButton = {
      buttonText: 'TDD Button- Get Posts',
      emitEvent: this.fetch
    };

    return (
      <div className="App">
        <Header />
        <SharedButton {...configButton} />
        {/* {posts.length > 0 && (
          <div>
            {posts.map((post, index) => {
              const { title, body } = post;
              const configListItem = {
                title,
                desc: body
              };
              return <ListItem key={index} {...configListItem} />;
            })}
          </div>
        )} */}
        {this.state.Data.map((
          item,
          index //this works because it has state
        ) => (
          <p>{item.title}</p>
        ))}
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
  }
}
const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

// const ConnectedApp = connect => (mapStateToProps, { fetchPosts })(App);

// export default ConnectedApp(
//   <Provider store={store}>
//     <ConnectedApp />
//   </Provider>
// );

export default connect(
  mapStateToProps,
  { fetchPosts }
)(App);
