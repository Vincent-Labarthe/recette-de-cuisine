import { connect } from 'react-redux';

// Du composant qui a besoin de data ou d'actions
import GroceryList from 'src/components/GroceryList';

// Action Creators
import { doSomething } from 'src/actions/demo';

// == Data / state
// Notre composant à besoin de données depuis le state ?
// On prépare un objet avec les props attendues par le composant
const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  console.log('id dans GroceryList container',id);

  const[ selectedGroceryList] = state.grocery.lists.filter((list) => (list.id == id));
  console.log(selectedGroceryList.ingredients);
  return ({
    name: selectedGroceryList.name,
    ingredients: selectedGroceryList.ingredients,
    id: id,
  });
};

// == Actions / dispatch
// Notre composant à besoin d'agir sur le state ?
// On prépare un objet avec les props attendues par le composant
const mapDispatchToProps = (dispatch) => ({
  doAction: () => {
    dispatch(doSomething('Hello'));
  },
});

// création du lien : container
// connect(redux)(react) - connect(ce dont on a besoin)(qui en a besoin)
const GroceryListContainer = connect(mapStateToProps, mapDispatchToProps)(GroceryList);

export default GroceryListContainer;
