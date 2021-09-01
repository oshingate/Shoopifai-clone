import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import AdminNewFormColOneBoxOne from './AdminNewFormColOneBoxOne';
import AdminNewFormColOneBoxTwo from './AdminNewFormColOneBoxTwo';

function updateState(setProduct, fieldName, value) {
  setProduct((prevState) => {
    return { ...prevState, [fieldName]: value };
  });
}

const AdminProductsNew = (props) => {
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
    category_name: '',
    collections: '',
    tags: '',
  });
  useEffect(() => {}, []);

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

      <form>
        <div className='columns'>
          {/* form col-1 */}
          <div className='column is-two-thirds'>
            <div className='block'>
              {/* form col-1 box-1 */}

              <AdminNewFormColOneBoxOne
                product={product}
                updateState={updateState}
                setProduct={setProduct}
              />

              {/* form col-1 box-2 */}
              <AdminNewFormColOneBoxTwo
                product={product}
                updateState={updateState}
                setProduct={setProduct}
              />

              {/* form col-1 box-3 */}

              <div className='box'>
                <h4 className='mb-3'>Price</h4>
                <div className='columns'>
                  <div className='column is-half'>
                    {' '}
                    <fieldset className='field'>
                      <label className='label'>Price</label>
                      <p className='control has-icons-left '>
                        <input
                          className='input'
                          name='price'
                          type='number'
                          placeholder='0.00'
                          value={product.price}
                          onChange={(event) => {
                            updateState(
                              setProduct,
                              'price',
                              event.target.value
                            );
                          }}
                        />
                        <span className='icon is-small is-left'>
                          <i className='fas fa-rupee-sign'></i>
                        </span>
                      </p>
                    </fieldset>
                  </div>

                  <div className='column is-half'>
                    {' '}
                    <fieldset className='field'>
                      <label className='label'>Compare At Price</label>
                      <p className='control has-icons-left '>
                        <input
                          className='input'
                          type='number'
                          placeholder='0.00'
                        />
                        <span className='icon is-small is-left'>
                          <i className='fas fa-rupee-sign'></i>
                        </span>
                      </p>
                    </fieldset>
                  </div>
                </div>

                {/* <hr /> */}
                <hr />
                <div className='columns'>
                  <div className='column is-half'>
                    {' '}
                    <fieldset className='field'>
                      <label className='label'>Cost Per Item</label>
                      <p className='control has-icons-left '>
                        <input
                          className='input'
                          type='number'
                          name='cost_per_item'
                          placeholder='0.00'
                          value={product.cost_per_item}
                          onChange={(event) => {
                            updateState(
                              setProduct,
                              'cost_per_item',
                              event.target.value
                            );
                          }}
                        />
                        <span className='icon is-small is-left'>
                          <i className='fas fa-rupee-sign'></i>
                        </span>
                      </p>
                    </fieldset>
                  </div>

                  <div className='column is-half'> {/* add data later */}</div>
                </div>
                <label className='checkbox'>
                  <input
                    type='checkbox'
                    name='is_taxable'
                    checked={product.is_taxable}
                    onChange={(event) => {
                      updateState(
                        setProduct,
                        'is_taxable',
                        event.target.checked
                      );
                    }}
                  />
                  <span className='is-size-6 ml-3'>
                    Charge tax On this product
                  </span>
                </label>
              </div>

              {/* form col-1 box-4 */}

              <div className='box'>
                <h4 className='mb-3'>Inventory</h4>
                <div className='columns'>
                  <div className='column is-half'>
                    {' '}
                    <fieldset className='field'>
                      <label className='label'>SKU (Stock Keeping Unit)</label>
                      <div className='control'>
                        <input
                          className='input'
                          type='text'
                          placeholder=''
                          name='sku'
                          value={product.sku}
                          onChange={(event) => {
                            updateState(setProduct, 'sku', event.target.value);
                          }}
                        />
                      </div>
                    </fieldset>
                  </div>

                  <div className='column is-half'>
                    {' '}
                    <fieldset className='field'>
                      <label className='label'>
                        Barcode (ISBN, UPC, GTIN, etc.)
                      </label>
                      <div className='control'>
                        <input
                          className='input'
                          type='text'
                          placeholder=''
                          name='barcode'
                          value={product.barcode}
                          onChange={(event) => {
                            updateState(
                              setProduct,
                              'barcode',
                              event.target.value
                            );
                          }}
                        />
                      </div>
                    </fieldset>
                  </div>
                </div>

                <fieldset>
                  <label className='checkbox'>
                    <input type='checkbox' />
                    <span className='is-size-6 ml-3'>Track quantity</span>
                  </label>
                </fieldset>
                <fieldset>
                  {' '}
                  <label className='checkbox'>
                    <input type='checkbox' />
                    <span className='is-size-6 ml-3'>
                      Continue selling when out of stock
                    </span>
                  </label>
                </fieldset>
                <hr />
                <h4 className='my-3'>Quantity</h4>
                <fieldset className='field'>
                  <label className='label'>Available</label>
                  <div className='control'>
                    <input
                      className='input'
                      type='number'
                      name='quantity'
                      placeholder='0'
                      value={product.quantity}
                      onChange={(event) => {
                        updateState(setProduct, 'quantity', event.target.value);
                      }}
                    />
                  </div>
                </fieldset>
              </div>

              {/* form col-1 box-5 */}

              <div className='box '>
                <h4 className='mb-3'>Shipping</h4>
                <fieldset>
                  {' '}
                  <label className='checkbox'>
                    <input
                      type='checkbox'
                      name='is_physical'
                      checked={product.is_physical}
                      onChange={(event) => {
                        updateState(
                          setProduct,
                          'is_physical',
                          event.target.checked
                        );
                      }}
                    />
                    <span className='is-size-6 ml-3'>
                      This is physical product
                    </span>
                  </label>
                </fieldset>

                <hr />
                <span className='is-size-5 mb-2'>Weight</span>
                <div>
                  <span className='is-size-7 mb-2'>
                    Used to calculate shipping rates at checkout and label
                    prices during fulfillment.
                  </span>
                </div>

                <div className='columns'>
                  <div className='column is-half'>
                    {' '}
                    <fieldset className='field'>
                      <label className='label'>Weight</label>
                      <div className='control'>
                        <input
                          className='input'
                          type='number'
                          placeholder='0.00'
                          name='weight'
                          value={product.weight}
                          onChange={(event) => {
                            updateState(
                              setProduct,
                              'weight',
                              event.target.value
                            );
                          }}
                        />
                      </div>
                    </fieldset>
                  </div>
                </div>

                <hr />

                <span className='is-size-5 mb-2'>Customs Information</span>
                <div>
                  <span className='is-size-7 mb-2'>
                    Customs authorities use this information to calculate duties
                    when shipping internationally. Shown on printed customs
                    forms.
                  </span>
                </div>
                <fieldset className='select is-small mt-3'>
                  <select
                    id='manufactured_in'
                    name='manufactured_in'
                    value={product.manufactured_in}
                    onChange={(event) => {
                      updateState(
                        setProduct,
                        'manufactured_in',
                        event.target.value
                      );
                    }}
                  >
                    <option value=''>select country</option>
                    <option value='AF'>Afghanistan</option>
                    <option value='AX'>Aland Islands</option>
                    <option value='AL'>Albania</option>
                    <option value='DZ'>Algeria</option>
                    <option value='AS'>American Samoa</option>
                    <option value='AD'>Andorra</option>
                    <option value='AO'>Angola</option>
                    <option value='AI'>Anguilla</option>
                    <option value='AQ'>Antarctica</option>
                    <option value='AG'>Antigua and Barbuda</option>
                    <option value='AR'>Argentina</option>
                    <option value='AM'>Armenia</option>
                    <option value='AW'>Aruba</option>
                    <option value='AU'>Australia</option>
                    <option value='AT'>Austria</option>
                    <option value='AZ'>Azerbaijan</option>
                    <option value='BS'>Bahamas</option>
                    <option value='BH'>Bahrain</option>
                    <option value='BD'>Bangladesh</option>
                    <option value='BB'>Barbados</option>
                    <option value='BY'>Belarus</option>
                    <option value='BE'>Belgium</option>
                    <option value='BZ'>Belize</option>
                    <option value='BJ'>Benin</option>
                    <option value='BM'>Bermuda</option>
                    <option value='BT'>Bhutan</option>
                    <option value='BO'>Bolivia</option>
                    <option value='BQ'>Bonaire, Sint Eustatius and Saba</option>
                    <option value='BA'>Bosnia and Herzegovina</option>
                    <option value='BW'>Botswana</option>
                    <option value='BV'>Bouvet Island</option>
                    <option value='BR'>Brazil</option>
                    <option value='IO'>British Indian Ocean Territory</option>
                    <option value='BN'>Brunei Darussalam</option>
                    <option value='BG'>Bulgaria</option>
                    <option value='BF'>Burkina Faso</option>
                    <option value='BI'>Burundi</option>
                    <option value='KH'>Cambodia</option>
                    <option value='CM'>Cameroon</option>
                    <option value='CA'>Canada</option>
                    <option value='CV'>Cape Verde</option>
                    <option value='KY'>Cayman Islands</option>
                    <option value='CF'>Central African Republic</option>
                    <option value='TD'>Chad</option>
                    <option value='CL'>Chile</option>
                    <option value='CN'>China</option>
                    <option value='CX'>Christmas Island</option>
                    <option value='CC'>Cocos (Keeling) Islands</option>
                    <option value='CO'>Colombia</option>
                    <option value='KM'>Comoros</option>
                    <option value='CG'>Congo</option>
                    <option value='CD'>
                      Congo, Democratic Republic of the Congo
                    </option>
                    <option value='CK'>Cook Islands</option>
                    <option value='CR'>Costa Rica</option>
                    <option value='CI'>Cote D'Ivoire</option>
                    <option value='HR'>Croatia</option>
                    <option value='CU'>Cuba</option>
                    <option value='CW'>Curacao</option>
                    <option value='CY'>Cyprus</option>
                    <option value='CZ'>Czech Republic</option>
                    <option value='DK'>Denmark</option>
                    <option value='DJ'>Djibouti</option>
                    <option value='DM'>Dominica</option>
                    <option value='DO'>Dominican Republic</option>
                    <option value='EC'>Ecuador</option>
                    <option value='EG'>Egypt</option>
                    <option value='SV'>El Salvador</option>
                    <option value='GQ'>Equatorial Guinea</option>
                    <option value='ER'>Eritrea</option>
                    <option value='EE'>Estonia</option>
                    <option value='ET'>Ethiopia</option>
                    <option value='FK'>Falkland Islands (Malvinas)</option>
                    <option value='FO'>Faroe Islands</option>
                    <option value='FJ'>Fiji</option>
                    <option value='FI'>Finland</option>
                    <option value='FR'>France</option>
                    <option value='GF'>French Guiana</option>
                    <option value='PF'>French Polynesia</option>
                    <option value='TF'>French Southern Territories</option>
                    <option value='GA'>Gabon</option>
                    <option value='GM'>Gambia</option>
                    <option value='GE'>Georgia</option>
                    <option value='DE'>Germany</option>
                    <option value='GH'>Ghana</option>
                    <option value='GI'>Gibraltar</option>
                    <option value='GR'>Greece</option>
                    <option value='GL'>Greenland</option>
                    <option value='GD'>Grenada</option>
                    <option value='GP'>Guadeloupe</option>
                    <option value='GU'>Guam</option>
                    <option value='GT'>Guatemala</option>
                    <option value='GG'>Guernsey</option>
                    <option value='GN'>Guinea</option>
                    <option value='GW'>Guinea-Bissau</option>
                    <option value='GY'>Guyana</option>
                    <option value='HT'>Haiti</option>
                    <option value='HM'>
                      Heard Island and Mcdonald Islands
                    </option>
                    <option value='VA'>Holy See (Vatican City State)</option>
                    <option value='HN'>Honduras</option>
                    <option value='HK'>Hong Kong</option>
                    <option value='HU'>Hungary</option>
                    <option value='IS'>Iceland</option>
                    <option value='IN'>India</option>
                    <option value='ID'>Indonesia</option>
                    <option value='IR'>Iran, Islamic Republic of</option>
                    <option value='IQ'>Iraq</option>
                    <option value='IE'>Ireland</option>
                    <option value='IM'>Isle of Man</option>
                    <option value='IL'>Israel</option>
                    <option value='IT'>Italy</option>
                    <option value='JM'>Jamaica</option>
                    <option value='JP'>Japan</option>
                    <option value='JE'>Jersey</option>
                    <option value='JO'>Jordan</option>
                    <option value='KZ'>Kazakhstan</option>
                    <option value='KE'>Kenya</option>
                    <option value='KI'>Kiribati</option>
                    <option value='KP'>
                      Korea, Democratic People's Republic of
                    </option>
                    <option value='KR'>Korea, Republic of</option>
                    <option value='XK'>Kosovo</option>
                    <option value='KW'>Kuwait</option>
                    <option value='KG'>Kyrgyzstan</option>
                    <option value='LA'>Lao People's Democratic Republic</option>
                    <option value='LV'>Latvia</option>
                    <option value='LB'>Lebanon</option>
                    <option value='LS'>Lesotho</option>
                    <option value='LR'>Liberia</option>
                    <option value='LY'>Libyan Arab Jamahiriya</option>
                    <option value='LI'>Liechtenstein</option>
                    <option value='LT'>Lithuania</option>
                    <option value='LU'>Luxembourg</option>
                    <option value='MO'>Macao</option>
                    <option value='MK'>
                      Macedonia, the Former Yugoslav Republic of
                    </option>
                    <option value='MG'>Madagascar</option>
                    <option value='MW'>Malawi</option>
                    <option value='MY'>Malaysia</option>
                    <option value='MV'>Maldives</option>
                    <option value='ML'>Mali</option>
                    <option value='MT'>Malta</option>
                    <option value='MH'>Marshall Islands</option>
                    <option value='MQ'>Martinique</option>
                    <option value='MR'>Mauritania</option>
                    <option value='MU'>Mauritius</option>
                    <option value='YT'>Mayotte</option>
                    <option value='MX'>Mexico</option>
                    <option value='FM'>Micronesia, Federated States of</option>
                    <option value='MD'>Moldova, Republic of</option>
                    <option value='MC'>Monaco</option>
                    <option value='MN'>Mongolia</option>
                    <option value='ME'>Montenegro</option>
                    <option value='MS'>Montserrat</option>
                    <option value='MA'>Morocco</option>
                    <option value='MZ'>Mozambique</option>
                    <option value='MM'>Myanmar</option>
                    <option value='NA'>Namibia</option>
                    <option value='NR'>Nauru</option>
                    <option value='NP'>Nepal</option>
                    <option value='NL'>Netherlands</option>
                    <option value='AN'>Netherlands Antilles</option>
                    <option value='NC'>New Caledonia</option>
                    <option value='NZ'>New Zealand</option>
                    <option value='NI'>Nicaragua</option>
                    <option value='NE'>Niger</option>
                    <option value='NG'>Nigeria</option>
                    <option value='NU'>Niue</option>
                    <option value='NF'>Norfolk Island</option>
                    <option value='MP'>Northern Mariana Islands</option>
                    <option value='NO'>Norway</option>
                    <option value='OM'>Oman</option>
                    <option value='PK'>Pakistan</option>
                    <option value='PW'>Palau</option>
                    <option value='PS'>Palestinian Territory, Occupied</option>
                    <option value='PA'>Panama</option>
                    <option value='PG'>Papua New Guinea</option>
                    <option value='PY'>Paraguay</option>
                    <option value='PE'>Peru</option>
                    <option value='PH'>Philippines</option>
                    <option value='PN'>Pitcairn</option>
                    <option value='PL'>Poland</option>
                    <option value='PT'>Portugal</option>
                    <option value='PR'>Puerto Rico</option>
                    <option value='QA'>Qatar</option>
                    <option value='RE'>Reunion</option>
                    <option value='RO'>Romania</option>
                    <option value='RU'>Russian Federation</option>
                    <option value='RW'>Rwanda</option>
                    <option value='BL'>Saint Barthelemy</option>
                    <option value='SH'>Saint Helena</option>
                    <option value='KN'>Saint Kitts and Nevis</option>
                    <option value='LC'>Saint Lucia</option>
                    <option value='MF'>Saint Martin</option>
                    <option value='PM'>Saint Pierre and Miquelon</option>
                    <option value='VC'>Saint Vincent and the Grenadines</option>
                    <option value='WS'>Samoa</option>
                    <option value='SM'>San Marino</option>
                    <option value='ST'>Sao Tome and Principe</option>
                    <option value='SA'>Saudi Arabia</option>
                    <option value='SN'>Senegal</option>
                    <option value='RS'>Serbia</option>
                    <option value='CS'>Serbia and Montenegro</option>
                    <option value='SC'>Seychelles</option>
                    <option value='SL'>Sierra Leone</option>
                    <option value='SG'>Singapore</option>
                    <option value='SX'>Sint Maarten</option>
                    <option value='SK'>Slovakia</option>
                    <option value='SI'>Slovenia</option>
                    <option value='SB'>Solomon Islands</option>
                    <option value='SO'>Somalia</option>
                    <option value='ZA'>South Africa</option>
                    <option value='GS'>
                      South Georgia and the South Sandwich Islands
                    </option>
                    <option value='SS'>South Sudan</option>
                    <option value='ES'>Spain</option>
                    <option value='LK'>Sri Lanka</option>
                    <option value='SD'>Sudan</option>
                    <option value='SR'>Suriname</option>
                    <option value='SJ'>Svalbard and Jan Mayen</option>
                    <option value='SZ'>Swaziland</option>
                    <option value='SE'>Sweden</option>
                    <option value='CH'>Switzerland</option>
                    <option value='SY'>Syrian Arab Republic</option>
                    <option value='TW'>Taiwan, Province of China</option>
                    <option value='TJ'>Tajikistan</option>
                    <option value='TZ'>Tanzania, United Republic of</option>
                    <option value='TH'>Thailand</option>
                    <option value='TL'>Timor-Leste</option>
                    <option value='TG'>Togo</option>
                    <option value='TK'>Tokelau</option>
                    <option value='TO'>Tonga</option>
                    <option value='TT'>Trinidad and Tobago</option>
                    <option value='TN'>Tunisia</option>
                    <option value='TR'>Turkey</option>
                    <option value='TM'>Turkmenistan</option>
                    <option value='TC'>Turks and Caicos Islands</option>
                    <option value='TV'>Tuvalu</option>
                    <option value='UG'>Uganda</option>
                    <option value='UA'>Ukraine</option>
                    <option value='AE'>United Arab Emirates</option>
                    <option value='GB'>United Kingdom</option>
                    <option value='US'>United States</option>
                    <option value='UM'>
                      United States Minor Outlying Islands
                    </option>
                    <option value='UY'>Uruguay</option>
                    <option value='UZ'>Uzbekistan</option>
                    <option value='VU'>Vanuatu</option>
                    <option value='VE'>Venezuela</option>
                    <option value='VN'>Viet Nam</option>
                    <option value='VG'>Virgin Islands, British</option>
                    <option value='VI'>Virgin Islands, U.s.</option>
                    <option value='WF'>Wallis and Futuna</option>
                    <option value='EH'>Western Sahara</option>
                    <option value='YE'>Yemen</option>
                    <option value='ZM'>Zambia</option>
                    <option value='ZW'>Zimbabwe</option>
                  </select>
                </fieldset>
                <div>
                  <span className='is-size-7 mb-2'>
                    In most cases, where the product is manufactured.
                  </span>
                </div>
              </div>

              {/* form col-1 box-6 */}

              <div className='box'>
                <h4 className='mb-3'>Variants</h4>
                <fieldset>
                  <label className='checkbox'>
                    <input
                      type='checkbox'
                      name='has_variants'
                      checked={product.has_variants}
                      onChange={(event) => {
                        updateState(
                          setProduct,
                          'has_variants',
                          event.target.checked
                        );
                      }}
                    />
                    <span className='is-size-6 ml-3'>
                      This product has multiple options, like different sizes or
                      colors
                    </span>
                  </label>
                </fieldset>
                <hr />
              </div>
            </div>
          </div>

          {/* form col-2 */}

          <div className='column auto'>
            {' '}
            <div className='block'>
              <div className='box'>
                <h4 className='mb-3'>Product status</h4>
                <fieldset className='select is-small'>
                  <select
                    id='product_status'
                    name='product_status'
                    value={product.product_status}
                    onChange={(event) => {
                      updateState(
                        setProduct,
                        'product_status',
                        event.target.value
                      );
                    }}
                  >
                    <option value='draft'>Draft</option>
                    <option value='active'>Active</option>
                  </select>
                </fieldset>
                <hr />
              </div>

              {/* for col-2 box-2  */}

              <div className='box'>
                <h4 className='mb-3'>Organization</h4>
                <label className='label'>Vendor</label>
                <fieldset className='select is-small'>
                  <select
                    id='vendor'
                    name='vendor'
                    value={product.vendor}
                    onChange={(event) => {
                      updateState(setProduct, 'vendor', event.target.value);
                    }}
                  >
                    <option value='draft'>Draft</option>
                    <option value='active'>Active</option>
                  </select>
                </fieldset>
                <hr />

                <label className='label'>Product Type</label>
                <fieldset className='select is-small'>
                  <select
                    id='category_name'
                    name='category_name'
                    value={product.category_name}
                    onChange={(event) => {
                      updateState(
                        setProduct,
                        'category_name',
                        event.target.value
                      );
                    }}
                  >
                    <option value='draft'>Draft</option>
                    <option value='active'>Active</option>
                  </select>
                </fieldset>
                <hr />

                <label className='label'>Collections</label>
                <fieldset className='select is-small'>
                  <select
                    id='collections'
                    name='collections'
                    value={product.collections}
                    onChange={(event) => {
                      updateState(
                        setProduct,
                        'collections',
                        event.target.value
                      );
                    }}
                  >
                    <option value='draft'>Draft</option>
                    <option value='active'>Active</option>
                  </select>
                </fieldset>
                <hr />

                <fieldset className='field'>
                  <label className='label'>Tags</label>
                  <div className='control'>
                    <input
                      className='input'
                      type='text'
                      name='tags'
                      placeholder='cotton,design,2021'
                      value={product.tags}
                      onChange={(event) => {
                        updateState(setProduct, 'tags', event.target.value);
                      }}
                    />
                  </div>
                </fieldset>
              </div>
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
