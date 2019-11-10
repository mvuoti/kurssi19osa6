import React from 'react';

import AnecdoteForm from './components/AnecdoteForm'

import { incrementVotesOfAnecdote } from './reducers/anecdoteReducer'


const App = (props) => {
  const store = props.store
  const anecdotes = store.getState()

  const vote = (id) => {
    console.log('vote', id) 
    store.dispatch(incrementVotesOfAnecdote(id))
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <AnecdoteForm store={store} />
    </div>
  )
}

export default App