import React from 'react';

import {
  incrementVotesOfAnecdote, addNewAnecdote
} from './reducers/anecdoteReducer'

const App = (props) => {
  const store = props.store
  const anecdotes = store.getState()

  const vote = (id) => {
    console.log('vote', id) 
    store.dispatch(incrementVotesOfAnecdote(id))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const content = e.target.content.value
    console.log('add', content)
    store.dispatch(addNewAnecdote(content))
    e.target.content.value = ''
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
      <form onSubmit={onSubmit}>
        <div><input name="content"/></div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default App