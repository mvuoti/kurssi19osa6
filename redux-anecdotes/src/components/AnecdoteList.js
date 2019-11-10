import React from 'react'

import { incrementVotesOfAnecdote } from '../reducers/anecdoteReducer'

const vote = (id, store) => {
  console.log('vote', id)
  store.dispatch(incrementVotesOfAnecdote(id))
}

const AnecdoteList = ({ store }) => {
  const anecdotes = store.getState()
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