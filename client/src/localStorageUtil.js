// import useLocalStorage from "./hooks/useLocalStorage";
/**
 * save job to local storage
 */

export const addJob = (jobId) => {
    const savedJobs = JSON.parse(localStorage.getItem("savedJobs"))

    const newJob = {
        id: jobId,
        applied: null,
        oa: null,
        interview: null
    }
    savedJobs.push(newJob)
    localStorage.setItem("savedJobs", JSON.stringify(savedJobs))
}


export const deleteJob = (jobId) => {
    var savedJobs = JSON.parse(localStorage.getItem("savedJobs"))
    
    var asavedJobs = savedJobs.filter(job => job.id !== jobId)
    localStorage.setItem("savedJobs", JSON.stringify(asavedJobs))
}

export const getAllIds = () => {
    const savedJobs = JSON.parse(localStorage.getItem("savedJobs"))
    const jobIds = savedJobs.map((job)=> {
        return job.id
    })

    return jobIds
}


export const getJobById = (jobId) => {
    const savedJobs = JSON.parse(localStorage.getItem("savedJobs"))
    var pickedJob = savedJobs.filter(job => job.id === jobId)

    return pickedJob
}

export const setAppliedDate = (jobId, date) => {
    const savedJobs = JSON.parse(localStorage.getItem("savedJobs"))

    const newJobs = savedJobs.map(
        (job) => {
            if (job.id === jobId) {
                job.applied = date
            }
            return job
        }
    )
    localStorage.setItem("savedJobs", JSON.stringify(newJobs))
}


export const getAppliedDate = (jobId) => {

    const savedJobs = JSON.parse(localStorage.getItem("savedJobs"))
    var pickedJob = savedJobs.filter(job => job.id === jobId)
    // console.log("getAppliedDate>>>>>>>>>>");
    // console.log("jobId", jobId);
    // console.log("pickedJob.applied", pickedJob[0].applied);
    return pickedJob[0]?.applied
}



export const getOaDate = (jobId) => {
    const savedJobs = JSON.parse(localStorage.getItem("savedJobs"))
    var pickedJob = savedJobs.filter(job => job.id === jobId)
    return pickedJob[0]?.oa
}


export const setOaDate = (jobId, date) => {
    const savedJobs = JSON.parse(localStorage.getItem("savedJobs"))

    // set the oa date
    const newJobs = savedJobs.map(
        (job) => {
            if (job.id === jobId) {
                job.oa = date
            }
            return job
        }
    )
    localStorage.setItem("savedJobs", JSON.stringify(newJobs))
}



export const getInterviewDate = (jobId) => {
    const savedJobs = JSON.parse(localStorage.getItem("savedJobs"))
    var pickedJob = savedJobs.filter(job => job.id === jobId)
    return pickedJob[0]?.interview
}


export const setInterviewDate = (jobId, date) => {
    const savedJobs = JSON.parse(localStorage.getItem("savedJobs"))

    // set the oa date
    const newJobs = savedJobs.map(
        (job) => {
            if (job.id === jobId) {
                job.interview = date
            }
            return job
        }
    )
    localStorage.setItem("savedJobs", JSON.stringify(newJobs))
}