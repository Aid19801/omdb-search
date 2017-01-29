import React, { PropTypes } from 'react';

class Results extends React.Component {
  render() {
    return (
      <div className="resultsList">
        <ul>
        {this.props.results.map((x) => {
          return (<li
                    key={x.imdbID}
                    className="resultRow"
                    style={{listStyleType: 'none'}}
                  >{x.Title}</li>)
        })}
        </ul>
      </div>
    );
  }
}

Results.propTypes = {
  results: PropTypes.array.isRequired
};

export default Results;
