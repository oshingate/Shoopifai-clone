import AdminProductListBodyHeader from './admin_product_list_body/AdminProductListBodyHeader';
import AdminProductListBodyProduct from './admin_product_list_body/AdminProductListBodyProduct';

const AdminProductListBody = (props) => {
  if (props.products.length > 0) {
    return (
      <div className='product-list__body my-3'>
        <AdminProductListBodyHeader />
        <ul>
          {props.products.map((product) => {
            return (
              <li key={product.slug}>
                <AdminProductListBodyProduct product={product} />
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
          <h3> No {props.selectedView} product !!!</h3>
        </div>
      </div>
    );
  }
};

export default AdminProductListBody;
