import React from 'react'

import { addNewAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = ({store}) => {
  const onSubmit = (e) => {
    e.preventDefault()
    const content = e.target.content.value
    console.log('add', content)
    store.dispatch(addNewAnecdote(content))
    e.target.content.value = ''
  }
  return (
      <form onSubmit={onSubmit}>
        <div><input name="content" /></div>
        <button type="submit">create</button>
      </form>
    )
  }

  export default AnecdoteForm
