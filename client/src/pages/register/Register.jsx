import { Link, useNavigate } from 'react-router-dom';
import './register.css';
import { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
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
      await axios.post('http://localhost:8800/api/auth/register', inputs);
      navigate('/login');
      //console.log(res);
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="register">
      <h1 className="register__title">Registrace</h1>
      <form className="register__form">
        <input
          required
          type="text"
          placeholder="Zadejte jméno"
          name="username"
          onChange={handleChange}
        />
        <input
          required
          type="email"
          placeholder="Zadejte e-mailovou adresu"
          name="email"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="Zadejte heslo"
          name="password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Registrovat</button>
        {err && <p>{err}</p>}
        <span>
          Již máte účet? <Link to="/login">Přihlásit se</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
