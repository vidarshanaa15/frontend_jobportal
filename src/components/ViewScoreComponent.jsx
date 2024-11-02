import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getJobById } from '../services/JobService';

const ViewScoreComponent = () => {
    const { jobId } = useParams();
    const [job, setJob] = useState(null);

    useEffect(() => {
        const fetchJob = async () => {
            try {
                const response = await getJobById(jobId);
                setJob(response.data);
            } catch (error) {
                console.error("Error fetching job:", error);
            }
        };

        fetchJob();
    }, [jobId]);

    if (!job) return <div>Loading...</div>;

    return (
        <div className="container mt-4">
            <h2 className='text-center'>View scores for {job.job}</h2>
        </div>
    );
}

export default ViewScoreComponent