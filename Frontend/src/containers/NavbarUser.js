import { connect } from 'react-redux';
import NavbarUser from 'src/components/NavbarUser';

import { closeAllModals } from 'src/actions/recipes';

// == Data / state
const mapStateToProps = (state) => ({
  isConnected: state.auth.isConnected,
});

// == Actions / dispatch
const mapDispatchToProps = (dispatch) => ({
  closeAllModals: () => {
    dispatch(closeAllModals());
  },
});

// connect(redux)(react)
const NavbarUserContainer = connect(mapStateToProps, mapDispatchToProps)(NavbarUser);

export default NavbarUserContainer;
