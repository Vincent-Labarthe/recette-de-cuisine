import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Button } from 'semantic-ui-react';
import classNames from 'classnames'; // Will be useful for defining classNames based on the state
import StepsStyled from './StepsStyled';

// == Component
const Steps = ({
  // all the data is coming from the container
  image,
  analyzedInstructions,
  closeStepsModal,
  closeAllModals,
  stepsIsOpen,
}) => {
  const handleClickBackToRecipes = () => {
    closeAllModals();
  };
  const handleClickCancel = () => {
    closeStepsModal();
  };
  let instructions = '';
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

  return (
    <StepsStyled className={classNames({
      'settings--open': stepsIsOpen,
    })}
    >
      <img src={image} className="recipe-image" alt="Recette" />
      <h3 className="steps-title">Instructions</h3>
      <div className="steps">
        <ol>
          {instructions.map((instruction) => (
            <li key={instruction.number} className="step">{instruction.step}</li>
          ))}
        </ol>
      </div>
      <div className="buttons">
        <div className="icon-back">
          <Icon name="chevron left" size="big" color="orange" onClick={handleClickCancel} />
        </div>
        <div className="button">
          <Button color="orange" type="button" onClick={handleClickBackToRecipes}>Get back to the recipes list</Button>
        </div>
      </div>
    </StepsStyled>
  );
};

Steps.propTypes = {
  image: PropTypes.string.isRequired,
  analyzedInstructions: PropTypes.array,
  closeStepsModal: PropTypes.func.isRequired,
  closeAllModals: PropTypes.func.isRequired,
  stepsIsOpen: PropTypes.bool.isRequired,
};
Steps.defaultProps = {
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
export default Steps;
