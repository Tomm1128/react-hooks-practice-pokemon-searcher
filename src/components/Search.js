import React from "react"

function Search({ searchInput, onSearch }) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input
          className="prompt"
          value={searchInput}
          onChange={(event) => onSearch(event.target.value)}
        />
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
