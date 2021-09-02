const AdminNewFormProductStatus = (props) => {
  return (
    <div className='box'>
      <h4 className='mb-3'>Product status</h4>
      <fieldset className='select is-small'>
        <select
          id='product_status'
          name='product_status'
          value={props.product.product_status}
          onChange={(event) => {
            props.updateState(
              props.setProduct,
              'product_status',
              event.target.value
            );
          }}
        >
          <option value='draft'>Draft</option>
          <option value='active'>Active</option>
          <option value='archived'>Archived</option>
        </select>
      </fieldset>
      <hr />
    </div>
  );
};

export default AdminNewFormProductStatus;
