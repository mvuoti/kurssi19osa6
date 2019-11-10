import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'

import AnecdoteService from './services/anecdoteService'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Filter'
import { initAnecdotes } from './reducers/anecdoteReducer'

const App = ({ initAnecdotes }) => {
  useEffect(() => {
   AnecdoteService.getAll() 
    .then((anecdotes) => {
      initAnecdotes(anecdotes)
    })
  }, [])

  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter />
      <Notification />
      <AnecdoteForm />
      <AnecdoteList />
    </div>
  )
}

const mapDispatchToProps = {
  initAnecdotes
}

export default connect(null, mapDispatchToProps)(App)
