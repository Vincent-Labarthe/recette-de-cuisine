import React from 'react';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const GroceryListsItem = ({ id, title, date }) => (
  <div className="grocery-item">
    <div className="groceryListsItem-info">
      <Link to={`/grocery-lists/${id}`}>
        <Icon name="eye" className="link" link /> 
      </Link>
      {title} - {date}
    </div>
    <Icon name="trash" className="link" link /> 
  </div>
);

export default GroceryListsItem;
