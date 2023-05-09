import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const logIn = async () => {
    try {
      await signInWithEmailAndPassword(getAuth(), email, password);
      navigate('/articles');
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      <h1>Log In</h1>
      {error && <p className="error">{error}</p>}
      <form action="">
        <fieldset>
          <legend>Login</legend>
          <ul>
            <li className="form-group">
              <label htmlFor="username">Username:</label>
              <input 
                type="text" 
                id="username"
                placeholder="Your email address"
                value={email}
                onChange={e => setEmail(e.target.value)} 
              />
            </li>
            <li className="form-group">
              <label htmlFor="password">Password:</label>
              <input 
                type="password" 
                id="password" 
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </li>
          </ul>
          <button 
           type="submit"
           onClick={logIn}
          >
            Log In</button>
          <Link to="/create-account">Don't have an account? Create one here</Link>
        </fieldset>
      </form>
    </>
  )
}

export default LoginPage;