import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { categoryUrl } from '../../../constants/constants';
import UserContext from '../../../contexts/UserContext';

let handleCategoryFormSubmit = async (
  newCategory,
  setNewCategory,
  setFormOpen,
  token
) => {
  console.log(newCategory);

  let res = await axios.post(categoryUrl, newCategory, {
    headers: { Authorization: token },
  });

  console.log(res.data);
  setNewCategory({ name: '', tax_percentage: '' });
  setFormOpen((prevState) => {
    return !prevState;
  });
};

const AdminNewFormOrganizationCategories = (props) => {
  let { token } = useContext(UserContext);
  let [formOpen, setFormOpen] = useState(false);
  let [newCategory, setNewCategory] = useState({
    name: '',
    tax_percentage: '',
  });
  let [categories, setCategories] = useState([]);
  useEffect(() => {
    async function fetchCategories(categoryUrl, setCategories) {
      let { data } = await axios.get(categoryUrl);

      setCategories(data.productCategories);
    }
    fetchCategories(categoryUrl, setCategories);
  }, []);
  return (
    <>
      {' '}
      <div className='columns'>
        <div className='column is-half'>
          <fieldset className='select is-small'>
            <select
              id='category_id'
              name='category_id'
              value={props.product.category_id}
              onChange={(event) => {
                props.updateState(
                  props.setProduct,
                  'category_id',
                  event.target.value
                );
              }}
            >
              <option value=''>Select Category</option>
              {categories.map((cate) => {
                return (
                  <option value={cate._id} key={cate.slug}>
                    {cate.name}
                  </option>
                );
              })}
            </select>
          </fieldset>
        </div>
        <div className='column is-half'>
          <span
            className='button is-info is-small'
            onClick={(event) => {
              setFormOpen((prevState) => {
                return !prevState;
              });
            }}
          >
            Add new
          </span>
        </div>
      </div>
      {formOpen ? (
        <div>
          <div className='columns'>
            <div className='column'>
              {' '}
              <fieldset className='field'>
                <label className='label'>Name</label>
                <div className='control'>
                  <input
                    className='input is-small'
                    type='text'
                    placeholder='Enter Title'
                    name='name'
                    value={newCategory.name}
                    onChange={(event) => {
                      setNewCategory((prevState) => {
                        return {
                          ...prevState,
                          name: event.target.value,
                        };
                      });
                    }}
                  />
                </div>
              </fieldset>
            </div>
            <div className='column'>
              {' '}
              <fieldset className='field'>
                <label className='label'>Tax %</label>
                <div className='control'>
                  <input
                    className='input is-small'
                    type='number'
                    placeholder='Enter tax percentage'
                    name='tax_percentage'
                    value={newCategory.tax_percentage}
                    onChange={(event) => {
                      setNewCategory((prevState) => {
                        return {
                          ...prevState,
                          tax_percentage: event.target.value,
                        };
                      });
                    }}
                  />
                </div>
              </fieldset>
            </div>
          </div>
          <span
            className='button is-success is-small'
            onClick={(event) => {
              handleCategoryFormSubmit(
                newCategory,
                setNewCategory,
                setFormOpen,
                token
              );
            }}
          >
            Add
          </span>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default AdminNewFormOrganizationCategories;
