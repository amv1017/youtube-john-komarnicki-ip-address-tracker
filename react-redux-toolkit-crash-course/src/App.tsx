import { useState } from 'react'
import ReservationCard from './components/ReservationCard'
import { RootState } from './app/store'
import { addReservation } from './features/reservationSlice'
import { useSelector, useDispatch } from 'react-redux'

export default function App() {
  const [reservationNameInput, setReservationNameInput] = useState('')

  const reservations = useSelector((state: RootState) => state.reservations.value)

  const handleAddReservations = () => {
    if (!reservationNameInput) return
    dispatch(addReservation(reservationNameInput))
    setReservationNameInput('')
  }

  const dispatch = useDispatch()

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((name, index) => <ReservationCard name={name} index={index} />)}
            </div>
          </div>
          <div className="reservation-input-container">
            <input value={reservationNameInput} onChange={(e) => setReservationNameInput(e.target.value)} />
            <button onClick={handleAddReservations}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          <div className="customer-food-card-container">
            <p>Selena Gomez</p>
            <div className="customer-foods-container">
              <div className="customer-food"></div>
              <div className="customer-food-input-container">
                <input />
                <button>Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
