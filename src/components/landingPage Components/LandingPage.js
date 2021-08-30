import React, { useContext } from 'react';
import UserContext from '../../contexts/UserContext';

const LandingPage = (props) => {
  let { token } = useContext(UserContext);

  if (!token) {
    return NonLoggedPage();
  } else {
    return <>hello</>;
  }
};

//component to display page for non logged user

function NonLoggedPage() {
  return (
    <section className='nonLoggedPage-sec '>
      <div className='columns pt-6'>
        <div className='column auto'></div>
        <div className='column is-two-thirds '>
          <div className='mt-6 has-text-centered'>
            <h2 className='title is-1'>Welcome to Shoopify.</h2>
          </div>
        </div>
        <div className='column auto'></div>
      </div>
    </section>
  );
}

export default LandingPage;
