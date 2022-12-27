import React from "react"
import { calculateDaysAgo } from "../../tableUtil"
import * as ownLocalStorage from "../../../../localStorageUtil"
export const homeTableDatas = (jobResult) => {

    const jobDatas = jobResult.map((job) => {
        console.log("company:>>>>", job.company);
        console.log("jobPostedEstimate", job.postedEstimate);
        const diffDaysStr = calculateDaysAgo(job.postedEstimate)

        return {
            col1: job.title,
            col2: <div className="tableContainerCompany">{job.company}</div>,
            col3: <div className="applyLinkColumn">
                <a className="applyLink" href={job.applyUrl} target="_blank" rel="noopener noreferrer">{job.description.substring(0, 80) + "..."}</a>
            </div>,
            col4: diffDaysStr,
            jobId: job.id,
        }
    })

    return jobDatas
}

export const homeTableColumn = [
    {
        Header: 'Job Title',
        accessor: 'col1', // accessor is the "key" in the data
    },
    {
        Header: 'Company',
        accessor: 'col2',
    },
    {
        Header: 'Description/Apply Link',
        accessor: 'col3',
    },
    {
        Header: 'Posted',
        accessor: 'col4',
    },
    {
        id: "jobId",
        Header: 'Job Id',
        accessor: 'jobId',
    },
]



export const handleSaveJob = async(e, jobId, setNumJobsSaved, savedJobIds, setSavedJobIds) => {

    if (!savedJobIds.includes(jobId)) {
        // console.log(">>add job");
        savedJobIds.push(jobId)
        ownLocalStorage.addJob(jobId)
    } else {
        // console.log(">>delete job");
        var index = savedJobIds.indexOf(jobId);
        savedJobIds.splice(index, 1);
        ownLocalStorage.deleteJob(jobId)
    }

    // update
    let updatedIds = ownLocalStorage.getAllIds()
    setSavedJobIds([...savedJobIds])
    setNumJobsSaved(updatedIds.length)

}