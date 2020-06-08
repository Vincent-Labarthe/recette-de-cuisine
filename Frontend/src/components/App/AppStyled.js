
import styled from 'styled-components';
import theme from 'src/styles/theme';

const AppStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  .top-page {
    position:fixed;
    width: 100%;
    z-index: 10;
  }
  .middle-page {
    margin-top: 6em;
    display: flex;
    flex-direction: column;
    .footer-mobile {
      align-self: flex-end;
      width: 100%;
    }
    /*
    z-index: 1;
    */
    /* margin-top: 3.6em; */
  }
  .mobile-presentation-text {
    font-family: ${theme.contentFont};
    padding: 1em 1em 0 1em;
    margin-bottom: 0;
    text-align: center;
  }
  em {
    color: ${theme.strongColor}; 
    font-weight: bold;
  }
  .footer-desktop {
    display: none;
  }
  .mobile-navbar {
    position:fixed;
    bottom: 0;
    width: 100%;
    z-index: 10;
  }
  &.user--connected{
    .top-page {
      /*
      position: relative;
      position: fixed;
      */
    }
    .middle-page {
      margin-top: 7em;
      min-height: 72vh;
    }
  }


  
  @media only screen and (min-width: 650px) {
    .footer-mobile {
      display: none;
    }
    .footer-desktop {
      display: block;
      position:fixed;
      bottom: 0;
      width: 100%;
      z-index: 10;
    }
  }
`;

export default AppStyled;
