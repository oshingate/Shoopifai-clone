import { NavLink } from 'react-router-dom';

const Aside = () => {
  return (
    <nav className='is-flex is-flex-direction-column is-justify-content-space-between'>
      <ul>
        <Home />
        <Orders />
        <Products />
        <Customers />
        <Allother />
      </ul>
      <ul>
        <li className='pri-nav'>
          {' '}
          <NavLink to='/admin/settings'>
            <i className='fas fa-cog'></i>Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Aside;

function Home() {
  return (
    <li className='pri-nav'>
      {' '}
      <NavLink to='/admin'>
        <i className='fas fa-home'></i>Home
      </NavLink>
    </li>
  );
}

function Orders() {
  return (
    <li className='pri-nav '>
      {' '}
      <NavLink
        to='/admin/orders'
        onClick={(event) => {
          event.target.parentElement.classList.toggle('active');
        }}
      >
        <i className='fas fa-cart-arrow-down'></i>Orders
      </NavLink>
      <ul>
        <li>
          {' '}
          <NavLink
            to='/admin/orders'
            className='sec-nav'
            activeClassName='sec-active'
          >
            <span>Orders</span>
          </NavLink>
        </li>
        <li>
          {' '}
          <NavLink
            to='/admin/ordersDrafts'
            className='sec-nav'
            activeClassName='sec-active'
          >
            <span>Drafts</span>
          </NavLink>
        </li>
        <li>
          {' '}
          <NavLink
            to='/admin/ordersCheckouts'
            className='sec-nav'
            activeClassName='sec-active'
          >
            <span> Abondoned Checkouts</span>
          </NavLink>
        </li>
      </ul>
    </li>
  );
}

function Products() {
  return (
    <li className='pri-nav'>
      {' '}
      <NavLink
        to='/admin/products?selectedView=all'
        onClick={(event) => {
          event.target.parentElement.classList.toggle('active');
        }}
      >
        <i className='fas fa-tag'></i>Products
      </NavLink>
      <ul>
        <li>
          {' '}
          <NavLink
            to='/admin/products?selectedView=all'
            className='sec-nav'
            activeClassName='sec-active'
          >
            <span> All Productss</span>
          </NavLink>
        </li>
        <li>
          {' '}
          <NavLink
            to='/admin/products/inventory'
            className='sec-nav'
            activeClassName='sec-active'
          >
            <span>Inventory</span>
          </NavLink>
        </li>
        <li>
          {' '}
          <NavLink
            to='/admin/transfers'
            className='sec-nav'
            activeClassName='sec-active'
          >
            <span>Transfers</span>
          </NavLink>
        </li>
        <li>
          {' '}
          <NavLink
            to='/admin/collections'
            className='sec-nav'
            activeClassName='sec-active'
          >
            <span>Collections</span>
          </NavLink>
        </li>
        <li>
          {' '}
          <NavLink
            to='/admin/gift_cards'
            className='sec-nav'
            activeClassName='sec-active'
          >
            <span>Gift Cards</span>
          </NavLink>
        </li>
      </ul>
    </li>
  );
}
function Customers() {
  return (
    <li className='pri-nav'>
      {' '}
      <NavLink to='/admin/customer'>
        <i className='fas fa-user'></i>Customer
      </NavLink>
    </li>
  );
}

function Allother() {
  return (
    <>
      <li className='pri-nav'>
        {' '}
        <NavLink to='/admin/analytics'>
          <i className='fas fa-signal'></i>Analytics
        </NavLink>
      </li>
      <li className='pri-nav'>
        {' '}
        <NavLink to='/admin/marketing'>
          <i className='fas fa-bullhorn'></i>Marketing
        </NavLink>
      </li>
      <li className='pri-nav'>
        {' '}
        <NavLink to='/admin/discounts'>
          <i className='fas fa-percent'></i>Discounts
        </NavLink>
      </li>
      <li className='pri-nav'>
        {' '}
        <NavLink to='/admin/apps'>
          <i className='fab fa-app-store-ios'></i>Apps
        </NavLink>
      </li>
    </>
  );
}
