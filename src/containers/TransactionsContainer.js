import React from 'react'
import TransactionInput from '../components/TransactionInput'
import Transactions from '../components/Transactions'

class TransactionsContainer extends React.Component {


  render() {
    return (
      <div>
          <TransactionInput/>
          <Transactions transactions={this.props.account && this.props.account.transactions}/>
      </div>

    )

  }

}

export default TransactionsContainer
