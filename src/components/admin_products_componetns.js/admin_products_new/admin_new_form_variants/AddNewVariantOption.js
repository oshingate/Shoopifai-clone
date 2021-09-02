const AddNewVariantOption = (props) => {
  console.log(props);
  return (
    <div>
      <div className='is-flex is-justify-content-space-between mb-1'>
        <span className='is-size-6 mr-2'>option 1</span>
        <span className='button is-danger is-small'>remove</span>
      </div>
      <div className='columns '>
        <div className='column auto'>
          <fieldset className='select is-small'>
            <select
              id='collections'
              name='collections'
              value={props.option.by}
              onChange={(event) => {}}
            >
              {props.arrOfVariants.map((vari) => {
                return (
                  <option value={vari} key={vari}>
                    {vari}
                  </option>
                );
              })}
            </select>
          </fieldset>
        </div>

        <div className='column is-two-thirds '>
          {' '}
          <fieldset className='field  '>
            <span></span>
            <div className='control'>
              <input
                className='input is-small'
                type='text'
                placeholder='Seprate options with comma ( , )'
                name='name'
              />
            </div>
          </fieldset>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default AddNewVariantOption;
