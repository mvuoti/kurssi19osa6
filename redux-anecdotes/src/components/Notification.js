import React from 'react'
import { connect } from 'react-redux'

const Notification = ({notificationText}) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  return (
    notificationText !== null ?
      <div style={style}>
        {notificationText}
      </div> :
      <></>
  )
}

const mapStateToProps = (state) => {
  return {
    notificationText: state.notification
  }
}

const ConnectedNotification = connect(mapStateToProps)(Notification)

export default ConnectedNotification