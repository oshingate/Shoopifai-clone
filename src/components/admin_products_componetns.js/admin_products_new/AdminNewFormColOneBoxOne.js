const AdminNewFormColOneBoxOne = (props) => {
  return (
    <div className='box'>
      <fieldset className='field'>
        <label className='label'>Title</label>
        <div className='control'>
          <input
            className='input'
            type='text'
            placeholder='Enter Title'
            name='name'
            value={props.product.name}
            onChange={(event) => {
              props.updateState(props.setProduct, 'name', event.target.value);
            }}
          />
        </div>
      </fieldset>

      <fieldset className='field'>
        <label className='label'>Description</label>
        <div className='control'>
          <textarea
            className='textarea'
            placeholder='Description'
            name='description'
            value={props.product.description}
            onChange={(event) => {
              props.updateState(
                props.setProduct,
                'description',
                event.target.value
              );
            }}
          ></textarea>
        </div>
      </fieldset>
    </div>
  );
};

export default AdminNewFormColOneBoxOne;
