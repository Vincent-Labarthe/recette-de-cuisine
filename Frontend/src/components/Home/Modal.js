import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'; // Will be useful for defining classNames based on the state
import GroceryLists from 'src/containers/Home/GroceryLists';
import Steps from 'src/containers/Home/Steps';
import Ingredients from 'src/containers/Home/Ingredients';
import Recipe from 'src/containers/Home/Recipe';
import ModalStyled from './ModalStyled';

// == Component
const Modal = ({
  recipeIsOpen,
  calledFromFavoriteRecipes,
}) => {
  return (
    <ModalStyled className={classNames({
      'settings--open': recipeIsOpen,
    })}
    >
      <div className="recipe-modal">
        <Recipe calledFromFavoriteRecipes={calledFromFavoriteRecipes} />
        <div className="grocery-lists-desktop-modale">
          <GroceryLists />
        </div>
        <div className="grocery-lists-mobile-modale">
          <GroceryLists />
        </div>
        <div className="steps-modale">
          <Steps />
        </div>
        <div className="ingredients-modale">
          <Ingredients />
        </div>
      </div>
    </ModalStyled>
  );
};
Modal.propTypes = {
  recipeIsOpen: PropTypes.bool.isRequired,
  calledFromFavoriteRecipes: PropTypes.bool.isRequired,
};

// == Export
export default Modal;
