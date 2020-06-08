import styled from 'styled-components';
import theme from 'src/styles/theme';

const StepsStyled = styled.div`
  height: 400vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
  transform: translateX(-1000px);
  transition: .6s;
  width: 100%;
  background-color: white;
  &.settings--open{
    transform: translateX(0);
  }
  .recipe-image {
    width: 100%;
    height: 17em;
    margin-top: .7em;
  }
  .steps-title {
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
  }
  .step {
    margin-bottom: .4em;
    font-family: ${theme.contentFont};
    margin-left: 1em;
  }
  @media only screen and (min-width: 760px) {
    }
`;

export default StepsStyled;
