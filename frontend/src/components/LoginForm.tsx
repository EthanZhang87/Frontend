import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await login(email, password);
    if (success) {
      // Redirect to dashboard or home page
    } else {
      // Show error message
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = '/api/login/google-oauth2/';
  };

  const handleDiscordLogin = () => {
    window.location.href = '/api/login/discord/';
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Log In</button>
      </form>
      <div>
        <button onClick={handleGoogleLogin}>Login with Google</button>
        <button onClick={handleDiscordLogin}>Login with Discord</button>
      </div>
    </div>
  );
};

export default LoginForm;
