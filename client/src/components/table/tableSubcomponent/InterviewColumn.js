import React from 'react'
import DatePickColumn from "./datepick/DatePickColumn"
import * as ownls from "../../../localStorageUtil"

function InterviewColumn(props) {
  return (
    <DatePickColumn 
        job={props.job}
        getDateLs = {ownls.getInterviewDate}
        setDateLs = {ownls.setInterviewDate}
        />
  )
}

export default InterviewColumn