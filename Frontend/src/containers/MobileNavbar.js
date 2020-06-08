import { connect } from 'react-redux';
import MobileNavbar from 'src/components/MobileNavbar';

// Action Creators
import {
  changeField,
  search,
  openSearchMode,
  closeSearchMode,
  changeFiltersStatus,
} from 'src/actions/recipes';

// == Data / state
const mapStateToProps = (state) => ({
  searchValue: state.search.searchBar,
  searchIsOpen: state.search.searchIsOpen,
  filtersIsOpen: state.search.filtersIsOpen,
  selectedFilters: state.search.selectedFilters,
  isConnected: state.auth.isConnected,
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
  openSearchMode: () => {
    dispatch(openSearchMode());
  },
  closeSearchMode: () => {
    dispatch(closeSearchMode());
  },
  changeFiltersStatus: (filtersIsOpen) => {
    dispatch(changeFiltersStatus(filtersIsOpen));
  },
});

// connect(redux)(react)
const MobileNavbarContainer = connect(mapStateToProps, mapDispatchToProps)(MobileNavbar);

export default MobileNavbarContainer;
