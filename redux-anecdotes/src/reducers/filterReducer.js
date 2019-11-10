const initialState = ''

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FILTER":
      return action.value
    default:
      return state
  }
}

export default filterReducer

export const setFilter = (value) => {
  return {
    type: "SET_FILTER",
    value
  }
}