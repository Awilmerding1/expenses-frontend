import React from 'react'
import {Route, Link} from 'react-router-dom'
import Account from './Account'

class Accounts extends React.Component {

  state = {filteredAccounts: false}

  filterAccounts = () => {
    this.setState({filteredAccounts: !this.state.filteredAccounts})
  }


  render() {
    let filtered = this.props.accounts.filter(account => account.balance > 500)
    return (
      <div>
        <button onClick={this.filterAccounts}>Filter Accounts</button>
        {!this.state.filteredAccounts ? this.props.accounts.map(account =>
          <li key={account.id}>
            <Link to={`/accounts/${account.id}`}>{account.name} - ${account.balance}</Link>
          </li> ) : filtered.map(account =>
            <li key={account.id}>
              <Link to={`/accounts/${account.id}`}>{account.name} - ${account.balance}</Link>
            </li> )}
      </div>
    )
  }
}

export default Accounts
