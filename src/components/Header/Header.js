import './Header.css';

import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1 className="h1">TasksList</h1>
      <nav>
        <NavLink className="menu-button-1" to="/">
          TaskList
        </NavLink>
        <p className="menu-divider">|</p>
        <NavLink className="menu-button-2" to="instructions">
          Instrucciones
        </NavLink>
      </nav>
    </header>
  );
};

export { Header };
