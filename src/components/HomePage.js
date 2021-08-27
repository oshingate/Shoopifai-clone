import React, { useContext } from 'react';
import UserContext from '../contexts/UserContext';

const HomePage = (props) => {
  let { token, user } = useContext(UserContext);

  if (!token) {
    return NonLoggedPage();
  } else {
    return <></>;
  }
};

function NonLoggedPage() {
  return (
    <section className='nonLoggedPage-sec '>
      <div className='columns pt-6'>
        <div className='column auto'></div>
        <div className='column is-two-thirds has-text-centered'>
          <div className='mt-6'>
            <h2 className='title is-1'>Welcome to Shoopify.</h2>
          </div>
        </div>
        <div className='column auto'></div>
      </div>
    </section>
  );
}

export default HomePage;
