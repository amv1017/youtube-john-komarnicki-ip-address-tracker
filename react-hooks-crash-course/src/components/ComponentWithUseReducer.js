import { useReducer } from 'react'

const ACTIONS = {
  DEPOSIT: "DEPOSIT",
  WITHDRAW: "WITHDRAW"
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.DEPOSIT: {
      return state + action.payload;
    }
    case ACTIONS.WITHDRAW: {
      return state - action.payload;
    }
    default: {
      return state
    }
  }
}

export default function ComponentWithUseReducer() {

  const deposit = (amount) => {
    dispatch({
      type: ACTIONS.DEPOSIT,
      payload: amount
    })
  }

  const withdraw = (amount) => {
    dispatch({
      type: ACTIONS.WITHDRAW,
      payload: amount
    })
  }

  const [amount, dispatch] = useReducer(reducer, 500)

  return (
    <div>
      <h1>{amount}</h1>
      <button onClick={() => deposit(500)}>Deposit</button>
      <button onClick={() => withdraw(500)}>Withdraw</button>
    </div>
  )
}
