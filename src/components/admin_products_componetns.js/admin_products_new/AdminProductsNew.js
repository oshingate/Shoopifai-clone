import axios from 'axios';

import { useContext } from 'react';

import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { cloudinaryUrl, productsUrl } from '../../../constants/constants';
import UserContext from '../../../contexts/UserContext';
import AdminNewFormDetails from './AdminNewFormDetails';
import AdminNewFormImage from './AdminNewFormImage';
import AdminNewFormInventory from './AdminNewFormInventory';
import AdminNewFormOrganization from './AdminNewFormOrganization';
import AdminNewFormPrice from './AdminNewFormPrice';
import AdminNewFormProductStatus from './AdminNewFormProductStatus';
import AdminNewFormShipping from './AdminNewFormShipping';
import AdminNewFormVariants from './AdminNewFormVariants';

function updateState(setProduct, fieldName, value) {
  setProduct((prevState) => {
    return { ...prevState, [fieldName]: value };
  });
}

async function convertImgToUrl(event, updateState, setProduct) {
  console.log(event.target.files[0]);
  const files = event.target.files;
  let data = new FormData();
  data.append('file', files[0]);
  data.append('upload_preset', 'shoopify');

  const res = await fetch(
    cloudinaryUrl + 'image/upload',

    { method: 'POST', body: data }
  );
  console.log('Data', res);

  let res2 = await res.json();
  console.log(res2.secure_url);
  updateState(setProduct, 'image', res2.secure_url);
}

//function to handle form submition
async function handleFormSubmit(product, token) {
  let newProduct = await axios.post(productsUrl, product, {
    headers: {
      Authorization: token,
    },
  });
  console.log('newprod', newProduct.data);
}

const AdminProductsNew = (props) => {
  let { user, token } = useContext(UserContext);

  let [product, setProduct] = useState({
    name: '',
    description: '',
    image: '',
    price: '',
    cost_per_item: '',
    is_taxable: false,
    sku: '',
    barcode: '',
    quantity: '',
    is_physical: true,
    weight: '',
    manufactured_in: '',
    has_variants: false,
    product_status: 'draft',
    vendor: '',
    category_id: '',
    collections: '',
    tags: '',
  });

  console.log('insidenewProd', product);
  return (
    <section className='admin-new-product-sec mx-6'>
      <div className='is-flex '>
        <NavLink to='/admin/products?selectedView=all'>
          {' '}
          <button className='button'>
            <span className='icon is-small'>
              <i className='fas fa-long-arrow-alt-left'></i>
            </span>
          </button>
        </NavLink>
        <div className='is-flex is-align-self-center'>
          {' '}
          <h2 className='is-size-5 mb-5 ml-4'>Add Product</h2>
        </div>
      </div>

      {/* form element */}

      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleFormSubmit(product, token);
          setProduct({
            name: '',
            description: '',
            image: '',
            price: '',
            cost_per_item: '',
            is_taxable: false,
            sku: '',
            barcode: '',
            quantity: '',
            is_physical: true,
            weight: '',
            manufactured_in: '',
            has_variants: false,
            product_status: 'draft',
            vendor: '',
            category_id: '',
            collections: '',
            tags: '',
          });
        }}
      >
        <div className='columns'>
          {/* form col-1 */}
          <div className='column is-two-thirds'>
            <div className='block'>
              {/* form col-1 box-1 */}

              <AdminNewFormDetails
                product={product}
                updateState={updateState}
                setProduct={setProduct}
              />

              {/* form col-1 box-2 */}
              <AdminNewFormImage
                product={product}
                updateState={updateState}
                setProduct={setProduct}
                convertImgToUrl={convertImgToUrl}
              />

              {/* form col-1 box-3 */}

              <AdminNewFormPrice
                product={product}
                updateState={updateState}
                setProduct={setProduct}
              />

              {/* form col-1 box-4 */}
              <AdminNewFormInventory
                product={product}
                updateState={updateState}
                setProduct={setProduct}
              />

              {/* form col-1 box-5 */}

              <AdminNewFormShipping
                product={product}
                updateState={updateState}
                setProduct={setProduct}
              />

              {/* form col-1 box-6 */}
              <AdminNewFormVariants
                product={product}
                updateState={updateState}
                setProduct={setProduct}
              />
            </div>
          </div>

          {/* form col-2 */}

          <div className='column auto'>
            {' '}
            <div className='block'>
              {/* for col-2 box-1  */}

              <AdminNewFormProductStatus
                product={product}
                updateState={updateState}
                setProduct={setProduct}
              />

              {/* for col-2 box-2  */}
              <AdminNewFormOrganization
                product={product}
                updateState={updateState}
                setProduct={setProduct}
                user={user}
              />
            </div>
          </div>
        </div>
        <fieldset className='is-flex is-justify-content-flex-end'>
          <button type='submit' className='button is-primary'>
            save
          </button>
        </fieldset>
      </form>
    </section>
  );
};

export default AdminProductsNew;
