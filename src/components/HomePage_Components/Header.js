import { NavLink } from 'react-router-dom';

const Header = (props) => {
  console.log('rendered header', props);
  return (
    <header className='header p-1'>
      <div className='columns p-1 m-auto'>
        <div className='column is-one-fifth is-flex is-justify-content-flex-start is-align-content-center '>
          {' '}
          <img
            className='image is-32x32'
            src='https://d29fhpw069ctt2.cloudfront.net/icon/image/38692/preview.svg'
            alt='Workflow'
          />
          <strong className='is-size-5'>Shoopify</strong>
        </div>
        {props.isLogged ? (
          <>
            <div className='column auto '>
              <div className='control has-icons-left has-icons-right has-background-grey'>
                <input
                  className='input is-small'
                  type='email'
                  placeholder='Email'
                />
                <span className='icon is-small is-left'>
                  <i className='fas fa-search'></i>
                </span>
              </div>
            </div>
            <div className='column is-one-fifth '>
              <h3 className='has-text-weight-semibold is-size-6 has-text-centered'>
                {props.user.username}
              </h3>
            </div>
          </>
        ) : (
          <>
            {' '}
            <div className='column auto '></div>
            <div className='column is-one-fifth '>
              <div className='buttons are-small'>
                <NavLink to='/signup' className='button is-success is-active'>
                  Sign-up
                </NavLink>
                <NavLink to='/login' className='button is-primary'>
                  Log-in
                </NavLink>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
