import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css';

const list = [
  { name: 'start', path: '/', exact: true, },
  { name: 'produkty', path: '/products', },
  { name: 'kontakt', path: '/contact', },
  { name: 'panel admin', path: '/admin', },
]

const Navigation = () => {

  const menu = list.map(item => (
    <li key={item.name}>
      <NavLink to={item.path} exact={item.exact ? item.exact : false}>{item.name}</NavLink>
    </li>
  ))

  return (
    <div>
      <nav className='main'>
        <ul>
          {menu}
          {/* <li>
            <NavLink to='/'>Start</NavLink>
          </li>
          <li>
            <NavLink to='product'>Produkty</NavLink>
          </li>
          <li>
            <NavLink to='contact' >Kontakt</NavLink>
          </li>
          <li>
            <NavLink to='admin'>Panel admina</NavLink>
          </li> */}
        </ul>
      </nav>
    </div >
  );
}

export default Navigation;