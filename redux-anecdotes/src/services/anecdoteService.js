import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes/'

const AnecdoteService = {
  get: async (id) => {
    const response = await axios.get(`${baseUrl}/${id}`)
    return response.data
  },
  save: async (anecdote) => {
    const response = await axios.put(`${baseUrl}/${anecdote.id}`, anecdote)
    return response.data
  },
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