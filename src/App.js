import React from 'react';
import {connect} from 'react-redux'
import {fetchAccounts} from './actions/fetchAccounts'

class App extends React.Component {

  componentDidMount() {
    this.props.fetchAccounts({type: 'FETCH_ACCOUNTS', payload: {name: 'Checking'}})
  }

  render() {
    return (
      <div className="App">
        App
      </div>
    );
  }
}


export default connect(null, {fetchAccounts})(App);
