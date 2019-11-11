import React from 'react'
import { connect } from 'react-redux'

import { incrementVotesOfAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = ({
    anecdotes,
    anecdotesToShow,
    incrementVotesOfAnecdote,
    setNotification,
  }) => {
  const vote = (id) => {
    incrementVotesOfAnecdote(id)
    const anecdote = anecdotes.find((a) => a.id === id)
    console.log(anecdote)
    setNotification(`Anecdote "${anecdote.content}" got a vote!!`, 5)
  }
  return anecdotesToShow.map(anecdote =>
    <div key={anecdote.id}>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={() => vote(anecdote.id)}>vote</button>
      </div>
    </div>
  )
}

const getFilteredListOfAnecdotes = (anecdotes, filter) => {
    const substring = filter.trim().toLowerCase()
    const filterDefined = substring !== ''
    if (!filterDefined) {
      return anecdotes
    } else {
      const isAnecdoteAMatch = (a) => {
        return a.content.toLowerCase().indexOf(substring) >= 0
      }
      return anecdotes.filter(isAnecdoteAMatch)
    }
}

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    anecdotesToShow: getFilteredListOfAnecdotes(state.anecdotes, state.filter),
    filter: state.filter
  }
}

const mapDispatchToProps = {
  incrementVotesOfAnecdote,
  setNotification
}

const ConnectedAnecdoteList =
  connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)

export default ConnectedAnecdoteList