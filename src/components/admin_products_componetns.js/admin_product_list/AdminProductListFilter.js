import { useState } from 'react';

function handleFilterByStr(
  value,
  setFilterStr,
  setIsFiltered,
  filteredProducts,
  setFilteredProducts,
  products
) {
  if (value === '') {
    setIsFiltered(false);
    setFilterStr(value);
    setFilteredProducts(products);
  } else {
    setIsFiltered(true);
    setFilterStr(value);

    let arr = filteredProducts.filter((ele) => {
      if (ele.name.includes(value)) {
        return true;
      } else {
        return false;
      }
    });
    setFilteredProducts(arr);
    // console.log('filtered', arr, filteredProducts);
  }
}

function handleTagSearch(
  value,
  setTagStr,
  setIsFiltered,
  products,
  setFilteredProducts,
  filteredProducts
) {
  if (value === '') {
    setIsFiltered(false);
    setTagStr(value);
    setFilteredProducts(products);
  } else {
    setIsFiltered(true);
    setTagStr(value);
    let arr = filteredProducts.filter((ele) => {
      let ans = false;
      ele.tags.forEach((tag) => {
        if (tag.toLowerCase().includes(value)) {
          ans = true;
        }
      });

      return ans;
    });
    setFilteredProducts(arr);
    // console.log('filtered', arr);
  }
}

const AdminProductListFilter = (props) => {
  let [filterStr, setFilterStr] = useState('');
  let [tagStr, setTagStr] = useState('');

  return (
    <div className='product-list__filters my-3'>
      <div className='columns'>
        <div className='column is-one-fifths'>
          {' '}
          <div className='control   has-background-grey'>
            <input
              className='input is-small  '
              type='email'
              placeholder='Filter Products'
              value={filterStr}
              onChange={(event) => {
                handleFilterByStr(
                  event.target.value,
                  setFilterStr,
                  props.setIsFiltered,
                  props.filteredProducts,
                  props.setFilteredProducts,
                  props.products
                );
              }}
            />
          </div>
        </div>

        <div className='column is-two-fifths'>
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

            <div className='navbar-item has-dropdown is-hoverable w-full'>
              <p className='control navbar-link py-4 button is-small'>
                <span>Tagged With</span>
              </p>
              <div className='navbar-dropdown is-boxed'>
                <fieldset className='navbar-item'>
                  {' '}
                  <input
                    className='input'
                    type='text'
                    placeholder='search here for tag'
                    value={tagStr}
                    onChange={(event) => {
                      handleTagSearch(
                        event.target.value,
                        setTagStr,
                        props.setIsFiltered,
                        props.products,
                        props.setFilteredProducts,
                        props.filteredProducts
                      );
                    }}
                  />
                </fieldset>
                <button
                  className='button is-small'
                  onClick={(event) => {
                    props.setIsFiltered(false);
                    setTagStr('');
                    props.setFilteredProducts(props.products);
                  }}
                >
                  clear
                </button>
              </div>
            </div>

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

        <div className='column is-two-fifths'>
          <ul className='is-flex'>
            <li>
              <button className='button  is-small right' disabled>
                <i className='fas fa-star'></i>
                <span>saved</span>
              </button>
            </li>
            <li>
              <div className='navbar-item has-dropdown is-hoverable'>
                <p className='control navbar-link py-4  button is-small'>
                  <span>
                    <i class='fas fa-arrows-alt-v mr-2'></i>sort
                  </span>
                </p>
                <div className='navbar-dropdown is-boxed'>
                  <fieldset className='navbar-item'>
                    {' '}
                    <label className='radio'>
                      <input
                        className='mr-2'
                        type='radio'
                        name='sortBy'
                        value='product title A-Z'
                      />
                      <span className='is-size-7'>Product title A-Z</span>
                    </label>
                  </fieldset>
                  <fieldset className='navbar-item'>
                    {' '}
                    <label className='radio'>
                      <input
                        className='mr-2'
                        type='radio'
                        name='sortBy'
                        value='product title Z-A'
                      />
                      <span className='is-size-7'>Product title Z-A</span>
                    </label>
                  </fieldset>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminProductListFilter;
