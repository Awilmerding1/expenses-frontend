import React from 'react'


const Account = (props) => {

  console.log(props)

  let account = props.accounts[props.match.params.id - 1]
  console.log(account)

  return (
    <li>
      {account ? account.name : null} - {account ? account.balance : null}
    </li>
  )


}

export default Account
