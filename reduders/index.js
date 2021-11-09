import * as actionTypes from '../actions/actionTypes'

function entries (state = {}, action) {
  switch (action.type) {
    case actionTypes.RECEIVE_ENTRIES :
      return {
        ...state,
        ...action.entries,
      }
    case actionTypes.ADD_ENTRY :
      return {
        ...state,
        ...action.entry
      }
    default :
      return state
  }
}

export default entries 