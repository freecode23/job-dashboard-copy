import React from 'react'
import "./checkbox.css"
function Checkbox(props) {
  return (
      <div className="checkboxWrapper">

          <input
              className={props.isChecked ? "checked" : ""}
              type="checkbox"
              id="apply"
              checked={props.isChecked}
              name="apply"
              onChange={props.handleOnChangeCheckbox}
          />

      </div>
  )
}

export default Checkbox