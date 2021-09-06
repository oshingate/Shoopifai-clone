const AdminInventoryListBodyVariant = (props) => {
  console.log(props.variant);
  return (
    <>
      {' '}
      <div className='product-list__body--product columns'>
        <div className='column auto is-flex is-align-items-center is-justify-content-center'>
          <label className='checkbox'>
            <input type='checkbox' />
          </label>
        </div>
        <div className='column is-1 is-flex is-align-items-center is-justify-content-center'>
          <img
            src='https://image.shutterstock.com/image-vector/man-icon-flat-vector-260nw-1371568223.jpg'
            alt='userimg'
            className='image is-48x48'
          />
        </div>
        <div className='column is-2 is-flex is-align-items-center is-justify-content-center'>
          <h4 className='h4'>{props.variant.productName}</h4>
        </div>
        <div className='column is-1 is-flex is-align-items-center is-justify-content-center'>
          <h4 className='h4'> No SKU</h4>
        </div>

        <div className='column is-2 is-flex is-align-items-center is-justify-content-center'>
          <h4 className='h4'>Stop Selling</h4>
        </div>
        <div className='column is-1 is-flex is-align-items-center is-justify-content-center'>
          <h4 className='h4'>0</h4>
        </div>
        <div className='column is-1 is-flex is-align-items-center is-justify-content-center'>
          <h4 className='h4'>0</h4>
        </div>
        <div className='column is-4 is-flex is-align-items-center is-justify-content-center'>
          <h4 className='h4'>Edit quantity available</h4>
        </div>
      </div>
      <hr />
    </>
  );
};

export default AdminInventoryListBodyVariant;
