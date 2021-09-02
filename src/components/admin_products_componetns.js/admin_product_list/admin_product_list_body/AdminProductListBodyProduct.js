const AdminProductListBodyProduct = (props) => {
  return (
    <div className='product-list__body--product columns'>
      <div className='column is-1 is-flex is-align-content-center is-justify-content-center'>
        <label className='checkbox'>
          <input type='checkbox' />
        </label>
      </div>
      <div className='column is-1 is-flex is-align-content-center'>
        <img
          src={
            props.product.image === ''
              ? 'https://image.shutterstock.com/image-vector/man-icon-flat-vector-260nw-1371568223.jpg'
              : props.product.image
          }
          alt='userimg'
          className='image is-48x48 '
        />
      </div>
      <div className='column is-3 is-flex is-align-content-center'>
        <h4 className='h4'>{props.product.name}</h4>
      </div>
      <div className='column is-1 is-flex is-align-content-center'>
        <h4 className='h4'>
          <button class='button is-primary is-rounded is-small '>
            {props.product.product_status}
          </button>
        </h4>
      </div>

      <div className='column is-3 is-flex is-align-content-center'>
        <h4 className='h4'>{props.product.quantity} items in stock</h4>
      </div>
      <div className='column is-1 is-flex is-align-content-center'>
        <h4 className='h4'>{props.product.category_id.name}</h4>
      </div>
      <div className='column is-2 is-flex is-align-content-center'>
        <h4 className='h4'>{props.product.vendor}</h4>
      </div>
    </div>
  );
};

export default AdminProductListBodyProduct;
