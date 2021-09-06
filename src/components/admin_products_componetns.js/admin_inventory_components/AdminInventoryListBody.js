import AdminInventoryListBodyHeader from './admin_inventory_body_components/AdminInventoryListBodyHeader';
import AdminInventoryListBodyVariant from './admin_inventory_body_components/AdminInventoryListBodyVariant';

const AdminInventoryListBody = (props) => {
  if (props.variants.length > 0) {
    return (
      <div className='product-list__body my-3'>
        <AdminInventoryListBodyHeader />

        <ul>
          {!props.isFiltered
            ? props.variants.map((variant) => {
                return (
                  <li key={variant.slug}>
                    <AdminInventoryListBodyVariant variant={variant} />
                  </li>
                );
              })
            : props.filteredProducts.map((variant) => {
                return (
                  <li key={variant.slug}>
                    {/* <h2>filtered</h2> */}
                    {/* <AdminProductListBodyProduct variant={variant} /> */}
                  </li>
                );
              })}
        </ul>
      </div>
    );
  } else {
    return (
      <div className='is-flex is-align-content-center is-justify-content-center'>
        <div className='p-6 is-text-centered'>
          <h3> No Variants !!!</h3>
        </div>
      </div>
    );
  }
};

export default AdminInventoryListBody;
