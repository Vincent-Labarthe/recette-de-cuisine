// == Import npm
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button, Input, Icon } from 'semantic-ui-react';

// == Import
import image from 'src/assets/images/avocado-toast-2-r.png';
import FormStyled from 'src/components/FormStyled';

// == Composant
const UserData = ({
  firstname,
  lastname,
  email,
  changeFieldValue,
  updateData,
}) => {
  const [isTransparent, setIsTransparent] = useState(true);

  const classCss = classNames('validData', {
    // la classe css 'task--done' ne sera présente que si done vaut true
    'validData--transparent': isTransparent,
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('Personnal Data  handleSubmit ok');
    updateData();
  };

  const handleChange = (evt) => {
    // console.log(evt.target.name, evt.target.value);
    changeFieldValue(evt.target.name, evt.target.value);
  };

  const handleClick = () => {
    console.log('HandleClick click');
    setIsTransparent(!isTransparent);
  }
  return (
    <FormStyled>
      <section className="content-part">
        <h2>
          Personal data
          <Icon link size="small" name="pencil" onClick={handleClick} />
        </h2>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-input">
            <Input
              className="datasInput"
              size="large"
              type="text"
              name="firstname"
              transparent={isTransparent}
              disabled={isTransparent}
              autoComplete="off"
              placeholder={firstname}
              onChange={handleChange}
            />
            <Input
              className="datasInput"
              size="large"
              type="text"
              name="lastname"
              transparent={isTransparent}
              disabled={isTransparent}
              autoComplete="off"
              placeholder={lastname}
              onChange={handleChange}
            />

            <Input
              className="datasInput"
              size="large"
              type="email"
              name="email"
              fluid
              transparent={isTransparent}
              disabled={isTransparent}
              autoComplete="off"
              placeholder={email}
              onChange={handleChange}
            />
          </div>
          <Button className={classCss} color="orange" >Submit</Button>
        </form>
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

// == Export
export default UserData;

