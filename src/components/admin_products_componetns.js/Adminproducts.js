import { NavLink, withRouter } from 'react-router-dom';
import queryString from 'query-string';
import { useContext, useEffect, useState } from 'react';
import AdminProductListHeader from './admin_product_list/AdminProductListHeader';
import AdminProductListFilter from './admin_product_list/AdminProductListFilter';
import AdminProductListBody from './admin_product_list/AdminProductListBody';
import axios from 'axios';
import { productsUrl } from '../../constants/constants';
import UserContext from '../../contexts/UserContext';
import Loader from '../Loader';

const AdminProducts = (props) => {
  let { token, user } = useContext(UserContext);
  let [products, setProducts] = useState([]);
  let [filteredProducts, setFilteredProducts] = useState([]);
  let [selectedView, setSelectedView] = useState('all');
  let [isFiltered, setIsFiltered] = useState(false);
  let [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    let query = queryString.parse(props.location.search);
    setSelectedView(query.selectedView);

    async function fetchData(setProducts, setFilteredProducts, setisLoading) {
      let { data } = await axios.get(
        productsUrl + `getList?selectedView=${query.selectedView}`,

        {
          headers: {
            Authorization: token,
          },
        }
      );

      setProducts(data.products);
      setFilteredProducts([...data.products]);
      setisLoading(false);
    }

    fetchData(setProducts, setFilteredProducts, setisLoading);
  }, [props.location.search, token]);

  if (isLoading) {
    return <Loader />;
  }
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

          <AdminProductListFilter
            setIsFiltered={setIsFiltered}
            filteredProducts={filteredProducts}
            setFilteredProducts={setFilteredProducts}
            products={products}
            user={user}
          />

          <AdminProductListBody
            products={products}
            selectedView={selectedView}
            isFiltered={isFiltered}
            filteredProducts={filteredProducts}
          />
        </div>
      </div>
    </section>
  );
};

export default withRouter(AdminProducts);
