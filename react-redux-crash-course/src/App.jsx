import React from 'react'
import Banner from './components/Banner'
import { useSelector } from 'react-redux'

export default function App() {
  const account = useSelector((state) => state.account)
  return(
    <div>
      <h2>Main App: {account}</h2>
      <Banner />
    </div>
  )
}
