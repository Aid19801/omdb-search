import React, {PropTypes} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as searchActions from '../../actions/searchActions';

class HomePage extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      title: '',
      results: {},
      resultTitles: []
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSubmit = this.onClickSubmit.bind(this);
    this.titleRow = this.titleRow.bind(this);
  }

  onTitleChange(event) {
    let searchTerm = event.target.value;
    fetch('http://www.omdbapi.com/?s=' + searchTerm)
      .then((x) => x.json())
      .then((y) => this.setState({
        results: y.Search,
        resultTitles: y.Search.map((z) => z.Title)
      }))
      console.log('test:  ', this.state.resultTitles);
    }
// loop through array of objects
// return object key value for each title

  onClickSubmit() {
    this.props.dispatch(searchActions.searchMovies(this.state.searchTerm));
  }

  titleRow(searchTerm, index) {
    let results = this.state.resultTitles;
    for (var i = 0; i < results.length; i++ ) {
      return <div key={index}>{results[i].title}</div>;
    }
  }

  render() {
    return (
      <div className="jumbotron">
        <h1>OMDB</h1>
        <p>Welcome to the OMDB search page</p>

        <input
          type="text"
          onChange={this.onTitleChange}
          style={{ width: '80%', height: '25%' }}
        />
        <input
          type="submit"
          value="Submit"
          onClick={this.onClickSubmit}
        />

        <h2>Suggestions</h2>
        <h3>{this.titleRow}</h3>
      </div>
    );
  }
}

HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  titles: PropTypes.array.isRequired

};

function mapStateToProps(state, ownProps) {
  return {
    titles: state.titles
  };
}

export default connect(mapStateToProps)(HomePage);
