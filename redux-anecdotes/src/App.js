import React from 'react';

import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'

const App = (props) => {
  const store = props.store
  return (
    <div>
      <h2>Anecdotes</h2>
      <AnecdoteList store={store} />
      <AnecdoteForm store={store} />
      <Notification store={store} />
    </div>
  )
}

export default App