import { NavLink } from 'react-router-dom';

const AdminProductListHeader = (props) => {
  return (
    <div className='product-list__header my-3'>
      <ul className='is-flex'>
        <li>
          <NavLink to={'/admin/products?selectedView=all'}>
            <button
              className={
                props.selectedView === 'all'
                  ? 'button is-white is-small active'
                  : 'button is-white is-small '
              }
            >
              All
            </button>
          </NavLink>
        </li>
        <li>
          <NavLink to={'/admin/products?selectedView=active'}>
            <button
              className={
                props.selectedView === 'active'
                  ? 'button is-white is-small active'
                  : 'button is-white is-small '
              }
            >
              Active
            </button>
          </NavLink>
        </li>
        <li>
          <NavLink to={'/admin/products?selectedView=draft'}>
            <button
              className={
                props.selectedView === 'draft'
                  ? 'button is-white is-small active'
                  : 'button is-white is-small '
              }
            >
              Draft
            </button>
          </NavLink>
        </li>
        <li>
          <NavLink to={'/admin/products?selectedView=archived'}>
            <button
              className={
                props.selectedView === 'archived'
                  ? 'button is-white is-small active'
                  : 'button is-white is-small '
              }
            >
              Archived
            </button>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AdminProductListHeader;
