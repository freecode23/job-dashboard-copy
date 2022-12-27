import React from 'react'
import { useState } from 'react'
import { calculateDaysAgo } from '../tableUtil'
import * as ownls from "../../../localStorageUtil"
import useLocalStorage from '../../../hooks/useLocalStorage'
import Checkbox from './checkbox/Checkbox'

export default function ApplyColumn(props) {
    const [savedJobs, setSavedJobs] = useLocalStorage("savedJobs", []);


    const today = new Date().toISOString().slice(0, 10).replace('T', '')
    const appliedDateFromLs = ownls.getAppliedDate(props.job.id)
    let [appliedDate, setAppliedDate] = useState(appliedDateFromLs)
    const [isChecked, setIsChecked] = useState(appliedDateFromLs !== null)
    
    const handleOnChangeCheckbox = async (e) => {
        const jobId = props.job.id
        
        if (e.target.checked) {
            // - set todays date as the applied date in local storage and state
            ownls.setAppliedDate(jobId, today)
            setAppliedDate(ownls.getAppliedDate(jobId))
        } else {
            // - set back to null if unchecked
            ownls.setAppliedDate(jobId, null)
            setAppliedDate(null)
        }
        
        setIsChecked(e.target.checked);
        
    }
    return (
        
        <div className="configApply">
            <Checkbox
                isChecked={isChecked}
                handleOnChangeCheckbox={handleOnChangeCheckbox}
            />
            {
                isChecked ?
                <p>applied {calculateDaysAgo(appliedDate)}</p> : 
                <button
                    className="configApplyButton"
                    onClick = {(e) => {
                            e.preventDefault();
                            window.open(props.job.applyUrl, "_blank");
                        }}
                    rel="noopener noreferrer">apply
                </button>
            }

        </div>
    )
}

