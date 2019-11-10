import React from 'react'

import { setFilter } from '../reducers/filterReducer'


const Filter = ({ store }) => {
  const onFilterChange = (e) => {
    console.log("onFilterChange")
    store.dispatch(setFilter(e.target.value))
  }
  return <input onChange={onFilterChange} />
}

export default Filter
