import React from 'react';
import { Checkbox, Icon } from 'semantic-ui-react';

const IngredientItem = ({ label }) => (
  <div className="ingredient-item">
    <Checkbox label={label} />
    <Icon name="trash" className="link" link />
  </div>
);


export default IngredientItem;
