const AdminNewFormPrice = (props) => {
  return (
    <div className='box'>
      <h4 className='mb-3'>Price</h4>
      <div className='columns'>
        <div className='column is-half'>
          {' '}
          <fieldset className='field'>
            <label className='label'>Price</label>
            <p className='control has-icons-left '>
              <input
                className='input'
                name='price'
                type='number'
                placeholder='0.00'
                value={props.product.price}
                onChange={(event) => {
                  props.updateState(
                    props.setProduct,
                    'price',
                    event.target.value
                  );
                }}
              />
              <span className='icon is-small is-left'>
                <i className='fas fa-rupee-sign'></i>
              </span>
            </p>
          </fieldset>
        </div>

        <div className='column is-half'>
          {' '}
          <fieldset className='field'>
            <label className='label'>Compare At Price</label>
            <p className='control has-icons-left '>
              <input className='input' type='number' placeholder='0.00' />
              <span className='icon is-small is-left'>
                <i className='fas fa-rupee-sign'></i>
              </span>
            </p>
          </fieldset>
        </div>
      </div>

      {/* <hr /> */}
      <hr />
      <div className='columns'>
        <div className='column is-half'>
          {' '}
          <fieldset className='field'>
            <label className='label'>Cost Per Item</label>
            <p className='control has-icons-left '>
              <input
                className='input'
                type='number'
                name='cost_per_item'
                placeholder='0.00'
                value={props.product.cost_per_item}
                onChange={(event) => {
                  props.updateState(
                    props.setProduct,
                    'cost_per_item',
                    event.target.value
                  );
                }}
              />
              <span className='icon is-small is-left'>
                <i className='fas fa-rupee-sign'></i>
              </span>
            </p>
          </fieldset>
        </div>

        <div className='column is-half'> {/* add data later */}</div>
      </div>
      <label className='checkbox'>
        <input
          type='checkbox'
          name='is_taxable'
          checked={props.product.is_taxable}
          onChange={(event) => {
            props.updateState(
              props.setProduct,
              'is_taxable',
              event.target.checked
            );
          }}
        />
        <span className='is-size-6 ml-3'>Charge tax On this product</span>
      </label>
    </div>
  );
};

export default AdminNewFormPrice;
