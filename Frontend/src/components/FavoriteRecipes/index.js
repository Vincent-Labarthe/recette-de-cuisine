// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';
import Modal from 'src/containers/Home/Modal';
import RecipeCard from 'src/containers/Home/RecipeCard';

import recipes from 'src/assets/data/dataHomeTest';
// == Import
import image from 'src/assets/images/hamburger.jpg';
import HomeStyled from 'src/components/Home/HomeStyled';

// == Component
const FavoriteRecipes = ({ loadFavoriteRecipes }) => {
  let favoriteRecipes = [];

  if (sessionStorage.getItem('userData') === null) {
    window.location.href = 'http://localhost:8080/';
  }

  useEffect(() => {
    if (sessionStorage.getItem('favoriteRecipes') === null) {
      loadFavoriteRecipes();
    }
  }, []);

  if (sessionStorage.getItem('favoriteRecipes') === null) {
    favoriteRecipes = [];
  }
  else {
    favoriteRecipes = JSON.parse(sessionStorage.getItem('favoriteRecipes'));
  }

  const pageBoolean = true; // indicates the modal is called from /favorite-recipes, not from /home
  return (
    <HomeStyled>
      <section className="dynamic-display">
        <Modal calledFromFavoriteRecipes={pageBoolean} />
        <div className="image">
          <img
            src={image}
            alt="A delicious burger. Yummy !"
            className="image-size"
          />
        </div>
      </section>
      <section className="recipes-display">
        <div className="mobile-modale">
          <Modal calledFromFavoriteRecipes={pageBoolean} />
        </div>
        <div className="mobile-presentation">
          <p className="mobile-presentation-text">Select your favorite recipes and <em>automatically</em> generate a grocery list !</p>
        </div>
        <h2 className="recipes-display-title">My favorite recipes</h2>
        <div className="recipes-display-cards-big-screen">
          <Card.Group itemsPerRow={3} stackable>
            {favoriteRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                {...recipe}
              />
            ))}
          </Card.Group>
        </div>
        <div className="recipes-display-cards-medium-screen">
          <Card.Group itemsPerRow={2} stackable>
            {favoriteRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                {...recipe}
              />
            ))}
          </Card.Group>
        </div>
        <div className="recipes-display-cards-little-screen">
          <Card.Group itemsPerRow={1} stackable>
            {favoriteRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                {...recipe}
                // openRecipeModal={openRecipe}
              />
            ))}
          </Card.Group>
        </div>
      </section>
    </HomeStyled>
  );
};

FavoriteRecipes.propTypes = {
  loadFavoriteRecipes: PropTypes.func.isRequired,
};

// == Export
export default FavoriteRecipes;
