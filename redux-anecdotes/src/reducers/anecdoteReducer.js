import AnecdoteService from "../services/anecdoteService"

const sortByVotesDescending = (anecdotes) => {
  return anecdotes.sort((a, b) => b.votes - a.votes)
}

const reducer = (state = [], action) => {

  switch (action.type) {
    case 'INIT_ANECDOTES':
      return sortByVotesDescending(action.anecdotes)
    case 'ADD_NEW_ANECDOTE':
      return sortByVotesDescending([...state, action.anecdote])
    case 'UPDATE_ANECDOTE':
      return sortByVotesDescending(
        state.map((a) =>
          (a.id === action.anecdote.id) ? action.anecdote : a)
      )
    default:
        return state
  }
}

export const initAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await AnecdoteService.getAll()
    dispatch({ type: 'INIT_ANECDOTES', anecdotes})
  }
}
export const incrementVotesOfAnecdote = (id) => {
  return async (dispatch) => {
    const anecdote = await AnecdoteService.get(id)
    if (!!anecdote) {
      const updatedAnecdote = {...anecdote, votes: anecdote.votes+1 }
      await AnecdoteService.save(updatedAnecdote)
      dispatch({ type: 'UPDATE_ANECDOTE', anecdote: updatedAnecdote })
    } else {
      dispatch({ type: 'NOP' })
    }
  }
}
export const addNewAnecdote = (content) => {
  return async (dispatch) => {
    const anecdote = await AnecdoteService.createNew(content)
    dispatch({ type: 'ADD_NEW_ANECDOTE', anecdote })
  }
}

export default reducer
