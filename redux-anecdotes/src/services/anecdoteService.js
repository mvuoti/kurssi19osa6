import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes/'

const AnecdoteService = {
  getAll: async () => {
    const response = await axios.get(baseUrl)
    return response.data
  },
  createNew: async (content) => {
    const newAnecdote = {
      content,
      votes: 0
    }
    const response = await axios.post(baseUrl, newAnecdote)
    return response.data
  }
}

export default AnecdoteService