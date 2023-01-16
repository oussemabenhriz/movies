import React from 'react'

const Search= ({handleChangeFilterByName}) => {
    return (
        <div>
        <form>
          <input placeholder="Search" onChange={handleChangeFilterByName}></input>
        </form>
        </div>
    )
}

export default Search