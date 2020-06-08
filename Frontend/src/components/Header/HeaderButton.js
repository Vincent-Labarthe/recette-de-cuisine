// == Import npm
import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

// == Composant
const HeaderButton = () => (
  <div className="dropdown">
    <Dropdown text="Sign In/Up">
      <Dropdown.Menu>
        <div className="dropdown-option">
          <Link to="/sign-in">
            <Dropdown.Item text="Sign In" />
          </Link>
        </div>
        <div className="dropdown-option">
          <Link to="/sign-up">
            <Dropdown.Item text="Sign Up" />
          </Link>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  </div>

);

// == Export
export default HeaderButton;
