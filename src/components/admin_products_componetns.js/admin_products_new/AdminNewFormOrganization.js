import AdminNewFormOrganizationCategories from './AdminNewFormOrganizationCategories';
import AdminNewFormOrganizationCollection from './AdminNewFormOrganizationCollection';

const AdminNewFormOrganization = (props) => {
  return (
    <div className='box'>
      <h4 className='mb-3'>Organization</h4>
      <label className='label'>Vendor</label>
      <fieldset className='select is-small'>
        <select
          id='vendor'
          name='vendor'
          value={props.product.vendor}
          onChange={(event) => {
            props.updateState(props.setProduct, 'vendor', event.target.value);
          }}
        >
          <option value=''>select vendor</option>
          <option value={props.user.username}>{props.user.username}</option>
        </select>
      </fieldset>
      <hr />

      {/* Categories */}

      <label className='label'>Product Type</label>
      <AdminNewFormOrganizationCategories
        product={props.product}
        updateState={props.updateState}
        setProduct={props.setProduct}
      />
      <hr />

      {/* collections */}

      <AdminNewFormOrganizationCollection
        product={props.product}
        updateState={props.updateState}
        setProduct={props.setProduct}
      />
      <hr />

      <fieldset className='field'>
        <label className='label'>Tags</label>
        <div className='control'>
          <input
            className='input'
            type='text'
            name='tags'
            placeholder='cotton,design,2021'
            value={props.product.tags}
            onChange={(event) => {
              props.updateState(props.setProduct, 'tags', event.target.value);
            }}
          />
        </div>
      </fieldset>
    </div>
  );
};

export default AdminNewFormOrganization;
