import React from 'react'
import {connect} from 'react-redux'
import {deleteTransaction} from '../actions/deleteTransaction'

class Transactions extends React.Component {

state = {}

 handleDelete = (transaction) => {
    this.props.deleteTransaction(transaction.id, transaction.account_id)
  }

vote = (id) => {
  this.state[id] ? this.setState({[id]: this.state[id] += 1}) : this.setState({[id]: 1})
}

render() {
  return (
      <div>
        {this.props.transactions && this.props.transactions.map(transaction =>
          <li key={transaction.id}>{transaction.date} - {transaction.kind} - {transaction.amount}  <button onClick={() => this.vote(transaction.id)}>Vote {this.state[transaction.id] ? this.state[transaction.id] : 0}</button><button onClick={() => this.handleDelete(transaction)}>Delete</button></li>
        )}
      </div>
    )
  }
}

export default connect(null, {deleteTransaction})(Transactions)
