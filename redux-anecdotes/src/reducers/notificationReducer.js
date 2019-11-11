const initialState = null

const notificationReducer = (state = initialState, action) => {
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

export const setNotification = (content, durationSeconds) => {
  return (dispatch) => {
    dispatch({ type: 'SET_NOTIFICATION', content })
    window.setTimeout(
      () => dispatch({ type: 'CLEAR_NOTIFICATION' }),
      1000 * durationSeconds
    )
  }
}