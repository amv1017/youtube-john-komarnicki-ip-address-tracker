export default function reducer(state = 150, action) {
  switch (action.type) {
    case "deposit":
      return state + action.payload;
    case "withdraw":
      return state - action.payload
    default:
      return state
  }
}
