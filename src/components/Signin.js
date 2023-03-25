import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { showloading ,hideloading } from './Redux/Features/alertSlice';
import Navbar from './navbar';
import Footer from './Footer';
import Axios from 'axios';

const Signin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  
  const setToken = (userToken) => {
    localStorage.setItem('userToken', userToken);
  }

  const login = async (event) => {
    event.preventDefault();
    try {
      dispatch(showloading())
      const userData = await Axios.post('http://localhost:8001/login',
       {
        username: username,
        password: password,
      });
      dispatch(hideloading())

      if (userData.data.code === 200) {
        setToken(userData.data.token); // set the token in the local storage
        navigate('/patienthome');
      } else {
        setError('Wrong username or password');
      }
    } catch (error) {
      dispatch(hideloading())
      console.log(error);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <>
      <Navbar />

      <div className='signupimage'>
        <div className='signin_contents'>
          <div className='col-sm-6 col-md-4 col-md-offset-4'>
            <h1
              className='text-center login-title'
              style={{
                fontFamily: 'Lucida Handwriting',
                textDecoration: 'none',
              }}
            >
              Sign in to continue to{' '}
              <span style={{ color: 'white', fontWeight: 'bold' }}>We</span>
              <span style={{ fontWeight: 'bold' }}>Care</span>
            </h1>
            <div className='account-wall'>
              <img
                className='profile-img'
                src='https://www.citypng.com/public/uploads/preview/-115891627739whel2jtx7.png'
                alt=''
              />
              <form className='form-signin' action='' method='POST'>
              {error && <p style={{ color: 'red' ,textAlign:"center"}}>{error}</p>} {/* display error message if there is an error */}
                <input
                  type='text'
                  className='form-control'
                  placeholder='name'
                  style={{ textTransform: 'lowercase' }}
                  onChange={(e) => {
                    setUsername(e.target.value);
                    setError(null); // clear error message when the user types in the username field
                  }}
                  autoFocus
                  required
                />
                <input
                  type='password'
                  className='form-control'
                  placeholder='Password'
                  style={{ textTransform: 'lowercase' }}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError(null); // clear error message when the user types in the password field
                  }}
                  required
                />
                <button
                  className='btn btn-lg btn-primary btn-block'
                  value='LOGIN'
                  onClick={login}
                >
                  Sign in
                </button>
                <label className='checkbox pull-left'>
                  <input type='checkbox' value='remember-me' />
                  Remember me
                </label>
                
                <a href='#' className='pull-right need-help'>
                  Need help?{' '}
                </a>
                <span className='clearfix'></span>
              </form>
            </div>
            <a className='text-center new-account'>
              <Link to='/signup' style={{ textDecoration: 'none' }}>
                Create an account
              </Link>{' '}
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signin;
