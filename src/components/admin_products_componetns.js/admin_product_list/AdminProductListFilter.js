const AdminProductListFilter = (props) => {
  return (
    <div className='product-list__filters my-3'>
      <div className='columns'>
        <div className='column is-two-fifths'>
          {' '}
          <div className='control has-icons-left has-icons-right has-background-grey'>
            <input
              className='input is-small  '
              type='email'
              placeholder='Filter Products'
            />
            <span className='icon is-small is-left'>
              <i className='fas fa-search'></i>
            </span>
          </div>
        </div>

        <div className='column is-two-fifths'>
          <div class='field has-addons'>
            <p class='control'>
              <button class='button is-small'>
                <span>Product Vendor</span>
                <span class='icon is-small'>
                  <i class='fas fa-caret-down'></i>
                </span>
              </button>
            </p>
            <p class='control'>
              <button class='button is-small'>
                <span>Tagged With</span>
                <span class='icon is-small'>
                  <i class='fas fa-caret-down'></i>
                </span>
              </button>
            </p>
            <p class='control'>
              <button class='button is-small'>
                <span>More Filters</span>
              </button>
            </p>
          </div>
        </div>

        <div className='column auto'>
          <ul className='is-flex'>
            <li>
              <button class='button  is-small right'>
                <i class='fas fa-star'></i>
                <span>saved</span>
              </button>
            </li>
            <li>
              <button class='button is-small right'>
                <i class='fas fa-arrows-alt-v'></i>
                <span>sort</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminProductListFilter;
