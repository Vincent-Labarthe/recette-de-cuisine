// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

// == Import
import Field from 'src/components/Field';
import ModalConfirmRegister from './ModalConfirmRegister';

import image from 'src/assets/images/avocado-toast-2-r.png';
import FormStyled from 'src/components/FormStyled';

// == Composant
const SignUp = ({
  firstnameValue,
  lastnameValue,
  emailValue,
  passwordValue,
  confirmPasswordValue,
  changeFieldValue,
  register,
  isMember,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    register();
    console.log('Sign Up handleSubmit ok')
  };
  const emptyFirstnameInput = (firstnameValue === '') ? true : false;
  const emptyLastnameInput = (lastnameValue === '') ? true : false;
  const emptyEmailInput = (emailValue === '') ? true : false;
  const emptyPasswordInput = (passwordValue === '') ? true : false;
  const emptyConfirmPasswordInput = (confirmPasswordValue === '') ? true : false;

  const regexCourriel = /.+@.+\..+/;
  const validEmail = regexCourriel.test(emailValue);
  const validPassword = (passwordValue.length >= 8);
  const samePasswordValues = (passwordValue === confirmPasswordValue) ? true : false;

  return (
    <FormStyled>
      <section className="content-part">
        <h2>Sign Up</h2>
        <Form onSubmit={handleSubmit}>
          <div className="form">
            <Field
              name="firstname"
              value={firstnameValue}
              placeholder="First Name"
              changeValue={changeFieldValue}
              emptyField={emptyFirstnameInput}
            />
            <Field
              name="lastname"
              value={lastnameValue}
              placeholder="Last Name"
              changeValue={changeFieldValue}
              emptyField={emptyLastnameInput}
            />
            <Field
              name="email"
              value={emailValue}
              placeholder="E-mail"
              changeValue={changeFieldValue}
              type="email"
              emptyField={emptyEmailInput}
              validField={validEmail}
            />
            <Field
              name="password"
              value={passwordValue}
              placeholder="Password"
              changeValue={changeFieldValue}
              type="password"
              emptyField={emptyPasswordInput}
              validField={validPassword}
            />
            <Field
              name="confirmPassword"
              value={confirmPasswordValue}
              placeholder="Confirm password"
              changeValue={changeFieldValue}
              type="password"
              emptyField={emptyConfirmPasswordInput}
              validField={samePasswordValues}
            />
            {(!validEmail && !emptyEmailInput) &&
              <p className="instruction">
                Your email is not valid yet...
              </p>}
            {(!validPassword && !emptyPasswordInput) &&
              <p className="instruction">
                Your password is not valid yet...
              </p>}
            {(validPassword && emptyConfirmPasswordInput) &&
              <p className="instruction">
                Please enter a confirmed password...
              </p>}
            {(!samePasswordValues && !emptyPasswordInput) &&
              <p className="instruction">
                The two passwords are not the same...
              </p>}
            {
              (!emptyFirstnameInput && !emptyLastnameInput && !emptyEmailInput && !emptyPasswordInput && !emptyConfirmPasswordInput && validEmail && validPassword && samePasswordValues)
              &&
              <ModalConfirmRegister triggerConnexion={isMember} />
            }
            <div className="links">
              <Link to="/sign-in" className="link">Already a member ?</Link>
            </div>

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

SignUp.propTypes = {
  firstnameValue: PropTypes.string.isRequired,
  lastnameValue: PropTypes.string.isRequired,
  emailValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  confirmPasswordValue: PropTypes.string.isRequired,
  changeFieldValue: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
};
// == Export
export default SignUp;
