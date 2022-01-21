import { _DEPOSIT, _WITHDRAW } from '../../constants'

const depositMoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: _DEPOSIT,
      payload: amount
    })
  }
}

const withdrawMoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: _WITHDRAW,
      payload: amount
    })
  }
}

export { depositMoney, withdrawMoney }
