import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getJobById, getApplicationByJobId } from '../services/JobService';

const ViewScoreComponent = () => {
    const { jobId } = useParams();
    const [job, setJob] = useState(null);
    const [applications, setApplications] = useState([]);

    useEffect(() => {
        const fetchJob = async () => {
            try {
                const response = await getJobById(jobId);
                setJob(response.data);
            } catch (error) {
                console.error("Error fetching job:", error);
            }
        };

        const fetchApplications = async () => {
            try {
                const response = await getApplicationByJobId(jobId);
                setApplications(response.data);
            } catch (error) {
                console.error("Error fetching applications:", error);
            }
        };

        fetchJob();
        fetchApplications();
    }, [jobId]);

    if (!job) return <div>Loading...</div>;

    return (
        <div className="container mt-4">
            <h2 className='text-center'>View scores for {job.job}</h2>
            <table className="table table-bordered table-hover">
                <thead className="table-dark">
                    <tr>
                        <th>Candidate Name</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {applications.map(app => (
                        <tr key={app.id}>
                            <td>{app.user_id}</td>
                            <td>{app.score}%</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ViewScoreComponent