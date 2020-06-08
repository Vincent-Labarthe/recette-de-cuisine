import { connect } from 'react-redux';

// Component that needs action or value
import ForgottenPwd from 'src/components/ForgottenPwd';

// Action Creators
import { changeField, sendResetPassword } from 'src/actions/auth';

// == Data / state
// We prepare an object with the props expected by the component
const mapStateToProps = (state) => ({
  emailValue: state.auth.email,
});

// == Actions / dispatch
// We prepare an object with the props expected by the component
const mapDispatchToProps = (dispatch) => ({
  changeFieldValue: (name, value) => {
    dispatch(changeField(name, value));
  },
  sendResetPassword: () => {
    // eslint-disable-next-line no-console
    console.log('Envoi de forgotten password...');
    dispatch(sendResetPassword());
  },
});

// creation of the link : container
// connect(redux)(react) - connect(what we need)(who needs it)
const ForgottenPwdContainer = connect(mapStateToProps, mapDispatchToProps)(ForgottenPwd);

export default ForgottenPwdContainer;
