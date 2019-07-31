
export default function accountReducer(state = {accounts: []}, action) {

  return action.payload
  //this was just to see that our action was coming in correctly and that the
  //store could properly be updated by our reducer

}
