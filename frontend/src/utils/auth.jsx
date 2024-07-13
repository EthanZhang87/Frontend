import { Button } from '../components/ui/button';
import PropTypes from 'prop-types';

const Authentication = ({ setIsAuthenticated }) => {
    const handleJoinWaitlist = () => {
        // Simulate authentication logic
        setIsAuthenticated(true);
    };

    return (
        <div className="mt-8">
            <h2 className="text-4xl font-bold mb-4">Join the Waitlist</h2>
            <p className="text-xl mb-4">Sign up to gain access to the upload feature and more exciting content.</p>
            <Button onClick={handleJoinWaitlist} className="text-xl px-6 py-3">Join Waitlist</Button>
        </div>
    );
};

Authentication.propTypes = {
    setIsAuthenticated: PropTypes.func.isRequired,
};

export default Authentication;