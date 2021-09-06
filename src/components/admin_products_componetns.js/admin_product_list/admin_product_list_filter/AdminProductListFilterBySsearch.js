import { useState } from 'react';

const AdminProductListFilterBySsearch = (props) => {
  let [filterStr, setFilterStr] = useState('');
  return (
    <div className='control   has-background-grey'>
      <input
        className='input is-small  '
        type='email'
        placeholder='Filter Products'
        value={filterStr}
        onChange={(event) => {
          handleFilterByStr(
            event.target.value.toLowerCase(),
            setFilterStr,
            props.setIsFiltered,
            props.filteredProducts,
            props.setFilteredProducts,
            props.products,
            filterStr
          );
        }}
      />
    </div>
  );
};

async function handleFilterByStr(
  value,
  setFilterStr,
  setIsFiltered,
  filteredProducts,
  setFilteredProducts,
  products,
  filterStr
) {
  if (value === '') {
    setIsFiltered(false);
    setFilterStr(value);
    setFilteredProducts(products);
  } else {
    if (filterStr.length === value.lenght) {
      setFilteredProducts(products);
    }
    setIsFiltered(true);
    setFilterStr(value);

    let arr = await filteredProducts.filter((ele) => {
      if (ele.name.toLowerCase().includes(value)) {
        return true;
      } else {
        return false;
      }
    });
    setFilteredProducts(arr);
  }
}

export default AdminProductListFilterBySsearch;
