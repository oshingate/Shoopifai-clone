import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <section className='error-page'>
      <div className='columns mt-6'>
        <div className='column auto'></div>
        <div className='column is-three-quarters has-text-centered'>
          <div className='box'>
            <span className='is-size-2'>
              <span className='has-text-danger'>Error 404</span>- Page Not Found
            </span>
            <div className='mt-6 is-size-3 has-text-centered'>
              <NavLink to='/' className='button is-link'>
                Go To Home
              </NavLink>
            </div>
          </div>
        </div>

        <div className='column auto'></div>
      </div>
    </section>
  );
};

export default ErrorPage;
