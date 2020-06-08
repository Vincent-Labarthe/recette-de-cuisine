import { connect } from 'react-redux';
import Filters from 'src/components/Filters';
import { updateSelectedFilters } from 'src/actions/recipes';

// == Data / state
const mapStateToProps = (state) => ({
  selectedFilters: state.search.selectedFilters,
});

// == Actions / dispatch
const mapDispatchToProps = (dispatch) => ({
  updateSelectedFilters: (selectedFilters) => {
    dispatch(updateSelectedFilters(selectedFilters));
  },
});

// connect(redux)(react)
const FiltersContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Filters);

export default FiltersContainer;
