import React from 'react';
import './Login.scss';
import { login } from '../../utils/http';
import Cookies from 'js-cookie';

function Login() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    login({ username, password })
      .then((res) => {
        Cookies.set('token', res.token);
        setPassword('');
        setUsername('');
        setError(null);
        window.location.href = '/admin';
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="login__wrapper">
      <h1 className="login__title">Login</h1>
      <form onSubmit={handleSubmit} className="login__form" action="#">
        <label htmlFor="email" className="login__label">
          Username:
        </label>
        <input
          type="text"
          id="email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="login__input"
          required
        />
        <label htmlFor="password" className="login__label">
          Password:
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login__input"
          required
        />
        <button type="submit" className="hero__button">
          Login
        </button>
        {error && <p className="login__error">{error}</p>}
      </form>
    </div>
  );
}

export default Login;
