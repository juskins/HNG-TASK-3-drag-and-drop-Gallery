import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'; // Import useHistory from react-router-dom
import app from './firebase';

const auth = getAuth(app);

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate(); // Use the useHistory hook to get the history object

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // User successfully logged in
      navigate('/gallery'); // Use history.push to navigate to '/gallery'
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Login</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Log In</button>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default LoginForm;
