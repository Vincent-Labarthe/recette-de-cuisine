import styled from 'styled-components';
import theme from 'src/styles/theme';

const IngredientsStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
  transform: translateX(-1000px);
  transition: .6s;
  width: 100%;
  height: 400vh;
  background-color: white;
  &.settings--open{
    transform: translateX(0);
  }
  .ingredients-title {
    width: 100%;
    font-family: ${theme.titleFont};
    text-align: center;
    color: {theme.strongColor};
    font-size: 2em;
    padding: .5em;
    margin-top: 0;
  }
  .buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 2em 0;
    .buttons-without-icon {
      display: flex;
      flex-direction: column;
      .button {
        margin-bottom: .5em;
      }
    }
  }
  .ingredient {
    margin-bottom: .4em;
    font-family: ${theme.contentFont};
    margin-left: 1em;
  }
  @media only screen and (min-width: 760px) {
    }
`;

export default IngredientsStyled;
