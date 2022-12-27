import React, {useState, useEffect}from 'react'
import TableContainer from '../../components/table/tableContainer/TableContainer';
import * as ownLocalStorage from '../../localStorageUtil';
import { axiosInstance } from '../../config';
import "./Dashboard.css"

function Dashboard() {
    const [numJobsSaved, setNumJobsSaved] = useState(
        JSON.parse(localStorage.getItem("savedJobs")).length
        )
    
    const [jobIds, setJobIds] = useState(ownLocalStorage.getAllIds())
    const [jobResult, setJobResult] = useState([])
    useEffect(() => {
        async function fetchData() {
            let config = {
                params: {
                    "jobIds": jobIds
                }
            }
            // get all the jobs from db by id
            const res = await axiosInstance.get("jobs/by-ids/", config);
            setJobResult(res.data)
        }
        fetchData();
    }, []); 
    return (
        <div className="dashboard">
            <h1>Your Saved Jobs</h1>
            <TableContainer jobResult={jobResult}
                setNumJobsSaved={setNumJobsSaved}
                isHomeState={false}
                />
        </div>
    )
}

export default Dashboard