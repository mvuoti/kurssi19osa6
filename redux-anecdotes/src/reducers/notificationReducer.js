const initialState = null

const notificationReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case "SET_NOTIFICATION":
      return action.content
    case "CLEAR_NOTIFICATION":
      return null
    default:
      return state
  }
}

export default notificationReducer

export const setNotification = content => {
  return {
    type: 'SET_NOTIFICATION',
    content
  }
}
export const clearNotification = () => {
  return {
    type: 'CLEAR_NOTIFICATION',
  }
}