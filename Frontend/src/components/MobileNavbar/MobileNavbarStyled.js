import styled from 'styled-components';
import theme, { lighten } from 'src/styles/theme';

const MobileNavbarStyled = styled.div`
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  position: fixed;
  bottom: 0;
  z-index: 10;
  width: 100%;
  border-top: 1px solid ${lighten(theme.alternativeColor, 50)};
  border-bottom: 1px solid ${lighten(theme.alternativeColor, 50)};
  
  .icons-mode {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1.15em 1em;
    .grocery-lists-icon {
      display: none;
    }
  }
  .search-mode {
    display: none;
    .filters {
      display: none;
    }
  }

  &.search--open{
    .icons-mode {
    display: none;
    }
    .search-mode {
    display: flex;
      .search-bar-form {
        width: 100%;
      }
      .search-mode-bottom {
        display: flex;
        width: 100%;
        padding: .5em 1em;
        .search-bar {
          width: 90%;
          background-color: ${lighten(theme.alternativeColor, 60)};
          border: 2px solid ${lighten(theme.alternativeColor, 50)};
          border-radius: 6px;
          padding: .5em .4em;
          display: flex;
          justify-content: space-between;
          .search-bar-icon {
            background-color:  ${lighten(theme.alternativeColor, 60)};
            margin: 0;
          }
          .search-bar-input {
            border: none;
            padding: .4em;
            background-color:  ${lighten(theme.alternativeColor, 60)};
            width: 75%;
          }
        }
        .cancel-button {
          align-self: flex-end;
          margin: auto 0 .5em .5em;
          color: ${theme.alternativeColor};
          font-family: ${theme.contentFont};
        }
      }
    }
  }

  &.filters--open {
    .filters {
      display: flex;
      height: 5em;
    }
  }
  &.user--connected {
    .grocery-lists-icon {
      display: inline;
    }
  }

  @media only screen and (min-width: 650px) {
    .icons-mode {
    display: none;
    }
    .search-mode {
    display: none;
    }
`;

export default MobileNavbarStyled;
