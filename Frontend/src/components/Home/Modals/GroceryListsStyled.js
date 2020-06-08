import styled from 'styled-components';
import theme from 'src/styles/theme';

const GroceryListsStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  transform: translateX(-1000px);
  transition: .6s;
  width: 100%;
  height: 400vh;
  position: absolute;
  top: 0;
  z-index: 3;
  background-color: white;

  .grocery-lists {
    display: none;
  }
    .lists-title {
      margin-top: 1em;
      width: 100%;
      font-family: ${theme.titleFont};
      text-align: center;
      color: ${theme.secondaryColor};
      font-size: 2em;
      padding: .5em;
    }
    p {
      font-family: ${theme.contentFont};
      font-size: 1.2em;
      margin: 0 3em 2em;
      text-align: center;
    }
    .input {
      display: flex;
      justify-content: center;
      margin: .4em auto 2em;
    }
    .button {
      display: flex;
      justify-content: center;
      margin: .25em auto;
      width: 13.5em;
    }
    .cancel-button {
      display: none;
    }
    .icon-back {
      margin-right: 1em;
    }
    .back-buttons {
      display: flex;
      flex-direction: row;
      margin-right: 3.6em;
    }
    &.settings--open {
      transform: translateX(0);
    }
    &.user--connected {
      .grocery-lists {
        display: flex;
        flex-direction: column;
        margin-bottom: 1em;
        .grocery-list {
          font-family: ${theme.contentFont};
          padding: .5em;
          display: flex;
          flex-direction: row;
          align-items: center;
          .grocery-list-checkbox {
            margin-right: .5em;
            width: 17px;
            height: 17px;
          }
          .grocery-list-name {
            font-family: ${theme.contentFont};
            font-size: 1.3em;
          }
        }
      }
    }
  @media only screen and (min-width: 760px) {
    height: 88vh;
    .cancel-button {
      display: block;
    }
    .back-buttons {
      display: none;
    }
    }
`;

export default GroceryListsStyled;
