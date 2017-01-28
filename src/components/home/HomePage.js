import React, {PropTypes} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as searchActions from '../../actions/searchActions';

class HomePage extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      searchTerm: {
        title: ''
      }
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSubmit = this.onClickSubmit.bind(this);
    this.titleRow = this.titleRow.bind(this);
  }

  onTitleChange(event) {
    let returnedData;
    const searchTerm = this.state.searchTerm;
    searchTerm.title = event.target.value;
    fetch('http://www.omdbapi.com/?s=' + this.state.searchTerm.title)
      .then((x) => x.json())
      .then((y) => console.log(y.Search));
    this.setState({
      searchTerm: searchTerm
    });
  }

  onClickSubmit() {
    this.props.dispatch(searchActions.searchMovies(this.state.searchTerm));
  }

  titleRow(searchTerm, index) {
    return <div key={index}>{searchTerm.title}</div>;
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
        {this.props.titles.map(this.titleRow)}
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
