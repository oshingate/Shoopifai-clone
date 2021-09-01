const AdminNewFormInventory = (props) => {
  return (
    <div className='box'>
      <h4 className='mb-3'>Inventory</h4>
      <div className='columns'>
        <div className='column is-half'>
          {' '}
          <fieldset className='field'>
            <label className='label'>SKU (Stock Keeping Unit)</label>
            <div className='control'>
              <input
                className='input'
                type='text'
                placeholder=''
                name='sku'
                value={props.product.sku}
                onChange={(event) => {
                  props.updateState(
                    props.setProduct,
                    'sku',
                    event.target.value
                  );
                }}
              />
            </div>
          </fieldset>
        </div>

        <div className='column is-half'>
          {' '}
          <fieldset className='field'>
            <label className='label'>Barcode (ISBN, UPC, GTIN, etc.)</label>
            <div className='control'>
              <input
                className='input'
                type='text'
                placeholder=''
                name='barcode'
                value={props.product.barcode}
                onChange={(event) => {
                  props.updateState(
                    props.setProduct,
                    'barcode',
                    event.target.value
                  );
                }}
              />
            </div>
          </fieldset>
        </div>
      </div>

      <fieldset>
        <label className='checkbox'>
          <input type='checkbox' />
          <span className='is-size-6 ml-3'>Track quantity</span>
        </label>
      </fieldset>
      <fieldset>
        {' '}
        <label className='checkbox'>
          <input type='checkbox' />
          <span className='is-size-6 ml-3'>
            Continue selling when out of stock
          </span>
        </label>
      </fieldset>
      <hr />
      <h4 className='my-3'>Quantity</h4>
      <fieldset className='field'>
        <label className='label'>Available</label>
        <div className='control'>
          <input
            className='input'
            type='number'
            name='quantity'
            placeholder='0'
            value={props.product.quantity}
            onChange={(event) => {
              props.updateState(
                props.setProduct,
                'quantity',
                event.target.value
              );
            }}
          />
        </div>
      </fieldset>
    </div>
  );
};

export default AdminNewFormInventory;
