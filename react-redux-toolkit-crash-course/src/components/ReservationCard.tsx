import { useDispatch } from 'react-redux'
import { removeReservation } from '../features/reservationSlice'
import { addCustomer } from '../features/customerSlice'
import { v4 as uuidv4 } from 'uuid'

interface ReservationCardTypes {
  name: string;
  index: number;
}

export default function ReservationCard({name, index}: ReservationCardTypes) {
  const dispatch = useDispatch()

  return (
    <div className="reservation-card-container" onClick={() => {
      dispatch(removeReservation(index))
      dispatch(addCustomer({
        id: uuidv4(),
        name,
        food: []
      }))
    }}>{name}</div>
  )
}
