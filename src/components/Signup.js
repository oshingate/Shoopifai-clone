import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { signupUrl } from '../constants/constants';

async function handleSignup(email, password, username, setError, history) {
  let body = { email, password, username };
  let res = await axios.post(signupUrl, body);

  let { user, error } = res.data;

  if (error) {
    console.log(error);
    setError(error);
  } else {
    history.push('/');
  }
}

const Signup = (props) => {
  let [email, setEmail] = useState('');
  let [username, setUsername] = useState('');
  let [password, setPassword] = useState('');
  let [error, setError] = useState({ email: '', username: '', password: '' });
  useEffect(() => {}, [email, password, username, error]);

  return (
    <>
      <section className='loginSec'>
        <div className='columns'>
          <div className='column auto'></div>
          <div className='column box is-two-fifths mt-6'>
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
                handleSignup(
                  email,
                  password,
                  username,
                  setError,
                  props.history
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
                <label className='label' htmlFor='username'>
                  Username
                </label>
                <div className='control'>
                  <input
                    className='input'
                    name='username'
                    type='text'
                    placeholder='enter username'
                    value={username}
                    onChange={(event) => {
                      setUsername(event.target.value);
                    }}
                  />
                  <span className='error-span'>{error.username}</span>
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

              <button className='button is-primary'>Sign-Up</button>
            </form>
            <div className='box'>
              <h6>
                Already have account ? <NavLink to='/login'> Log-In </NavLink>
                here.
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

export default withRouter(Signup);
