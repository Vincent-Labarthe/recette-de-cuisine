import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Button } from 'semantic-ui-react';
import classNames from 'classnames';
import RecipeStyled from './RecipeStyled';

// == Component
const Recipe = ({
  // Recipe is called in Modal. But all the props come from the container
  image,
  title,
  readyInMinutes,
  servings,
  extendedIngredients,
  analyzedInstructions,
  sourceName,
  sourceUrl,
  isConnected,
  // actions
  closeRecipeModal,
  displayGroceryLists,
  displayRecipeSteps,
  displayRecipeIngredients,
  addToFavorite,
  removeFromFavorite,
  // props sent via Modal
  calledFromFavoriteRecipes,
}) => {
  const handleClickClose = () => {
    closeRecipeModal();
  };
  const handleClickFavorite = () => {
    // manages the heartbeat effect on click
    console.log('clic sur coeur');
    document.getElementById('favorite').className = 'orange heart large icon clickedHeart';
    // setTimeout(function(){
    addToFavorite();
    // }, 1000);
    setTimeout(function(){
      document.getElementById('favorite').className = 'orange heart large icon unclickedHeart';
    }, 1000);

  };
  const handleRemoveFromFavorite = () => {
    console.log('handleRemoveFromFavorite');
    removeFromFavorite();
  };
  const handleClickList = () => {
    displayGroceryLists();
  };
  const handleClickSteps = () => {
    displayRecipeSteps(analyzedInstructions);
  };
  const handleClickIngredients = () => {
    displayRecipeIngredients(extendedIngredients);
  };
  // analyzedInstructions comes in a weird data shape, this step is necessary to use it
  let instructions = '';
  let ingredients = '';
  // prevents the app from crashing in case the recipe doesn't send analyzedInstructions
  if (analyzedInstructions.length === 0) {
    instructions = [
      {
        number: 1,
        step: 'Sorry, no instructions could be found for this recipe :/ ...',
      },
    ];
  }
  else {
    instructions = analyzedInstructions[0].steps;
  }
  // prevents the app from crashing in case the recipe doesn't send extendedIngredients
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
    <RecipeStyled className={classNames({
      'pageofOrigin--favoriteRecipes': calledFromFavoriteRecipes,
      'user--isConnected': isConnected,
    })}
    >

      <div className="recipe-wrapper">
        <div className="image-title-wrapper">
          <img src={image} className="recipe-image" alt={title} />
          <div className="card-section-wrapper-header">
            <h3 className="recipe-title">{title}</h3>
          </div>
        </div>
        <div className="card-section-infos">
          <div className="card-section-variable-infos">
            <div className="card-section-info">
              <Icon name="time" color="orange" size="large" />
              <p className="recipe-info">{readyInMinutes}mn</p>
            </div>
            <div className="card-section-info">
              <Icon name="group" color="orange" size="large" />
              <p className="recipe-info">{servings}</p>
            </div>
          </div>
          <div className="card-section-info">
            <div className="favorite-button">
              <Icon
                name="heart"
                color="orange"
                size="large"
                id="favorite"
                className="unclickedHeart"
                onClick={handleClickFavorite}
              />
            </div>
            <div className="trash-button">
              <Icon
                name="trash"
                color="orange"
                size="large"
                onClick={handleRemoveFromFavorite}
              />
            </div>
          </div>
        </div>
        <div className="source">
          <p>Source : <a href={sourceUrl}>{sourceName}</a></p>
        </div>
        <div className="card-section-wrapper-content">
          <div className="mobile-button">
            <Button fluid color="orange" type="button" onClick={handleClickIngredients}>Display the ingredients</Button>
          </div>
          <div className="mobile-button">
            <Button fluid color="grey" type="button" onClick={handleClickSteps}>Display the steps</Button>
          </div>
          <div className="mobile-button">
            <Button fluid color="orange" type="button" onClick={handleClickClose}>Close</Button>
          </div>
          <div className="card-description">
            <h4>Ingredients</h4>
            <ul>
              {ingredients.map((ingredient) => (
                <li key={ingredient.id} className="list-item">{ingredient.amount} {ingredient.unit} {ingredient.name}</li>
              ))}
            </ul>
            <h4>Instructions</h4>
            <ol>
              {instructions.map((instruction) => (
                <li key={instruction.number} className="list-item">{instruction.step}</li>
              ))}
            </ol>
            <div className="buttons">
              <div className="button">
                <Button color="orange" type="button" onClick={handleClickList}>Add to a grocery list</Button>
              </div>
              <div className="button">
                <Button color="grey" type="button" onClick={handleClickClose}>Close</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RecipeStyled>
  );
};
Recipe.propTypes = {
  title: PropTypes.string.isRequired,
  readyInMinutes: PropTypes.number.isRequired,
  servings: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  analyzedInstructions: PropTypes.array,
  extendedIngredients: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      unit: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  sourceName: PropTypes.string.isRequired,
  sourceUrl: PropTypes.string.isRequired,
  closeRecipeModal: PropTypes.func.isRequired,
  displayGroceryLists: PropTypes.func.isRequired,
  displayRecipeSteps: PropTypes.func.isRequired,
  displayRecipeIngredients: PropTypes.func.isRequired,
  calledFromFavoriteRecipes: PropTypes.bool.isRequired,
  addToFavorite: PropTypes.func.isRequired,
  removeFromFavorite: PropTypes.func.isRequired,
  isConnected: PropTypes.bool.isRequired,
};
Recipe.defaultProps = {
  analyzedInstructions: [
    {
      name: '',
      steps: [
        {
          number: 1,
          step: 'Sorry, no instructions could be found for this recipe :/ ...',
        },
      ],
    },
  ],
};

// == Export
export default Recipe;
