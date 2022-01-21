import { _DEPOSIT, _WITHDRAW } from '../../constants'

export default function reducer(state = 150, action) {
  switch (action.type) {
    case _DEPOSIT:
      return state + action.payload;
    case _WITHDRAW:
      return state - action.payload
    default:
      return state
  }
}
