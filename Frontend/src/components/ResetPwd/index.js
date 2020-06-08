
// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
// == Import
// import LogForm from 'src/components/SignUp/LogForm';
import Field from 'src/components/Field';
import ModalConfirmPassword from './ModalConfirmPassword';

// import signUpData from 'src/assets/data/signUpData';
import image from 'src/assets/images/avocado-toast-2-r.png';
import FormStyled from 'src/components/FormStyled';

// == Composant
const ResetPwd = ({
  passwordValue,
  confirmPasswordValue,
  changeFieldValue,
  resetPassword,
  addToken,
  token,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('Reset password: Reset Password handlesubmit');
    addToken(token);
    resetPassword();
  };
  const emptyPasswordInput = (passwordValue === '') ? true : false;
  const validPassword = (passwordValue.length >= 8);
  const emptyConfirmPasswordInput = (confirmPasswordValue === '') ? true : false;
  const samePasswordValues = (passwordValue === confirmPasswordValue) ? true : false;

  return (
    <FormStyled>
      <section className="content-part">
        <h2>Reset Password</h2>
        <Form onSubmit={handleSubmit}>
          <div className="form">
            <Field
              name="password"
              value={passwordValue}
              placeholder="Password"
              changeValue={changeFieldValue}
              type="password"
              validField={validPassword}
              emptyField={emptyPasswordInput}
            />
            <Field
              name="confirmPassword"
              value={confirmPasswordValue}
              placeholder="Confirm password"
              changeValue={changeFieldValue}
              type="password"
              validField={samePasswordValues}
              emptyField={emptyConfirmPasswordInput}
            />
            {(emptyPasswordInput && emptyConfirmPasswordInput)
              &&
              <span className="instruction">Please enter your password...</span>
            }
            {(!validPassword && emptyConfirmPasswordInput)
              &&
              <span className="instruction">The password is at least 8 characters long...</span>
            }
            {(validPassword && emptyConfirmPasswordInput)
              &&
              <span className="instruction">Please enter the confirmed password...</span>
            }
            {
              (validPassword && !emptyConfirmPasswordInput && !samePasswordValues)
              &&
              <span className="instruction">Passwords are not identical</span>
            }
            {
              (validPassword && samePasswordValues)
              &&
              <ModalConfirmPassword />
            }
          </div>
        </Form>
      </section>
      <section className="picture-part">
        <div className="image">
          <img
            src={image}
            alt="A delicious avocado toast. Yummy !"
            className="image-size"
          />
        </div>
      </section>
    </FormStyled>
  );
};

ResetPwd.propTypes = {
  passwordValue: PropTypes.string.isRequired,
  confirmPasswordValue: PropTypes.string.isRequired,
  changeFieldValue: PropTypes.func.isRequired,
  resetPassword: PropTypes.func.isRequired,
};
// == Export
export default ResetPwd;
