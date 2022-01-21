import { useDispatch } from 'react-redux'
import { addFoodToCustomer, Customer } from '../features/customerSlice'
import { useState } from 'react'

export default function CustomerCard (props: {customer: Customer}) {
  const { id, name, food } = props.customer
  const dispatch = useDispatch()
  const [customerFoodInput, setCustomerFoodInput] = useState('')

  const handleAddFoods = () => {
    if (!customerFoodInput) return
    dispatch(addFoodToCustomer({
      id,
      food: customerFoodInput
    }))
    setCustomerFoodInput('')
  }

  return (
    <div className="customer-food-card-container">
      <p>{name}</p>
      <div className="customer-foods-container">
        <div className="customer-food">
          {food.map(food => {
            return <p>{food}</p>
          })}
        </div>
        <div className="customer-food-input-container">
          <input value={customerFoodInput} onChange={(e) => setCustomerFoodInput(e.target.value)} />
          <button onClick={handleAddFoods}>Add</button>
        </div>
      </div>
    </div>
  )
}
