const sortByVotesDescending = (anecdotes) => {
  return anecdotes.sort((a, b) => b.votes - a.votes)
}

const reducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch (action.type) {
    case 'INIT_ANECDOTES':
      return action.anecdotes
    case 'INCREMENT_VOTES_OF_ANECDOTE':
      return sortByVotesDescending(
        state.map(a =>
          (a.id === action.id) ? { ...a, votes: a.votes + 1 } : a
        ))
    case 'ADD_NEW_ANECDOTE':
      return sortByVotesDescending([...state, action.anecdote])
    default:
        return state
  }
}


export const initAnecdotes = (anecdotes) => {
  return { type: 'INIT_ANECDOTES', anecdotes }
}
export const incrementVotesOfAnecdote = (id) => {
  return {type: 'INCREMENT_VOTES_OF_ANECDOTE', id}
}
export const addNewAnecdote = (anecdote) => {
  return {type: 'ADD_NEW_ANECDOTE', anecdote}
}

export default reducer
