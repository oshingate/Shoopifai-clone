import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { variantUrl } from '../../../constants/constants';
import UserContext from '../../../contexts/UserContext';
import AdminInventoryListFilter from './AdminInventoryListFilter';
import Loader from '../../Loader';
import AdminInventoryListBody from './AdminInventoryListBody';

const AdminInventoryList = (props) => {
  let [variants, setVariants] = useState([]);
  let [isLoading, setIsLoading] = useState(true);
  let [isFiltered, setIsFiltered] = useState(false);
  let [filteredVariants, setFilteredVariants] = useState([]);
  let { token } = useContext(UserContext);

  useEffect(() => {
    async function fetchVariants(
      token,
      setVariants,
      setIsLoading,
      setFilteredVariants
    ) {
      let variants = await axios.get(
        variantUrl,

        {
          headers: {
            Authorization: token,
          },
        }
      );

      setVariants(variants.data.variants);
      setFilteredVariants([...variants.data.variants]);
      setIsLoading(false);
    }

    fetchVariants(token, setVariants, setIsLoading, setFilteredVariants);
  }, [token]);

  console.log(variants);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <section className='admin-inventory-sec admin-products-sec'>
      <div className='is-flex is-justify-content-space-between'>
        <h2 className='is-size-5 mb-5'>Inventory</h2>
        <ul className='product-sec-buttons is-flex'>
          <li>
            <button className='button is-light is-small'>Export</button>
          </li>
          <li>
            <button className='button is-light is-small'>Import</button>
          </li>
          <li>
            <NavLink to='/admin/products?selectedView=all'>
              <button className='button is-success is-small'>
                View Products
              </button>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className='block'>
        <div className='box product-list'>
          {/* inventory list header  */}

          <div className='product-list__header my-3'>
            <ul className='is-flex'>
              <NavLink to='/admin/products?selectedView=all'>
                <li>
                  <button className='button is-white is-small active'>
                    All
                  </button>
                </li>
              </NavLink>
            </ul>
          </div>

          {/* inventory list filter  */}

          <AdminInventoryListFilter />

          {/* inventory list body  */}

          <AdminInventoryListBody
            variants={variants}
            isFiltered={isFiltered}
            filteredVariants={filteredVariants}
          />
        </div>
      </div>
    </section>
  );
};

export default AdminInventoryList;
