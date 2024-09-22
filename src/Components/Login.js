import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'; 
import './Login.css';

function Login({ onLogin }) {
  return (
    <div className=''>
      <div className='lcard'>  
        <div className='login-card'>
          <h1 className='heading'>Admin Login</h1>
          <p className='pera'>Login to access your Admin Dashboard</p>
          <div className="mb-6">
            <div className="flex items-center border-b border-gray-300 py-2">
              <FontAwesomeIcon icon={faUser} className="text-gray-500 mr-4" />
              <input
                id="username"
                type="text"
                placeholder="Username"
                className="appearance-none bg-transparent border-none w-1/3 text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              />
            </div>
          </div>
          <div className="mb-6">
            <div className="flex items-center border-b border-gray-300 py-2">
              <FontAwesomeIcon icon={faLock} className="text-gray-500 mr-4" />
              <input
                id="password"
                type="password"
                placeholder="Password"
                className="appearance-none bg-transparent border-none w-1/3 text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={onLogin} // Call the onLogin function when the button is clicked
          >
            LOGIN
          </button>
        </div>
        </div>
      </div> 
    </div>
  );
}

export default Login;
