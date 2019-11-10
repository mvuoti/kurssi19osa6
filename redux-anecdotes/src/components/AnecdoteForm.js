import React from 'react'
import { connect } from 'react-redux'

import { addNewAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, clearNotification } from '../reducers/notificationReducer'

import AnecdoteService from '../services/anecdoteService'

const AnecdoteForm = ({ addNewAnecdote, setNotification, clearNotification }) => {
  const onSubmit = (e) => {
    e.preventDefault()
    const content = e.target.content.value
    console.log('add', content)
    AnecdoteService.createNew(content)
      .then(newAnecdote => {
         addNewAnecdote(newAnecdote)
      })
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
