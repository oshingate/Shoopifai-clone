const AdminProductListFilterByDate = (props) => {
  return (
    <div className='navbar-item has-dropdown is-hoverable'>
      <p className='control navbar-link py-4  button is-small'>
        <span>
          <i className='fas fa-arrows-alt-v mr-2'></i>sort
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
              value='reset'
              onChange={(event) => {
                handlesort(
                  event.target.value,
                  props.setIsFiltered,
                  props.filteredProducts,
                  props.setFilteredProducts
                );
              }}
            />
            <span className='is-size-7'>Reset</span>
          </label>
        </fieldset>

        <fieldset className='navbar-item'>
          {' '}
          <label className='radio'>
            <input
              className='mr-2'
              type='radio'
              name='sortBy'
              value='product title A-Z'
              onChange={(event) => {
                handlesort(
                  event.target.value,
                  props.setIsFiltered,
                  props.filteredProducts,
                  props.setFilteredProducts
                );
              }}
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
              onChange={(event) => {
                handlesort(
                  event.target.value,
                  props.setIsFiltered,
                  props.filteredProducts,
                  props.setFilteredProducts
                );
              }}
            />
            <span className='is-size-7'>Product title Z-A</span>
          </label>
        </fieldset>

        <fieldset className='navbar-item'>
          {' '}
          <label className='radio'>
            <input
              className='mr-2'
              type='radio'
              name='sortBy'
              value='created oldest first'
              onChange={(event) => {
                handlesort(
                  event.target.value,
                  props.setIsFiltered,
                  props.filteredProducts,
                  props.setFilteredProducts
                );
              }}
            />
            <span className='is-size-7'>Created (Oldest First)</span>
          </label>
        </fieldset>

        <fieldset className='navbar-item'>
          {' '}
          <label className='radio'>
            <input
              className='mr-2'
              type='radio'
              name='sortBy'
              value='created newwest first'
              onChange={(event) => {
                handlesort(
                  event.target.value,
                  props.setIsFiltered,
                  props.filteredProducts,
                  props.setFilteredProducts
                );
              }}
            />
            <span className='is-size-7'>Created (Newest First)</span>
          </label>
        </fieldset>

        <fieldset className='navbar-item'>
          {' '}
          <label className='radio'>
            <input
              className='mr-2'
              type='radio'
              name='sortBy'
              value='updated oldest first'
              onChange={(event) => {
                handlesort(
                  event.target.value,
                  props.setIsFiltered,
                  props.filteredProducts,
                  props.setFilteredProducts
                );
              }}
            />
            <span className='is-size-7'>Updated (Oldest First)</span>
          </label>
        </fieldset>

        <fieldset className='navbar-item'>
          {' '}
          <label className='radio'>
            <input
              className='mr-2'
              type='radio'
              name='sortBy'
              value='updated newwest first'
              onChange={(event) => {
                handlesort(
                  event.target.value,
                  props.setIsFiltered,
                  props.filteredProducts,
                  props.setFilteredProducts
                );
              }}
            />
            <span className='is-size-7'>Updated (Newest First)</span>
          </label>
        </fieldset>
      </div>
    </div>
  );
};

function handlesort(
  value,
  setIsFiltered,
  filteredProducts,
  setFilteredProducts
) {
  console.log(value);
  setIsFiltered(true);
  if (value === 'reset') {
    setIsFiltered(false);
  } else if (value === 'product title A-Z') {
    console.log('called');

    let sorted = filteredProducts.sort((a, b) => {
      var nameA = a.name.toUpperCase(); // ignore upper and lowercase
      var nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
    setFilteredProducts(sorted);
  } else if (value === 'product title Z-A') {
    let sorted = filteredProducts.sort((a, b) => {
      var nameA = a.name.toUpperCase(); // ignore upper and lowercase
      var nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA > nameB) {
        return -1;
      }
      if (nameA < nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
    setFilteredProducts(sorted);
  } else if (value === 'created oldest first') {
    let sorted = filteredProducts.sort((a, b) => {
      if (a.createdAt < b.createdAt) {
        return -1;
      }
      if (a.createdAt > b.createdAt) {
        return 1;
      }

      // names must be equal
      return 0;
    });
    setFilteredProducts(sorted);
  } else if (value === 'created newwest first') {
    let sorted = filteredProducts.sort((a, b) => {
      if (a.createdAt > b.createdAt) {
        return -1;
      }
      if (a.createdAt < b.createdAt) {
        return 1;
      }

      // names must be equal
      return 0;
    });
    setFilteredProducts(sorted);
  } else if (value === 'updated oldest first') {
    let sorted = filteredProducts.sort((a, b) => {
      if (a.updatedAt < b.updatedAt) {
        return -1;
      }
      if (a.updatedAt > b.updatedAt) {
        return 1;
      }

      // names must be equal
      return 0;
    });
    setFilteredProducts(sorted);
  } else if (value === 'updated newwest first') {
    let sorted = filteredProducts.sort((a, b) => {
      if (a.updatedAt > b.updatedAt) {
        return -1;
      }
      if (a.updatedAt < b.updatedAt) {
        return 1;
      }

      // names must be equal
      return 0;
    });
    setFilteredProducts(sorted);
  }
}
export default AdminProductListFilterByDate;
