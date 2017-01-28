import React, {PropTypes} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as searchActions from '../../actions/searchActions';

class HomePage extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      movies: []
    };
    this.onChange = this.onChange.bind(this);
  }

    onChange(event) {
      let searchTerm = event.target.value;
      fetch('http://www.omdbapi.com/?s=' + searchTerm)
        .then((response) => response.json()
          .then((responseJSON) => this.setState({
              movies: responseJSON.Search
            })));
            console.log(this.state.movies);
    }

  render() {

    let movies = this.state.movies;

    return (
      <div className="jumbotron">
        <h1>OMDB</h1>
        <p>Welcome to the OMDB search page</p>

        <input
          type="text"
          onChange={this.onChange}
          style={{ width: '80%' }}
        />
        <input
          type="submit"
          value="Submit"
          onClick={this.onClickSubmit}
        />

        <h2>Suggestions</h2>
        <div>Suggestions will go here</div>
        <ul>
          {this.state.movies.map((x) => {
            return <li key={x}>{x.Title}</li>;
          })}
        </ul>
      </div>
    );
  }
}

HomePage.propTypes = {
  onChange: React.PropTypes.func.isRequired
};


export default HomePage;
