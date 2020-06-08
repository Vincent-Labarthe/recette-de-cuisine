import React, { useState } from 'react';
import classNames from 'classnames';
import { Input, Form, Button, Icon } from 'semantic-ui-react';

import GroceryListsItem from './GroceryListsItem';
import image from 'src/assets/images/avocado-toast-2-r.png';
import FormStyled from 'src/components/FormStyled';

const GroceryLists = ({ groceryLists, changeFieldValue, addGroceryList, add }) => {
  console.log(groceryLists);
  const [isTransparent, setIsTransparent] = useState(true);

  const classCss = classNames('addGroceryList-input', {
    // la classe css 'task--done' ne sera présente que si done vaut true
    'addGroceryList-save': isTransparent,
  });

  const handleClick = () => {
    // console.log('HandleClick click');
    setIsTransparent(!isTransparent);
  };

  const handleChange = (evt) => {
    // console.log(evt.target.name, evt.target.value);
    changeFieldValue(evt.target.name, evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    add(changeFieldValue);
    addGroceryList();
    console.log('GroceryLists  handleSubmit ok');
  };

  return (
    <FormStyled>
      <section className="content-part">
        <div className="content-part-title">
          <h2>My shopping list</h2>
          <Icon className="link-plus" name="plus" onClick={handleClick} />
        </div>
        <div className="list grocery-lists">
          {groceryLists.map((list) => (
            <GroceryListsItem
              key={list.id}
              id={list.id}
              title={list.name}
              date={list.date}
            />
          ))}
        </div>
        <Form 
          className="addGroceryList"
          onSubmit={handleSubmit}
        >
          <Input
            className={classCss}
            size="large"
            type="text"
            name="groceryNewName"
            autoComplete="off"
            placeholder=""
            onChange={handleChange}
          />
          <Button className={classCss} color="orange" content="Save"/>
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

export default GroceryLists;
