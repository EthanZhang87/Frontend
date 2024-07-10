import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Chart } from 'react-chartjs-2';

const AnalysisPage = () => {
    const { matchId } = useParams();
    const [analysisData, setAnalysisData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/api/analysis/${matchId}`);
                setAnalysisData(response.data);
            } catch (error) {
                console.error('Error fetching analysis data:', error);
            }
        };
        fetchData();
    }, [matchId]);

    if (!analysisData) return <div>Loading...</div>;

    return (
        <div>
            <h1>Match Analysis</h1>
            <div>
                {/* Example of displaying analysis data using charts */}
                <Chart
                    data={analysisData.touchData}
                    type="bar"
                />
                {/* More charts and visualizations */}
            </div>
        </div>
    );
};

export default AnalysisPage;
