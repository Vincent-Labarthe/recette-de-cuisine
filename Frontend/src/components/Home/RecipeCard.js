// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'semantic-ui-react';

import RecipeCardStyled from './RecipeCardStyled';
// == Composant
const RecipeCard = ({
  id,
  title,
  readyInMinutes,
  servings,
  image,
  sourceName,
  sourceUrl,
  openRecipe,
  extendedIngredients,
  analyzedInstructions,
}) => {
  // Need to build a const with the path because `` is not accepted in Link to
  const handleClick = () => {
    openRecipe(id, image, title, readyInMinutes, servings, extendedIngredients, analyzedInstructions, sourceName, sourceUrl);
    // launch openRecipe in Home/index.js
  };
  return (
    <Card>
      <RecipeCardStyled>
        <a onClick={handleClick}>
          <Image src={image} className="recipe-image" />
        </a>
        <Card.Content>
          <Card.Header>
            <div className="card-section-wrapper title">
              <h3 className="recipe-title">{title}</h3>
            </div>
          </Card.Header>
          <Card.Meta>
            <div className="card-section-wrapper">
              <span className="recipe-servings">For {servings} people</span>
            </div>
          </Card.Meta>
          <Card.Description>
            <div className="card-section-wrapper">
              <span className="card-description">Ready in <em>{readyInMinutes}</em> minutes</span>
            </div>
          </Card.Description>
        </Card.Content>
      </RecipeCardStyled>
    </Card>
  );
};

RecipeCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  readyInMinutes: PropTypes.number,
  servings: PropTypes.number,
  image: PropTypes.string,
  sourceName: PropTypes.string,
  sourceUrl: PropTypes.string,
  openRecipe: PropTypes.func.isRequired,
  // instructions: PropTypes.string.isRequired,
  extendedIngredients: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      unit: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  analyzedInstructions: PropTypes.array,
};
RecipeCard.defaultProps = {
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
  title: 'Unknown',
  readyInMinutes: '',
  servings: '',
  image: '',
  sourceName: 'Unknown',
  sourceUrl: 'Unknown',
};

// == Export
export default RecipeCard;
