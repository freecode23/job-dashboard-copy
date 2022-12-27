import React, {useState} from 'react'
import Table from '../tableTemplate/TableTemplate';
import { homeTableDatas, homeTableColumn, handleSaveJob } from "./tableContainerConfig/homeTableConfig"
import { userTableDatas, userTableColumn } from "./tableContainerConfig/userTableConfig"
import *  as ownLocalStorage from '../../../localStorageUtil';
import "./TableContainer.css"



function TableContainer(props) {
    // set up for home page vs user dashboard
    const jobDatas = props.isHomeState ? 
    homeTableDatas(props.jobResult) : userTableDatas(props.jobResult)
    const searchResultColumn = props.isHomeState ? homeTableColumn : userTableColumn
    
    // 1. home table
    const [savedJobIds, setSavedJobIds] = useState(ownLocalStorage.getAllIds())

    const homeTableHooks = (hooks) => {
        hooks.visibleColumns.push((columns) => [
            ...columns,
            {
                id: "Save Job",
                Header: "Save Job",
                Cell: ({ row }) => {
                    let jobId = row.original.jobId
                    let buttonClassName = "tableSavingJobButton";
                    let text = "Save"
                    if (savedJobIds.includes(jobId)) {
                        buttonClassName = "tableSavedJobButton"
                        text = "Remove"
                    }
                    return (
                        <button className={buttonClassName}
                            onClick={
                                e => handleSaveJob(e, jobId, props.setNumJobsSaved, savedJobIds, setSavedJobIds)
                                }>
                            {text}
                        </button>
                    )
                },
            }
        ])
    }



  return (
    <Table tableHooks={homeTableHooks}
            column={searchResultColumn} 
            data={jobDatas}
            />
  )
}

export default TableContainer