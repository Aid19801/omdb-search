import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <h1>App component</h1>
        <p>Header here...</p>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
