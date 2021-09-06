import { useState } from 'react';
import AddNewVariantOption from './AddNewVariantOption';

const AddNewVariant = (props) => {
  let [options, setOptions] = useState({
    size: '',
  });

  let [currentOption, setCurrentOption] = useState(1);
  // let [remainigVariants, setRemainigVariants] = useState([]);
  let arrOfVariants = ['size', 'colour', 'style', 'material'];
  // product;
  // updateState;
  // setProduct;

  return (
    <>
      <span className='is-size-6 mb-3 '>Options</span>
      {/* opt1 */}
      <ul>
        {Object.keys(props.product.variants).map((ele, i) => {
          return (
            <li key={ele}>
              <AddNewVariantOption
                index={i}
                currentOption={currentOption}
                option={ele}
                value={props.product.variants[ele]}
                arrOfVariants={arrOfVariants}
                setOptions={setOptions}
                setProduct={props.setProduct}
              />
            </li>
          );
        })}
      </ul>

      <div>
        <span
          className='button is-info is-small'
          onClick={(event) => {
            handleAddNewOption(
              currentOption,
              setCurrentOption,
              setOptions,
              options,
              arrOfVariants,
              props.product,
              props.setProduct
            );
          }}
        >
          Add new Option
        </span>
      </div>
    </>
  );
};

async function handleAddNewOption(
  currentOption,
  setCurrentOption,
  setOptions,
  options,
  arrOfVariants,
  product,
  setProduct
) {
  if (currentOption < 4) {
    setCurrentOption((prevState) => {
      return prevState + 1;
    });

    let arr = arrOfVariants.filter((ele) => {
      if (Object.keys(product.variants).includes(ele)) {
        return false;
      } else {
        return true;
      }
    });

    setProduct((prevState) => {
      return {
        ...prevState,
        variants: { ...prevState.variants, [arr[0]]: '' },
      };
    });
  }
}

export default AddNewVariant;
