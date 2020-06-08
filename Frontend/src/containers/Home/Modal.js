import { connect } from 'react-redux';
import Modal from 'src/components/Home/Modal';

// == Data / state
const mapStateToProps = (state) => ({
  recipeIsOpen: state.modals.recipeIsOpen,
  recipeId: state.modals.recipeId,
  image: state.modals.image,
  recipesData: state.home.recipesData,
});

// == Actions / dispatch
const mapDispatchToProps = '';

// connect(redux)(react)
const ModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal);

export default ModalContainer;
