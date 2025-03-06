import { useState } from 'react'
import styles from './SearchBox.module.css'

const SearchBox = ({ filter, setFilter }) => {
  const [localFilter, setLocalFilter] = useState(filter)

  const handleInputChange = (e) => {
    const value = e.target.value
    setLocalFilter(value)
    setFilter(value)
  }

  return (
    <div className={styles.searchBoxContainer}>
      <label htmlFor="search" className={styles.label}>
        Find contacts by name
      </label>
      <input
        id="search"
        type="text"
        value={localFilter}
        onChange={handleInputChange}
        className={styles.searchBox}
      />
    </div>
  )
}

export default SearchBox
