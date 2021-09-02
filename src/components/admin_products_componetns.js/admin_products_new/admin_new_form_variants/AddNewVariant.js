import { useState } from 'react';
import AddNewVariantOption from './AddNewVariantOption';

const AddNewVariant = (props) => {
  let [options, setOptions] = useState({
    option1: { by: 'color', inputs: '' },
  });
  let arrOfVariants = ['size', 'colour', 'style', 'material'];

  //   console.log(Object.keys(options));

  return (
    <>
      <span className='is-size-6 mb-3 '>Options</span>
      {/* opt1 */}
      <ul>
        {Object.keys(options).map((ele) => {
          return (
            <li key={ele}>
              <AddNewVariantOption
                option={options[ele]}
                arrOfVariants={arrOfVariants}
              />
            </li>
          );
        })}
      </ul>

      <div>
        <span className='button is-info is-small'>Add new Option</span>
      </div>
    </>
  );
};

export default AddNewVariant;
