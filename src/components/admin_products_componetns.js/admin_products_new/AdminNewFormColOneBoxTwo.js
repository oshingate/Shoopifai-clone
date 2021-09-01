const AdminNewFormColOneBoxTwo = (props) => {
  return (
    <div className='box '>
      <h4>Image</h4>
      <div className='is-flex is-justify-content-center'>
        <fieldset className='file has-name is-boxed'>
          <label className='file-label'>
            <input
              className='file-input'
              type='file'
              name='image'
              value={props.product.image}
              onChange={(event) => {
                props.updateState(
                  props.setProduct,
                  'image',
                  event.target.value
                );
              }}
            />
            <span className='file-cta'>
              <span className='file-icon'>
                <i className='fas fa-upload'></i>
              </span>
              <span className='file-label'>Choose a file…</span>
            </span>
            <span className='file-name'>{props.product.image}</span>
          </label>
        </fieldset>
      </div>
    </div>
  );
};

export default AdminNewFormColOneBoxTwo;
