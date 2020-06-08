import styled from 'styled-components';
import theme, { lighten } from 'src/styles/theme';

const FiltersStyled = styled.div`
  .filters-mobile {
    width: 100%;
    position: fixed;
    bottom: 3.7em;
    display: flex;
    justify-content: center;
    background-color: ${lighten(theme.alternativeColor, 60)};
    padding: .3em;
    ul {
      margin: .2em .4em;
      font-family: ${theme.contentFont};
      .filter {
        margin: .5em 0;
        input {
          margin-right: .3em;
        }
      }
    }
  }
  .filters-desktop {
    display: none;
  }
  @media only screen and (min-width: 650px) {
    .filters-mobile {
      display: none;
    }
    .filters-desktop {
      width: 100%;
      display: flex;
      position: static;
      height: 10em;
      padding: .3em;
      ul {
        margin: .5em 1em;
        .filter {
          margin-bottom: .4em;
          display: flex;
          flex-direction: row;
          align-items: center;
          input {
            width: 15px;
            height:15px;
          }
          span {
            margin-left: .3em;
          }
        }
      }
    }
  }
`;

export default FiltersStyled;
