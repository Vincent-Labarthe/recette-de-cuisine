import { connect } from 'react-redux';
import Steps from 'src/components/Home/Modals/Steps';
import { closeRecipeSteps, closeAllModals } from 'src/actions/recipes';

// == Data / state
const mapStateToProps = (state) => ({
  stepsIsOpen: state.modals.stepsIsOpen,
  analyzedInstructions: state.modals.analyzedInstructions,
  image: state.modals.image,
});

// == Actions / dispatch
const mapDispatchToProps = (dispatch) => ({
  closeStepsModal: () => {
    dispatch(closeRecipeSteps());
  },
  closeAllModals: () => {
    dispatch(closeAllModals());
  },
});

// connect(redux)(react)
const StepsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Steps);

export default StepsContainer;
