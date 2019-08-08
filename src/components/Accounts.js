import React from 'react'
import {Route} from 'react-router-dom'
import Account from './Account'

const Accounts = (props) => {

  return (
    <div>
      {props.accounts.map(account =>
        <div key={account.id}><Account account={account}/></div> )}
    </div>

  )
}

export default Accounts
