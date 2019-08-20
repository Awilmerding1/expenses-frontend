export const deleteTransaction = (transactionId, accountId) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/accounts/${accountId}/transactions/${transactionId}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(account => dispatch({type: 'DELETE_TRANSACTION', payload: account}))
  }
}
