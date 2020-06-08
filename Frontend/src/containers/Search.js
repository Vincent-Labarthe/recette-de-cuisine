import { connect } from 'react-redux';
import Search from 'src/components/Search';
import { changeField, search, changeFiltersStatus } from 'src/actions/recipes';

// == Data / state
const mapStateToProps = (state) => ({
  searchValue: state.search.searchBar,
  filtersIsOpen: state.search.filtersIsOpen,
  selectedFilters: state.search.selectedFilters,
  loadingStatus: state.home.loadingStatus,
});

// == Actions / dispatch
const mapDispatchToProps = (dispatch) => ({
  changeFieldValue: (name, value) => {
    dispatch(changeField(name, value));
  },
  search: () => {
    dispatch(search());
  },
  changeFiltersStatus: (filtersIsOpen) => {
    dispatch(changeFiltersStatus(filtersIsOpen));
  },
});

// connect(redux)(react)
const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

export default SearchContainer;
