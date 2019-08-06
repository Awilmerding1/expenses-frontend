
export default function accountReducer(state = {accounts: []}, action) {
  switch (action.type) {
    case 'FETCH_ACCOUNTS':
      return {accounts: action.payload}
    case 'ADD_ACCOUNT':
      return {...state, accounts: [...state.accounts, action.payload]}
    default:
      return state
  }
}
