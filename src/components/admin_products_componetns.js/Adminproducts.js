import { NavLink, withRouter } from 'react-router-dom';
import queryString from 'query-string';
import { useEffect, useState } from 'react';
import AdminProductListHeader from './admin_product_list/AdminProductListHeader';
import AdminProductListFilter from './admin_product_list/AdminProductListFilter';
import AdminProductListBody from './admin_product_list/AdminProductListBody';

const AdminProducts = (props) => {
  let [arrayOfProducts, setArrayOfProducts] = useState([]);
  let [selectedView, setSelectedView] = useState('all');
  useEffect(() => {
    let query = queryString.parse(props.location.search);
    setSelectedView(query.selectedView);
  }, [props.location.search]);
  console.log(selectedView);

  return (
    <section className='admin-products-sec'>
      <div className='is-flex is-justify-content-space-between'>
        <h2 className='is-size-5 mb-5'>Products</h2>
        <ul className='product-sec-buttons is-flex'>
          <li>
            <button className='button is-light is-small'>Export</button>
          </li>
          <li>
            <button className='button is-light is-small'>Import</button>
          </li>
          <li>
            <NavLink to='/admin/products/new'>
              <button className='button is-success is-small'>
                Add Product
              </button>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className='block'>
        <div className='box product-list'>
          <AdminProductListHeader selectedView={selectedView} />

          <AdminProductListFilter />

          <AdminProductListBody
            arrayOfProducts={arrayOfProducts}
            selectedView={selectedView}
          />
        </div>
      </div>
    </section>
  );
};

export default withRouter(AdminProducts);
