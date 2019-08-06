import React from 'react'
import {connect} from 'react-redux'

import {fetchAccounts} from '../actions/fetchAccounts'
import Accounts from '../components/Accounts'
import AccountInput from '../components/AccountInput'

class AccountsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchAccounts()
  }

  render() {
      return (
          <div>
            <AccountInput/><br/><br/>
            <Accounts accounts={this.props.accounts}/>
          </div>
      )
  }
}

const mapStateToProps = state => {
  return {
    accounts: state.accounts
  }
}

export default connect(mapStateToProps, {fetchAccounts})(AccountsContainer)
