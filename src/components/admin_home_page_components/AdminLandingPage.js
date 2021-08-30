import { Route, Switch } from 'react-router-dom';
import Aside from './Aside';
import AdminHomePage from './AdminHomePage1';
import AdminOrders from '../admin_orders_components/AdminOrders';
import ErrorPage from '../ErrorPage';
import AdminProducts from '../admin_products_componetns.js/Adminproducts';

const AdminLandingPage = (props) => {
  return (
    <>
      {' '}
      <aside className=' aside-sec column auto '>
        <Aside />
      </aside>
      <div className='column is-four-fifths p-5'>
        <Switch>
          <Route exact path='/admin'>
            <AdminHomePage />
          </Route>
          <Route exact path='/admin/orders'>
            <AdminOrders />
          </Route>
          <Route exact path='/admin/products'>
            <AdminProducts />
          </Route>
          <Route exact path='*'>
            <ErrorPage fallbackURL='/admin' />
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default AdminLandingPage;
