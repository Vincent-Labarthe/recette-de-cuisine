import { connect } from 'react-redux';

// Du composant qui a besoin de data ou d'actions
import UserData from 'src/components/UserData';

// Action Creators
import { changeUserField } from 'src/actions/user';
import { updateData } from 'src/actions/auth';

// == Data / state
// Notre composant à besoin de données depuis le state ?
// On prépare un objet avec les props attendues par le composant
const mapStateToProps = (state) => ({
  firstname: state.auth.firstname,
  lastname: state.auth.lastname,
  email: state.auth.email,
});

// == Actions / dispatch
// Notre composant à besoin d'agir sur le state ?
// On prépare un objet avec les props attendues par le composant
const mapDispatchToProps = (dispatch) => ({
  changeFieldValue: (name, value) => {
    dispatch(changeUserField(name, value));
  },
  updateData: () => {
    dispatch(updateData());
  },

});

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const UserDataContainer = connect(mapStateToProps, mapDispatchToProps)(UserData);

export default UserDataContainer;
