import React from 'react'

import { addNewAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, clearNotification } from '../reducers/notificationReducer'

const AnecdoteForm = ({ store }) => {
  const onSubmit = (e) => {
    e.preventDefault()
    const content = e.target.content.value
    console.log('add', content)
    store.dispatch(addNewAnecdote(content))
    store.dispatch(setNotification(content))
    window.setTimeout(() => { store.dispatch(clearNotification()) }, 5000)
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

export default AnecdoteForm
