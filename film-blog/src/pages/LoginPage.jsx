import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  return (
    <>
      <h1>Log In</h1>
      <form action="">
        <fieldset>
          <input type="text" />
          <input type="password" />
          <button type="submit">Log In</button>
          
        </fieldset>
      </form>
    </>
  )
}

export default LoginPage;