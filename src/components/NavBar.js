import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = (props) => {

  return (
    <div>
      <Link to='/accounts' style={{paddingRight: '10px'}}>Accounts  </Link>
      <Link to='/accounts/new'> Add Account</Link>
    </div>

  )
}

export default NavBar
