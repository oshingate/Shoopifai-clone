const AdminInventoryListFilter = (props) => {
  return (
    <div className='product-list__filters my-3'>
      <div className='columns'>
        {/* filter by search of product name */}

        <div className='column is-one-fifth'>
          <div className='field has-addons'>
            <div className='navbar-item has-dropdown is-hoverable'>
              <p className='control navbar-link py-4  button is-small'>
                <span>Filter</span>
              </p>
              <div className='navbar-dropdown is-boxed'>
                <fieldset className='navbar-item'>
                  {' '}
                  <label className='radio'>
                    <input
                      className='mr-2'
                      type='radio'
                      name='vendor'
                      //   value={props.user.username}
                    />
                    {/* {props.user.username} */}
                  </label>
                </fieldset>
              </div>
            </div>
          </div>
        </div>

        <div className='column is-three-fifth'>
          {' '}
          <div className='control   has-background-grey'>
            <input
              className='input is-small  '
              type='email'
              placeholder='Search Inventory'
              //   value={filterStr}
              onChange={(event) => {}}
            />
          </div>
        </div>

        <div className='column is-one-fifth'>
          <div className='field has-addons'>
            <div className='navbar-item has-dropdown is-hoverable'>
              <p className='control navbar-link py-4  button is-small'>
                <span>Sort By</span>
              </p>
              <div className='navbar-dropdown is-boxed'>
                <fieldset className='navbar-item'>
                  {' '}
                  <label className='radio'>
                    <input
                      className='mr-2'
                      type='radio'
                      name='vendor'
                      //   value={props.user.username}
                    />
                    {/* {props.user.username} */}
                  </label>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminInventoryListFilter;
