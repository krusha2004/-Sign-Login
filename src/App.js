import React, { useState } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import './App.css';

const App = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="container">
      <h2 className="text-center mb-4">{isLogin ? 'Login' : 'Sign Up'}</h2>
      <div className="form-container">
        {isLogin ? <Login /> : <Signup />}
      </div>
      <div className="text-center mt-3">
        <button
          className="btn btn-link"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
        </button>
      </div>
    </div>

  );
};

export default App;
