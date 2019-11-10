import React from 'react'
import { connect } from 'react-redux'

import { incrementVotesOfAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, clearNotification } from '../reducers/notificationReducer'

const vote = (id, store) => {
  console.log('vote', id)
  store.dispatch(incrementVotesOfAnecdote(id))
  store.dispatch(setNotification(`Anecdote ${id} got a vote!!!`))
  window.setTimeout(() =>  { store.dispatch(clearNotification()) }, 5000)
}

const AnecdoteList = ({ filter, anecdoteList }) => {
  const anecdotes = anecdoteList.filter(a => {
    const substring = filter.trim().toLowerCase()
    const filterDefined = substring !== ''
    const filterMatches =
      filterDefined && a.content.toLowerCase().indexOf(substring) >= 0
    return filterMatches || !filterDefined
  })
  return anecdotes.map(anecdote =>
    <div key={anecdote.id}>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={() => vote(anecdote.id, undefined)}>vote</button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    anecdoteList: state.anecdoteList,
    filter: state.filter
  }
}

const ConnectedAnecdoteList = connect(mapStateToProps)(AnecdoteList)

export default ConnectedAnecdoteList