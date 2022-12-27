import React from 'react'
import { useState } from 'react'
import Checkbox from "../checkbox/Checkbox"
import DatePick from './DatePick'

export default function DatePickColumn(props) {

    const today = new Date().toISOString().slice(0, 10).replace('T', '')
    const theDateFromLs = props.getDateLs(props.job.id)
    // let [oaDate, setOaDate] = useState(theDateFromLs)
    const [isChecked, setIsChecked] = useState(theDateFromLs !== null)

    const handleOnChangeCheckbox = async (e) => {
        const jobId = props.job.id

        if (e.target.checked) {
            // - set changed date as the oa/interview date in local storage
            props.setDateLs(jobId, today)

        } else {
            // - set back to null if unchecked
            props.setDateLs(jobId, null)
        }

        setIsChecked(e.target.checked);

    }
    const handleDateSelect = async (dateSelected) => {
        const dateSelectedReformat = dateSelected.toISOString().slice(0, 10).replace('T', '')
        const jobId = props.job.id

        // - set selected date as the oa date in local storage
        props.setDateLs(jobId, dateSelectedReformat)
    }

    return (

        <div className="oaColumn">
            <Checkbox
                isChecked={isChecked}
                handleOnChangeCheckbox={handleOnChangeCheckbox}
            />

            {
                isChecked ?
                    <DatePick handleDateSelect={handleDateSelect} /> : <p></p>
            }
        </div>
    )
}

