import React from 'react'
import { connect } from 'react-redux'

import { addNewAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, clearNotification } from '../reducers/notificationReducer'


const AnecdoteForm = ({ addNewAnecdote, setNotification, clearNotification }) => {
  const onSubmit = (e) => {
    e.preventDefault()
    const content = e.target.content.value
    addNewAnecdote(content)
    setNotification(content)
    window.setTimeout(() => { clearNotification() }, 5000)
    e.target.content.value = ''
  }
  return (
    <>
    <h3>Create new</h3>
    <form onSubmit={onSubmit}>
      <div><input name="content" /></div>
      <button type="submit">create</button>
    </form>
    </>
  )
}

const mapDispatchToProps = {
  addNewAnecdote,
  setNotification,
  clearNotification
}

const ConnectedAnecdoteForm = connect(null, mapDispatchToProps)(AnecdoteForm)

export default ConnectedAnecdoteForm
