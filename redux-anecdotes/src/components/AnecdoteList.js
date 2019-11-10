import React from 'react'

import { incrementVotesOfAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, clearNotification } from '../reducers/notificationReducer'

const vote = (id, store) => {
  console.log('vote', id)
  store.dispatch(incrementVotesOfAnecdote(id))
  store.dispatch(setNotification(`Anecdote ${id} got a vote!!!`))
  window.setTimeout(() =>  { store.dispatch(clearNotification()) }, 5000)
}

const AnecdoteList = ({ store }) => {
  const anecdotes = store.getState().anecdoteList
  return anecdotes.map(anecdote =>
    <div key={anecdote.id}>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={() => vote(anecdote.id, store)}>vote</button>
      </div>
    </div>
  )
}

export default AnecdoteList