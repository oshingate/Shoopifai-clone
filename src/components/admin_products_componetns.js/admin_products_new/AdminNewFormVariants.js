import AddNewVariant from './admin_new_form_variants/AddNewVariant';

const AdminNewFormVariants = (props) => {
  return (
    <div className='box'>
      <h4 className='mb-3'>Variants</h4>
      <fieldset>
        <label className='checkbox'>
          <input
            type='checkbox'
            name='has_variants'
            checked={props.product.has_variants}
            onChange={(event) => {
              props.updateState(
                props.setProduct,
                'has_variants',
                event.target.checked
              );
            }}
          />
          <span className='is-size-6 ml-3'>
            This product has multiple options, like different sizes or colors
          </span>
        </label>
      </fieldset>
      <hr />
      {props.product.has_variants ? <AddNewVariant /> : ''}
    </div>
  );
};

export default AdminNewFormVariants;
