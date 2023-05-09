import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const CreateAccountPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const createAccount = async () => {
    try {
      if (password !== confirmPassword) {
        setError('Passwords do not match');
        return;
      }
      await createUserWithEmailAndPassword(getAuth(), email, password);
      navigate('/articles');
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      <h1>Create an account</h1>
      {error && <p className="error">{error}</p>}
      <form action="">
        <fieldset>
          <legend>Create Account</legend>
          <ul>
            <li className="form-group">
              <label htmlFor="username">Username:</label>
              <input 
                type="text" 
                id="username"
                value={email}
                onChange={e => setEmail(e.target.value)} 
                placeholder="Your email address"
              />
            </li>
            <li className="form-group">
              <label htmlFor="password">Password:</label>
              <input 
                type="password" 
                id="password" 
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Your password"
              />
            </li>
            <li className="form-group">
              <label htmlFor="password">Confirm Password:</label>
              <input 
                type="password" 
                id="password" 
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                placeholder="Re-enter your password"
              />
            </li>
          </ul>
          <button 
           type="submit"
           onClick={createAccount}
          >
            Create Account</button>
          <Link to="/login">Already have an account? Log in here.</Link>
        </fieldset>
      </form>
    </>
  )
}

export default CreateAccountPage;