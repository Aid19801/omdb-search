import React, {PropTypes} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as searchActions from '../../actions/searchActions';
import style from '../../styles/style.scss';
import Results from '../results/Results';

// main Homepage area.
// contains all the logic - was going to use Redux but a) have been taught
// to keep Redux to min if one-page app and b) not strong enough with it yet.

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
        <div className="mainTitle">
          <h1>OMDB</h1>
        </div>
          <p className="welcomeNote">Welcome to the OMDB search page</p>
          <div className="searchBar">
            <input
              type="text"
              onChange={this.onChange}
            />
          </div>
          <h2>Suggestions</h2>
          <div className="resultsSection">
            <Results results={movies} />
          </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  onChange: React.PropTypes.func.isRequired
};


export default HomePage;
