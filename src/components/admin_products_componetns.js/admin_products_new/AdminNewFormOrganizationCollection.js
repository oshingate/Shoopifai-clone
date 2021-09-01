import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { collectionUrl } from '../../../constants/constants';
import UserContext from '../../../contexts/UserContext';

let handleCategoryFormSubmit = async (
  newCategory,
  setNewCategory,
  setFormOpen,
  token
) => {
  console.log(newCategory);

  let res = await axios.post(collectionUrl, newCategory, {
    headers: { Authorization: token },
  });

  console.log(res.data);
  setNewCategory({ name: '' });
  setFormOpen((prevState) => {
    return !prevState;
  });
};

const AdminNewFormOrganizationCollection = (props) => {
  let { token } = useContext(UserContext);
  let [formOpen, setFormOpen] = useState(false);
  let [newCategory, setNewCategory] = useState({
    name: '',
  });
  let [collections, setCollections] = useState([]);
  useEffect(() => {
    async function fetchCategories(collectionUrl, setCollections) {
      let { data } = await axios.get(collectionUrl);

      setCollections(data.collections);
    }
    fetchCategories(collectionUrl, setCollections);
  }, []);
  return (
    <>
      <label className='label'>Collections</label>
      <div className='columns'>
        <div className='column is-half'>
          {' '}
          <fieldset className='select is-small'>
            <select
              id='collections'
              name='collections'
              value={props.product.collections}
              onChange={(event) => {
                props.updateState(
                  props.setProduct,
                  'collections',
                  event.target.value
                );
              }}
            >
              <option value=''>Select Collection</option>
              {collections.map((collection) => {
                return (
                  <option value={collection.name} key={collection.slug}>
                    {collection.name}
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
            <div className='column'> </div>
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

export default AdminNewFormOrganizationCollection;
