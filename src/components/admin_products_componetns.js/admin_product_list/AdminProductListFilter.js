import AdminProductListFilterByDate from './admin_product_list_filter/AdminProductListFilterByDate';
import AdminProductListFilterBySsearch from './admin_product_list_filter/AdminProductListFilterBySsearch';
import AdminProductListFilterByTagName from './admin_product_list_filter/AdminProductListFilterByTagName';

const AdminProductListFilter = (props) => {
  return (
    <div className='product-list__filters my-3'>
      <div className='columns'>
        {/* filter by search of product name */}

        <div className='column is-one-third'>
          <AdminProductListFilterBySsearch
            setIsFiltered={props.setIsFiltered}
            filteredProducts={props.filteredProducts}
            setFilteredProducts={props.setFilteredProducts}
            products={props.products}
          />{' '}
        </div>

        <div className='column is-one-third'>
          <div className='field has-addons'>
            <div className='navbar-item has-dropdown is-hoverable'>
              <p className='control navbar-link py-4  button is-small'>
                <span>Product Vendor</span>
              </p>
              <div className='navbar-dropdown is-boxed'>
                <fieldset className='navbar-item'>
                  {' '}
                  <label className='radio'>
                    <input
                      className='mr-2'
                      type='radio'
                      name='vendor'
                      value={props.user.username}
                    />
                    {props.user.username}
                  </label>
                </fieldset>
              </div>
            </div>

            {/* filter by search of Tag name */}

            <AdminProductListFilterByTagName
              setIsFiltered={props.setIsFiltered}
              products={props.products}
              setFilteredProducts={props.setFilteredProducts}
              filteredProducts={props.filteredProducts}
            />

            <div className='navbar-item has-dropdown is-hoverable w-full'>
              <p className='control navbar-link py-4  button is-small'>
                <span>More Filters</span>
              </p>
              <div className='navbar-dropdown is-boxed'>
                <fieldset className='navbar-item'>
                  {' '}
                  <input
                    className='input'
                    type='text'
                    placeholder='Text input'
                  />
                </fieldset>
              </div>
            </div>
          </div>
        </div>

        <div className='column is-one-third'>
          <ul className='is-flex'>
            <li>
              <button className='button  is-small ml-4 mr-3' disabled>
                <i className='fas fa-star'></i>
                <span>saved</span>
              </button>
            </li>

            {/* filter by date and name*/}

            <li>
              <AdminProductListFilterByDate
                setIsFiltered={props.setIsFiltered}
                filteredProducts={props.filteredProducts}
                setFilteredProducts={props.setFilteredProducts}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminProductListFilter;
