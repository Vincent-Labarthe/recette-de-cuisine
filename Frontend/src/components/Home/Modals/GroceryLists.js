import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Form,
  Icon,
} from 'semantic-ui-react';
import classNames from 'classnames'; // Will be useful for defining classNames based on the state
import groceryListsData from 'src/assets/data/dataGroceryLists';
import GroceryListsStyled from './GroceryListsStyled';

// == Component
const GroceryLists = ({
  groceryListsIsOpen,
  closeGroceryListsModal,
  closeAllModals,
  isConnected,
  selectedLists,
  changeFieldValue,
  newGroceryListValue,
  extendedIngredients,
  userToken,
  saveListData,
  generateGroceryList,
}) => {
  /*
  const groceryListsWrapper = useRef(null);
  useEffect(() => {
    //groceryListsWrapper.current.scrollTo(0, groceryListsWrapper.top.scrollHeight);
    window.scrollTo(0, 0);
  });
  */
  let ingredients = '';
  // prevents the app from crashing in case the recipe doesn't send extendedIngredients
  if (extendedIngredients.length === 0) {
    ingredients = [
      {
        id: 1,
        name: 'Sorry, no ingredients could be found for this recipe :/ ...',
        amount: '',
        unit: '',
      },
    ];
  }
  else {
    ingredients = extendedIngredients;
  }
  const handleClickCancel = () => {
    closeGroceryListsModal();
  };
  const handleSubmit = () => {
    const generatedIngredientsList = ingredients.map((ingredient) => {
      const ingredientData = {};
      ingredientData.id = ingredient.id;
      ingredientData.name = ingredient.name;
      ingredientData.amount = ingredient.amount;
      ingredientData.unit = ingredient.unit;
      return ingredientData;
    });
    const generateListData = {
      token: sessionStorage.getItem('userToken'),
      shoppingListTitle: newGroceryListValue,
      // shoppingListId: selectedLists,
      ingredientsList: generatedIngredientsList,
    };

    saveListData(generateListData);
    generateGroceryList();
  };
  const handleClickBackToRecipes = () => {
    closeAllModals();
  };

  const handleCheck = (event) => {
    const listId = event.target.id;

    if (selectedLists.length === 0) {
      selectedLists.push(listId);
    }
    else {
      selectedLists.pop();
      selectedLists.push(listId);
    }
    // ! TO KEEP ! Will be useful for a future functionality (when the user
    // will get the possibility to select mutliple list !)
    // This algorithm manages the adding/removal of the list id in the array selectedLists
    /*
    const isInSelectedLists = () => {
      const foundId = selectedLists.find((id) => id === listId);
      return foundId;
    };
    if (selectedLists.length === 0) {
      selectedLists.push(listId);
    }
    else {
      const checkInArray = isInSelectedLists();
      if (checkInArray === undefined) {
        selectedLists.push(listId);
      }
      else {
        for (let i = 0; i < selectedLists.length; i++) {
          if (selectedLists[i] === listId) {
            selectedLists.splice(i, 1);
          }
        }
      }
    }
    */
  };

  const handleChange = (evt) => {
    // console.log(evt.target.name, evt.target.value);
    changeFieldValue(evt.target.name, evt.target.value);
  };

  return (
    <GroceryListsStyled
      /* ref={groceryListsWrapper} */
      className={classNames({
        'settings--open': groceryListsIsOpen,
        'user--connected': isConnected,
      })}
    >
      <h3 className="lists-title">Your lists</h3>
      <p>Select one of your grocery lists or <em>create</em> a new one !</p>
      <Form onSubmit={handleSubmit}>
        <ul>
          <div className="grocery-lists">
            {groceryListsData.map((groceryList) => (
              <li className="grocery-list" key={groceryList.id}>
                <input
                  className="grocery-list-checkbox"
                  type="radio"
                  id={groceryList.id}
                  name="groceryList"
                  value={groceryList.value}
                  onChange={handleCheck}
                />
                <label className="grocery-list-name" htmlFor={groceryList.id}>{groceryList.name}</label>
              </li>
            ))}
          </div>
        </ul>
        <div className="input">
          <input
            autoComplete="off"
            type="text"
            placeholder="Create a new list"
            name="newGroceryList"
            value={newGroceryListValue}
            onChange={handleChange}
          />
        </div>
        <div className="button">
          <Button color="orange" type="submit">Save</Button>
        </div>
      </Form>
      <div className="cancel-button">
        <div className="button">
          <Button color="grey" type="button" onClick={handleClickCancel}>Cancel</Button>
        </div>
      </div>
      <div className="back-buttons">
        <div className="icon-back">
          <Icon name="chevron left" size="big" color="grey" onClick={handleClickCancel} />
        </div>
        <div className="back-to-recipes-button">
          <div className="button">
            <Button color="grey" type="button" onClick={handleClickBackToRecipes}>Get back to the recipes list</Button>
          </div>
        </div>
      </div>
    </GroceryListsStyled>
  );
};

GroceryLists.propTypes = {
  groceryListsIsOpen: PropTypes.bool.isRequired,
  closeGroceryListsModal: PropTypes.func.isRequired,
  closeAllModals: PropTypes.func.isRequired,
  isConnected: PropTypes.bool.isRequired,
  selectedLists: PropTypes.array.isRequired,
  changeFieldValue: PropTypes.func.isRequired,
  newGroceryListValue: PropTypes.string.isRequired,
  extendedIngredients: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      unit: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  userToken: PropTypes.string.isRequired,
  saveListData: PropTypes.func.isRequired,
  generateGroceryList: PropTypes.func.isRequired,
};
// == Export
export default GroceryLists;
