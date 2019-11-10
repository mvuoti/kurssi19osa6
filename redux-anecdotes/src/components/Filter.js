import React from 'react'
import { connect } from 'react-redux'

import { setFilter } from '../reducers/filterReducer'


const Filter = ({ setFilter }) => {
  const onFilterChange = (e) => {
    console.log("onFilterChange")
    setFilter(e.target.value)
  }
  return <div>
    <strong>Filter:</strong>
    <input onChange={onFilterChange} />
  </div>
}

const mapDispatchToProps = {
  setFilter
}

const ConnectedFilter = connect(null, mapDispatchToProps)(Filter)

export default ConnectedFilter
