import React from 'react';
import { Checkbox, Icon } from 'semantic-ui-react';

import IngredientItem from './IngredientItem';
import FormStyled from 'src/components/FormStyled';
import image from 'src/assets/images/avocado-toast-2-r.png';

const GroceryList = ({ id, name, ingredients }) => {
  return (
    <FormStyled>
      <section className="content-part">
        <h2>{name}</h2>
        <div className="list ingredients-list">
          {ingredients.map((ingredient) => (
            <IngredientItem 
              key={ingredient}
              label={ingredient}
            />
          ))}
        </div>
      </section>
      <section className="picture-part">
        <div className="image">
          <img
            src={image}
            alt="A delicious avocado toast. Yummy !"
            className="image-size"
          />
        </div>

      </section>
    </FormStyled>
  );
};

export default GroceryList;
