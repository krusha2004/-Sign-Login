import React, { useState } from 'react';

const Signup = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = form;

    if (!name || !email || !password) {
      setError('All fields are required!');
      return;
    }

    if (!email.includes('@')) {
      setError('Please enter a valid email!');
      return;
    }

    const user = { name, email, password };
    localStorage.setItem('user', JSON.stringify(user));

    setError('');
    alert('Sign Up Successful! You can now login.');
    setForm({ name: '', email: '', password: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="form-group mb-3">
        <label>Name</label>
        <input type="text" name="name" className="form-control" value={form.name} onChange={(e) => handleChange(e)} />
      </div>
      <div className="form-group mb-3">
        <label>Email</label>
        <input type="email" name="email" className="form-control" value={form.email} onChange={(e) => handleChange(e)} />
      </div>
      <div className="form-group mb-3">
        <label>Password</label>
        <input type="password" name="password" className="form-control" value={form.password} onChange={(e) => handleChange(e)} />
      </div>
      <button className="btn btn-primary w-100" type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;
