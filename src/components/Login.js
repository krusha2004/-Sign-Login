import React, { useState } from 'react';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = form;

    if (!email || !password) {
      setError('Both fields are required!');
      return;
    }

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (!storedUser) {
      setError('No user found. Please sign up first.');
      return;
    }

    if (storedUser.email !== email || storedUser.password !== password) {
      setError('Invalid email or password!');
      return;
    }

    setError('');
    alert(`Welcome back, ${storedUser.name}!`);
    setForm({ email: '', password: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="form-group mb-3">
        <label>Email</label>
        <input type="email" name="email" className="form-control" value={form.email} onChange={handleChange} />
      </div>
      <div className="form-group mb-3">
        <label>Password</label>
        <input type="password" name="password" className="form-control" value={form.password} onChange={handleChange} />
      </div>
      <button className="btn btn-success w-100" type="submit">Login</button>
    </form>
  );
};

export default Login;
