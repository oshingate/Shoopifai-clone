const AdminProductListBody = (props) => {
  if (props.arrayOfProducts.length > 0) {
    return (
      <div className='product-list__body my-3'>
        <div className='product-list__body--header columns'>
          <div className='column is-1 is-flex is-align-content-center is-justify-content-center'>
            <label className='checkbox'>
              <input type='checkbox' />
            </label>
          </div>
          <div className='column is-1 is-flex is-align-content-center'>
            {/* <img
                    src='https://image.shutterstock.com/image-vector/man-icon-flat-vector-260nw-1371568223.jpg'
                    alt='userimg'
                    className='image is-48x48'
                  /> */}
          </div>
          <div className='column is-3 is-flex is-align-content-center'>
            <h4 className='h4'>Product</h4>
          </div>
          <div className='column is-1 is-flex is-align-content-center'>
            <h4 className='h4'>Status</h4>
          </div>

          <div className='column is-3 is-flex is-align-content-center'>
            <h4 className='h4'>Inventory</h4>
          </div>
          <div className='column is-1 is-flex is-align-content-center'>
            <h4 className='h4'>Type</h4>
          </div>
          <div className='column is-2 is-flex is-align-content-center'>
            <h4 className='h4'>Vendor</h4>
          </div>
        </div>
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
