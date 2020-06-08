// == Import npm
import React from 'react';
import { Form, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

// == Import
import FieldStyled from './FieldStyled';

// == Composant
const Field = ({
  value,
  changeValue,
  placeholder,
  name,
  type,
  validField,
  emptyField,
}) => {
  const handleChange = (evt) => {
    // console.log(evt.target.name, evt.target.value);
    changeValue(evt.target.name, evt.target.value);
  };

  const colorIcon = (validField) ? 'green':'red';
  return (
    <FieldStyled>
      <Form.Field>
        <input
          autoComplete="off"
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={handleChange}
        />
      </Form.Field>
      {!emptyField && <Icon name={validField && "check"} color={colorIcon} />}
      {!emptyField && <Icon name={!validField && "close"} color={colorIcon} />}
    </FieldStyled>
  );
};

Field.propTypes = {
  validField: PropTypes.bool,
  emptyField: PropTypes.bool,
  value: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  changeValue: PropTypes.func.isRequired,
  type: PropTypes.oneOf([
    'text',
    'email',
    'password',
  ]),
};
Field.defaultProps = {
  value: '',
  type: 'text',
  validField: true,
};
// == Export
export default Field;
