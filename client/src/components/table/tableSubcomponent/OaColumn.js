import React from 'react'
import DatePickColumn from './datepick/DatePickColumn'
import * as ownls from "../../../localStorageUtil"

function OaColumn(props) {
    return (
        <DatePickColumn
            job={props.job}
            getDateLs={ownls.getOaDate}
            setDateLs={ownls.setOaDate}
        />
    )
}

export default OaColumn