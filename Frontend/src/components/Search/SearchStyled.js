import styled from 'styled-components';

import theme, { lighten } from 'src/styles/theme';

const SearchStyled = styled.div`

    @media only screen and (min-width: 650px) {

      .search-zone {
        
        position: relative;
        
        .search-bar {
          background-color: white;
          border: 2px solid ${lighten(theme.alternativeColor, 40)};
          border-radius: 6px;
          padding: .3em .4em;
          /*box-shadow: inset 0 0 25px rgba(0, 0, 0, 0.1) ;*/
        }
        .search-bar-icon {
          background-color: white};
          margin: 0;
        }
        .search-bar-icon:hover {
          cursor: pointer;
        }
        .search-bar-input {
          border: none;
          padding: .4em;
          background-color: white;
          ::placeholder {
            font-family: ${theme.contentFont};
          }
        }
        .filters {
          display: none;
        }
      }

      &.filters--open{
        .filters {
          display: flex;
          justify-content: center;
          width: 18em;
          position: absolute;
          top: 2.6em;
          background-color: white;
        }
      }
    }
`;

export default SearchStyled;
