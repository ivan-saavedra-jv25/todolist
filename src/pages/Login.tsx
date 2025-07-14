import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/auth';


import './Login.css';



const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const response = await loginUser(email, password);

    setLoading(false);

    if (response.success) {
      localStorage.setItem('isAuthenticated', 'true');
      alert('Login exitoso');
      navigate('/');
    } else {
      setError('Credenciales inválidas');
    }
  };

  // ...existing code...
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <form
        onSubmit={handleSubmit}
        className="p-4 rounded shadow bg-white"
        style={{ minWidth: 320, maxWidth: 400, width: '100%' }}
      >
        <h2 className="mb-4 text-center">Login</h2>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Correo
          </label>
          <input
            id="email"
            type="email"
            className="form-control"
            placeholder="Correo"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            className="form-control"
            placeholder="Contraseña"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary w-100"
          disabled={loading}
        >
          {loading ? 'Ingresando...' : 'Ingresar'}
        </button>
        {error && (
          <div className="alert alert-danger mt-3 mb-0 py-2 text-center" role="alert">
            {error}
          </div>
        )}
      </form>
    </div>
  );
  // ...existing code...
};

export default Login;
