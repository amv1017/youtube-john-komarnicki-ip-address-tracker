import React from 'react'
import { useSelector } from 'react-redux'

export default function Banner() {
  const account = useSelector((state) => state.bank)
  return(
    <div className="container">
      <p>Account global state (inside component): {account}</p>
    </div>
  )
}
