import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '@/pages/index';
import Dashboard from '@/pages/Dashboard';
import AnalysisPage from '@/pages/AnalysisPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/analysis/:matchId" element={<AnalysisPage />} />
            </Routes>
        </Router>
    );
};

export default App;
