import { useState } from 'react'

const SearchBox = ({ filter, setFilter }) => {
  return (
    <input
      type="text"
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      placeholder="Search by name"
    />
  )
}

export default SearchBox
