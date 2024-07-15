// frontend\src\App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/index';
import Dashboard from './pages/Dashboard';
// import AnalysisPage from './pages/AnalysisPage';
import { AuthProvider } from './context/AuthContext';
import LoginForm from './pages/Login.tsx';
import PrivateRoute from './components/PrivateRoute';
import Onboarding from './pages/Onboarding';
import './index.css';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/dashboard-force" element={<Dashboard />} />
          {/* To be Implenented: */}
          {/* <Route path="/analysis/:matchId" element={<AnalysisPage />} /> */}
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
