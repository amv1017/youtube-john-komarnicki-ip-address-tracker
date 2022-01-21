import React from 'react'
import Banner from './components/Banner'
import { useSelector, useDispatch } from 'react-redux'
import { actionCreators } from './state/index'
import { bindActionCreators } from 'redux'

export default function App() {
  const account = useSelector((state) => state.bank)
  const dispatch = useDispatch()
  const { depositMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch)
  const amount = 10
  return(
    <div>
      <h2>Main App Account global state: {account}</h2>
      <Banner />
      <div className="buttons">
        <button onClick={() => depositMoney(amount)}>Deposit</button>
        <button onClick={() => withdrawMoney(amount)}>Withdraw</button>
      </div>
    </div>
  )
}
