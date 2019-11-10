import React from 'react'

const Notification = ({store}) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  const notificationText = store.getState().notification
  return (
    (notificationText !== null) ?
      <div style={style}>
        {notificationText}
      </div> :
      <></>
  )
}

export default Notification