import axios from 'axios';
import { useEffect, useState } from 'react';

import { NavLink, withRouter } from 'react-router-dom';
import { loginUrl } from '../../constants/constants';

async function handleFormSubmit(
  email,
  password,
  setError,
  history,
  updateIsLoggedIn
) {
  let body = { email: email, password: password };
  let res = await axios.post(loginUrl, body);

  let { token, user, error } = res.data;

  if (error) {
    setError(error);
  } else {
    localStorage.setItem('authToken', token);
    updateIsLoggedIn(true, user, null, token);

    history.push('/admin');
  }
}

//actual component

const Login = (props) => {
  let [email, setEmail] = useState('oshingate@gmail.com2');
  let [password, setPassword] = useState('admin1234');
  let [error, setError] = useState({ email: '', password: '' });

  useEffect(() => {}, [email, password, error]);

  return (
    <>
      <section className='loginSec'>
        <div className='columns'>
          <div className='column auto'></div>
          <div className='column box is-two-fifths mt-6 '>
            <div className='is-flex is-align-content-center'>
              <div>
                {' '}
                <img
                  className='image is-48x48'
                  src='https://d29fhpw069ctt2.cloudfront.net/icon/image/38692/preview.svg'
                  alt='Workflow'
                />
              </div>

              <h2>Shoopify</h2>
            </div>

            <form
              className='box'
              onSubmit={(event) => {
                event.preventDefault();
                handleFormSubmit(
                  email,
                  password,
                  setError,
                  props.history,
                  props.updateIsLoggedIn
                );
              }}
            >
              <div className='field'>
                <label className='label' htmlFor='email'>
                  Email
                </label>
                <div className='control'>
                  <input
                    className='input'
                    name='email'
                    type='email'
                    placeholder='e.g. alex@example.com'
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                  />
                  <span className='error-span'>{error.email}</span>
                </div>
              </div>

              <div className='field'>
                <label className='label' htmlFor='password'>
                  Password
                </label>
                <div className='control'>
                  <input
                    className='input'
                    name='password'
                    type='password'
                    placeholder='********'
                    value={password}
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                  />
                  <span className='error-span'>{error.password}</span>
                </div>
              </div>

              <button type='submit' className='button is-primary'>
                Log in
              </button>
            </form>
            <div className='box'>
              <h6>
                New to Shoopify ? <NavLink to='/signup'> Sign-Up</NavLink> here.
              </h6>
              <h6>
                <NavLink to='/'> Go To Home</NavLink> .
              </h6>
            </div>
          </div>
          <div className='column auto'></div>
          <div className='column auto'></div>
        </div>
      </section>
    </>
  );
};

export default withRouter(Login);
