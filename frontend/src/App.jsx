// frontend\src\App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/index';
import AOSInit from './utils/aos';
import Dashboard from './pages/Dashboard';
// import AnalysisPage from './pages/AnalysisPage';
import { AuthProvider } from './context/AuthContext';
import LoginForm from './components/LoginForm';
import PrivateRoute from './components/PrivateRoute';
import './index.css';

const App = () => {
  return (
    <AuthProvider>
      <AOSInit />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          {/* To be Implenented: */}
          {/* <Route path="/analysis/:matchId" element={<AnalysisPage />} /> */}
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
