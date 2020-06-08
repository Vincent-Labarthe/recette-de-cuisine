// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
// == Import
import Field from 'src/components/Field';
import ModalConfirmConnexion from './ModalConfirmConnexion';
import image from 'src/assets/images/avocado-toast-2-r.png';
import FormStyled from 'src/components/FormStyled';

// == Composant
const SignIn = ({
  emailValue,
  passwordValue,
  changeFieldValue,
  handleSignIn,
  isConnected,
}) => {

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('Sign in handleSubmit ok');
    handleSignIn();
  };
  const emptyEmailInput = (emailValue === '') ? true : false;
  // console.log('champs email vide :', emptyEmailInput);
  const emptyPasswordInput = (passwordValue === '') ? true : false;
  // console.log('champs password vide :', emptyPasswordInput);
  const regexCourriel = /.+@.+\..+/;
  const validEmail = regexCourriel.test(emailValue);
  const validPassword = (passwordValue.length >= 8);
  // console.log('Email valide :', validEmail);

  return (
    <FormStyled>
      <section className="content-part">
        <h2>Sign In</h2>
        <Form onSubmit={handleSubmit}>
          <div className="form">
            <Field
              name="email"
              value={emailValue}
              changeValue={changeFieldValue}
              type="email"
              placeholder="E-mail"
              validField={validEmail}
              emptyField={emptyEmailInput}
            />
            <Field
              name="password"
              value={passwordValue}
              changeValue={changeFieldValue}
              type="password"
              placeholder="Password"
              validField={validPassword}
              emptyField={emptyPasswordInput}
            />
            {(emptyEmailInput && emptyPasswordInput) &&
              <p className="instruction">
                Please enter your mail and password...
              </p>}
            {(!emptyEmailInput && emptyPasswordInput && !validEmail) &&
              <p className="instruction">
                Your mail is not valid yet...
              </p>}
            {(!emptyEmailInput && emptyPasswordInput && validEmail) &&
              <p className="instruction">
                Please enter your password...
            </p>}
            {(!emptyEmailInput && !emptyPasswordInput && !validPassword && validEmail) &&
              <p className="instruction">
                Your password is at least 8 characters long...
            </p>}
            {(emptyEmailInput && validPassword) &&
              <p className="instruction">
                Please enter your email...
            </p>}
            {(!emptyEmailInput && !validEmail && validPassword) &&
              <p className="instruction">
                your email is not valid yet...
            </p>}
            {(emptyEmailInput && !emptyPasswordInput && !validPassword) &&
              <p className="instruction">
                Your password is at least 8 characters long...
            </p>}
            {
              (!emptyEmailInput && !emptyPasswordInput && validEmail && validPassword)
              &&
              <ModalConfirmConnexion triggerConnexion={isConnected} />
            }
          </div>
          <div className="links">
            <Link to="/forgotten-pwd" className="link">Forgot password ?</Link>
            <Link to="/sign-up" className="link">Not a member yet ?</Link>
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

SignIn.propTypes = {
  emailValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  changeFieldValue: PropTypes.func.isRequired,
  handleSignIn: PropTypes.func.isRequired,
};

// == Export
export default SignIn;
