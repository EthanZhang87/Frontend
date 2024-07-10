import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <h2>Previous Matches</h2>
            <ul>
                <li><Link to="/analysis/1">Match 1</Link></li>
                <li><Link to="/analysis/2">Match 2</Link></li>
                {/* List other matches */}
            </ul>
        </div>
    );
};

export default Dashboard;
