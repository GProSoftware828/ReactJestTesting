import React from 'react';

export class Randoms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      person: null
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetch('https://api.randomuser.me/', {
      method: 'GET',
      dataType: 'JSON',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    })
      .then(resp => {
        return resp.json();
      })
      .then(data => {
        this.setState({ person: data.results[0], loading: false });
      })
      .catch(error => {
        console.log(error, 'catch the error here');
      });
  };

  render() {
    if (!this.state.person) {
      return (
        <div>
          <p>Didn't find a person</p>
          <div>
            <button onClick={this.fetchData}>NEXT</button>
          </div>
        </div>
      );
    }

    return (
      <div>
        {this.state.loading || !this.state.person ? (
          <div>loading...</div>
        ) : (
          <div>
            <div>
              {this.state.person.name.first} {this.state.person.name.last}
            </div>
            <div>
              <img
                src={this.state.person.picture.large}
                alt="photo_random_person"
              />
            </div>
          </div>
        )}
        <button onClick={this.fetchData}>NEXT</button>
      </div>
    );
  }
}

export default Randoms;
