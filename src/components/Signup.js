import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Signup = (props) => {
  return (
    <>
      <section className='loginSec'>
        <div className='columns'>
          <div className='column auto'></div>
          <div className='column box is-two-fifths mt-20 '>
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

            <form className='box'>
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
                    value={props.username}
                    onChange={(event) => {
                      props.dispatch({
                        type: 'LOGIN_FIELD_UPDATE',
                        payload: {
                          name: 'username',
                          value: event.target.value,
                        },
                      });
                    }}
                  />
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
                    value={props.password}
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
                </div>
              </div>

              <button className='button is-primary'>Sign-Up</button>
            </form>
            <div className='box'>
              <h6>
                Already have account ? <NavLink to='/login'> Log-In </NavLink>
                here.
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
    username: state.login.username,
    password: state.login.password,
  };
}

export default connect(mapStateToProps)(Signup);
