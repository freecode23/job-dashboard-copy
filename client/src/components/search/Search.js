import React from 'react'
import "./Search.css"
function SearchBar(props) {

  return (
    <div >
      <form className='searchForm'>

        <div className='searchItems'>

          <div className="searchItem">
            <label>Job Title</label>
            <input
              value={props.title}
              className="searchInput"
              id="textInput"
              type="text"
              autoFocus={true}
              onChange={(e) => {
                props.setJobsTitle(e.target.value);
              }}
            />
          </div>

          <div className="searchItem">
            <label>Location</label>
            <input
              ref={props.inputRef}
              value={props.location}
              className="searchInput"
              id="textInput"
              type="text"
              autoFocus={true}
              onChange={(e) => {
                // Question: change here
                props.setLocation(e.target.value);
              }}
            />
          </div>
          <div className="searchItem">
            <button
              type="button"
              className="searchSubmitButton"
              onClick={props.handleSubmit}
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SearchBar