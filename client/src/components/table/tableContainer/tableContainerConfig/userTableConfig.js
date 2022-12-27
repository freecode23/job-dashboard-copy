import React from "react"
import ApplyColumn from "../../tableSubcomponent/ApplyColumn"
import OaColumn from "../../tableSubcomponent/OaColumn"
import InterviewColumn from "../../tableSubcomponent/InterviewColumn"

export const userTableDatas = (jobResult) => {
    // console.log("usertable datas job", jobResult);

    const jobDatas = jobResult.map((job) => {

        
        return {
            col1: job.title,

            // company
            col2: <div className="tableContainerCompany">{job.company}</div>,

            // apply link
            // if already applied, show dates
            col3: <ApplyColumn job = {job}/>,

            // OA
            col4: <OaColumn job={job} />,

            // interview
            col5: <InterviewColumn job={job} />,
            jobId: job.id,
        }
    })

    return jobDatas
}


export const userTableColumn = [
    {
        Header: 'Job Title',
        accessor: 'col1', // accessor is the "key" in the data
    },
    {
        Header: 'Company',
        accessor: 'col2',
    },
    {
        Header: 'Apply Link',
        accessor: 'col3',
    },
    {
        Header: 'OA',
        accessor: 'col4',
    },
    {
        Header: 'Interview',
        accessor: 'col5',
    },
    {
        id: "jobId",
        Header: 'Job Id',
        accessor: 'jobId',
    },
]

