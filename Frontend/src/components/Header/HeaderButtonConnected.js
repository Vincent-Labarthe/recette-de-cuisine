import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Image } from 'semantic-ui-react';


const HeaderButtonConnected = ({ 
  firstname, 
  lastname, 
  logout,
}) => {
  const handleSubmit = () => {
    // evt.preventDefault();
    console.log('HeaderButtonConnected handleClick: ok');
    logout();
    sessionStorage.clear();
    window.location.href = 'http://localhost:8080/';
  };
  // console.log(firstname, lastname);
  return (
    <div className="dropdown">
      <Dropdown text={`${firstname} ${lastname}`}>
        <Dropdown.Menu>
          <div className="dropdown-option">
            <Link to="/user">
              <Dropdown.Item text="Account" />
            </Link>
          </div>
          <div className="dropdown-option">
            <Link to="/">
              <Dropdown.Item text="Sign out" onClick={handleSubmit} />
            </Link>
          {/*
            <form onSubmit={handleSubmit}>
              <button>
                <Dropdown.Item text="Sign out" />
              </button>
            </form>
            */}
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default HeaderButtonConnected;
