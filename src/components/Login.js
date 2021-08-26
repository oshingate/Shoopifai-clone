import { useState } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Login = (props) => {
  let [email, setEmail] = useState('oshingate@gmail.com2');
  let [password, setPassword] = useState('admin1234');

  return (
    <>
      <section className='loginSec'>
        <div className='columns'>
          <div className='column auto'></div>
          <div className='column box is-two-fifths mt-40 '>
            <div className='is-flex is-align-content-center'>
              <div>
                {' '}
                <img
                  className='mx-auto h-12 w-auto'
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

                props.dispatch({ type: 'LOGIN_ACTION', payload: {} });
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
                    value={props.email}
                    onChange={(event) => {
                      props.dispatch({
                        type: 'LOGIN_FIELD_UPDATE',
                        payload: { name: 'email', value: event.target.value },
                      });
                    }}
                  />
                  {/* <span>{props.error.email}</span> */}
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
                    value={props.value}
                    onChange={(event) => {
                      props.dispatch({
                        type: 'LOGIN_FIELD_UPDATE',
                        payload: {
                          name: 'password',
                          value: event.target.value,
                        },
                      });
                    }}
                  />
                  {/* <span>{props.error.password}</span> */}
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
            </div>
          </div>
          <div className='column auto'></div>
          <div className='column auto'></div>
        </div>
      </section>
    </>
  );
};

// function handleSubmit() {}

function mapStateToProps(state) {
  return {
    email: state.login.email,
    password: state.login.password,
    error: state.login.error,
  };
}

export default connect(mapStateToProps)(Login);
