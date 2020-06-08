
// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'semantic-ui-react';
// == Import
// import LogForm from 'src/components/SignUp/LogForm';
import Field from 'src/components/Field';
import ModalConfirmEmail from './ModalConfirmEmail';
// import signUpData from 'src/assets/data/signUpData';
import image from 'src/assets/images/avocado-toast-2-r.png';
import FormStyled from 'src/components/FormStyled';


// == Composant
const ForgottenPwd = ({
  emailValue,
  changeFieldValue,
  sendResetPassword,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('Forgotten password: Send Reset Link handlesubmit ok');
    sendResetPassword();
  };
  const emptyEmailInput = (emailValue === '') ? true : false;
  const regexCourriel = /.+@.+\..+/;
  const validEmail = regexCourriel.test(emailValue);

  return (
    <FormStyled>
      <section className="content-part">
        <h2>Forgotten Password</h2>
        <Form onSubmit={handleSubmit}>
          <div className="form">
            <Field
              name="email"
              value={emailValue}
              placeholder="E-mail"
              changeValue={changeFieldValue}
              type="email"
              validField={validEmail}
              emptyField={emptyEmailInput}
            />
            {emptyEmailInput && 
              <p className="instruction">
                Please enter your email...
              </p>}
              {(!validEmail && !emptyEmailInput)&& 
              <p className="instruction">
                Your email is not valid yet...
              </p>}
            {(!emptyEmailInput && validEmail) && 
              <ModalConfirmEmail />
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

ForgottenPwd.propTypes = {
  emailValue: PropTypes.string.isRequired,
  changeFieldValue: PropTypes.func.isRequired,
  sendResetPassword: PropTypes.func.isRequired,
};
// == Export
export default ForgottenPwd;
