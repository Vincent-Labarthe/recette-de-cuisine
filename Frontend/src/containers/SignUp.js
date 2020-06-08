import { connect } from 'react-redux';
import SignUp from 'src/components/SignUp';

// Action Creators
import { changeField, register } from 'src/actions/auth';

// == Data / state
const mapStateToProps = (state) => ({
  firstnameValue: state.auth.firstname,
  lastnameValue: state.auth.lastname,
  emailValue: state.auth.email,
  passwordValue: state.auth.password,
  confirmPasswordValue: state.auth.confirmPassword,
  isMember: state.auth.isMember,
});

// == Actions / dispatch
const mapDispatchToProps = (dispatch) => ({
  changeFieldValue: (name, value) => {
    dispatch(changeField(name, value));
  },
  register: () => {
    dispatch(register());
  },
});

// connect(redux)(react)
const SignUpContainer = connect(mapStateToProps, mapDispatchToProps)(SignUp);

export default SignUpContainer;
