import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  });
  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8800/api/auth/login', inputs);
      navigate('/');
      //console.log(res);
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="login">
      <h1 className="login__title">Přihlášení</h1>
      <form className="login__form">
        <input
          type="text"
          name="username"
          placeholder="Zadejte jméno"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Zadejte heslo"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Přihlásit</button>
        {err && <p>{err}</p>}
        <span>
          Ještě nemáte účet? <Link to="/register">Registrovat</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
