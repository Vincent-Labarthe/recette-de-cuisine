import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Button } from 'semantic-ui-react';
import classNames from 'classnames'; // Will be useful for defining classNames based on the state
import IngredientsStyled from './IngredientsStyled';

// == Component
const Ingredients = ({
  // data coming from the container
  extendedIngredients,
  displayGroceryLists,
  closeIngredientsModal,
  closeAllModals,
  ingredientsIsOpen,
}) => {
  const handleClickGenerateList = () => {
    displayGroceryLists();
  };
  const handleClickBackToRecipes = () => {
    closeAllModals();
  };
  const handleClickCancel = () => {
    closeIngredientsModal();
  };

  // prevents the app from crashing in case the recipe doesn't send extendedIngredients
  let ingredients = '';
  if (extendedIngredients.length === 0) {
    ingredients = [
      {
        id: 1,
        amount: '',
        unit: '',
        name: 'Sorry, no ingredients could be found for this recipe :/ ...',
      },
    ];
  }
  else {
    ingredients = extendedIngredients;
  }
  return (
    <IngredientsStyled className={classNames({
      'settings--open': ingredientsIsOpen,
    })}
    >
      <h3 className="ingredients-title">Ingredients</h3>
      <div className="ingredients">
        <ol>
          {ingredients.map((ingredient) => (
            <li key={ingredient.id} className="list-item">{ingredient.amount} {ingredient.unit} {ingredient.name}</li>
          ))}
        </ol>
      </div>
      <div className="buttons">
        <div className="icon-back">
          <Icon name="chevron left" size="big" color="grey" onClick={handleClickCancel} />
        </div>
        <div className="buttons-without-icon">
          <div className="button">
            <Button fluid color="orange" type="button" onClick={handleClickGenerateList}>Generate a grocery list</Button>
          </div>
          <div className="button">
            <Button fluid color="grey" type="button" onClick={handleClickBackToRecipes}>Get back to the recipes list</Button>
          </div>
        </div>
      </div>
    </IngredientsStyled>
  );
};

Ingredients.propTypes = {
  extendedIngredients: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      unit: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  displayGroceryLists: PropTypes.func.isRequired,
  closeIngredientsModal: PropTypes.func.isRequired,
  closeAllModals: PropTypes.func.isRequired,
  ingredientsIsOpen: PropTypes.bool.isRequired,
};

// == Export
export default Ingredients;
