import styled from 'styled-components';
// import theme from 'src/styles/theme';

const ModalStyled = styled.div` 
  position: absolute;
  margin-bottom: 0;
  height: 400vh;
  /*min-height: 87vh;*/
  width: 100%;
  /*
  width: 100%;
  height: 400vh;
  */
  transform: translateX(-1000px);
  transition: .6s;
  background-color: white;
  z-index:2;
  &.settings--open{
    transform: translateX(0);
  }
  .grocery-lists-desktop-modale {
    display: none;
  }

  @media only screen and (min-width: 650px) {
    height: auto;
    .recipe-modal {
      overflow-x: hidden;
      height: 87vh;
    }
    width: 50%;
    .grocery-lists-desktop-modale {
      display: inline;
    }
    .grocery-lists-mobile-modale {
      display: none;
    }
    .steps-modale {
      display: none;
    }
    .ingredients-modale {
      display: none;
    }
  }
  @media only screen and (min-width: 1020px) {
    width: 30%;
`;


export default ModalStyled;
