import { useState } from 'react';

const AdminProductListFilterByTagName = (props) => {
  let [tagStr, setTagStr] = useState('');
  return (
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
                event.target.value.toLowerCase(),
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
  );
};

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
export default AdminProductListFilterByTagName;
