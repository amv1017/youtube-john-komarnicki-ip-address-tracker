import React from 'react'
import { useSelector } from 'react-redux'

export default function Banner() {
  const account = useSelector((state) => state.account)
  return(
    <div className="container">
      <h1>{'React & Redux App'}</h1>
      <p>Account global state: {account}</p>
    </div>
  )
}
