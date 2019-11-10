import React from 'react'
import { connect } from 'react-redux'

import { incrementVotesOfAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, clearNotification } from '../reducers/notificationReducer'

const AnecdoteList = ({
    filter,
    anecdotesToShow,
    incrementVotesOfAnecdote,
    setNotification,
    clearNotification
  }) => {
  const vote = (id) => {
    incrementVotesOfAnecdote(id)
    setNotification(`Anecdote ${id} got a vote!!`)
    window.setTimeout(clearNotification, 1000)
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

const applyFilterToAnecdotes = (anecdotes, filter) => {
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
    anecdotesToShow: applyFilterToAnecdotes(state.anecdotes, state.filter),
    filter: state.filter
  }
}

const mapDispatchToProps = {
  incrementVotesOfAnecdote,
  setNotification,
  clearNotification
}

const ConnectedAnecdoteList =
  connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)

export default ConnectedAnecdoteList