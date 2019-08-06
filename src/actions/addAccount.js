export const addAccount = (data) => {

  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/accounts', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(account => dispatch({type: 'ADD_ACCOUNT', payload: account}))
  }

}
