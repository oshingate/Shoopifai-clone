import { NavLink, withRouter } from 'react-router-dom';
import queryString from 'query-string';
import { useContext, useEffect, useState } from 'react';
import AdminProductListHeader from './admin_product_list/AdminProductListHeader';
import AdminProductListFilter from './admin_product_list/AdminProductListFilter';
import AdminProductListBody from './admin_product_list/AdminProductListBody';
import axios from 'axios';
import { productsUrl } from '../../constants/constants';
import UserContext from '../../contexts/UserContext';

const AdminProducts = (props) => {
  let { token } = useContext(UserContext);
  let [products, setProducts] = useState([]);
  let [selectedView, setSelectedView] = useState('all');
  useEffect(() => {
    let query = queryString.parse(props.location.search);
    setSelectedView(query.selectedView);

    async function fetchData(setProducts) {
      let { data } = await axios.get(
        productsUrl + `getList?selectedView=${query.selectedView}`,

        {
          headers: {
            Authorization: token,
          },
        }
      );

      setProducts(data.products);
    }

    fetchData(setProducts);
  }, [props.location.search, token]);

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
            products={products}
            selectedView={selectedView}
          />
        </div>
      </div>
    </section>
  );
};

export default withRouter(AdminProducts);
