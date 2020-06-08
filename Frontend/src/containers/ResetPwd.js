import { connect } from 'react-redux';

// Component that needs action or value
import ResetPwd from 'src/components/ResetPwd';

// Action Creators
import { changeField, addToken, resetPassword } from 'src/actions/auth';

// == Data / state
// We prepare an object with the props expected by the component
const mapStateToProps = (state, ownProps) => {
  const { token } = ownProps.match.params;
  // console.log(token);
  return ({
    passwordValue: state.auth.password,
    confirmPasswordValue: state.auth.confirmPassword,
    token: token,
  });
};


// == Actions / dispatch
// We prepare an object with the props expected by the component
const mapDispatchToProps = (dispatch) => ({
  changeFieldValue: (name, value) => {
    dispatch(changeField(name, value));
  },
  addToken: (token) => {
    console.log('je sui le token', token);
    dispatch(addToken(token));
  },
  resetPassword: () => {
    // eslint-disable-next-line no-console
    console.log('Envoi de reset password...');
    dispatch(resetPassword());
  },
});

// creation of the link : container
// connect(redux)(react) - connect(what we need)(who needs it)
const ResetPwdContainer = connect(mapStateToProps, mapDispatchToProps)(ResetPwd);

export default ResetPwdContainer;
