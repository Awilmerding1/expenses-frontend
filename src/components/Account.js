import React from 'react'
import {Redirect} from 'react-router-dom'
import AccountEdit from './AccountEdit'

import TransactionsContainer from '../containers/TransactionsContainer'

const Account = (props) => {

  console.log(props)
  // let account = props.accounts[props.match.params.id - 1]
  let account = props.accounts.filter(account => account.id == props.match.params.id)[0]

  console.log(account)

  return (
    <div>
      <h2>
        {account ? account.name : null} - {account ? account.balance : null}
      </h2>
      <TransactionsContainer account={account}/>
      <AccountEdit account={account}/>
    </div>
  )


}

export default Account
