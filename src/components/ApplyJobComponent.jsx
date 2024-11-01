import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getJobById } from '../services/JobService';

const ApplyJobComponent = () => {
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

    const handleApply = () => {
        alert(`Application submitted for the position of "${job.job}"`);
    };

    return (
        <div className="container mt-4">
            <h2>Apply for the position of "{job.job}"</h2>
            {/* Add application form fields here */}
            <button className="btn btn-success mt-3" onClick={handleApply}>Submit Application</button>
        </div>
    );
};

export default ApplyJobComponent;
