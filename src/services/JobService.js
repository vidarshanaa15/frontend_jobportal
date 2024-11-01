import axios from "axios";

const REST_API_JOB_URL = 'http://localhost:8080/api/jobs'

export const listJobs = () => axios.get(REST_API_JOB_URL);

export const createJob = (jobData) => axios.post(REST_API_JOB_URL, jobData)

export const getJobById = (jobId) => axios.get(`${REST_API_JOB_URL}/${jobId}`);