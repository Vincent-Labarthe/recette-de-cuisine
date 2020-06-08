import styled from 'styled-components';
import theme from 'src/styles/theme';

const HomeStyled = styled.div`
  display: flex;
  flex-direction: row;
  
  .dynamic-display {
    display: none;
  }
  .recipes-display {
    width: 100%;

    .mobile-presentation {
      display: block;
    }
    .recipes-display-title {
      text-align: center;
      margin-top: .2em;
      font-family: ${theme.titleFont};
      color: ${theme.secondaryColor};
      font-size: 2em;
    }
    .recipes-display-cards-big-screen {
      display: none;
    }
    .recipes-display-cards-medium-screen {
      display: none;
    }
    .recipes-display-cards-little-screen {
      margin-top: 0;
      display: block;
      padding: .5em;
    }
  }
  /* Image of the /favorite-recipes page */
  .image {
    display: none;
  }
  @media only screen and (min-width: 650px) {
    .dynamic-display {
      height: 86.5vh;
      display: flex;
      flex-direction: column;
      width: 50%;
      /*
      position: relative;
      overflow-x: hidden;
      */
      .welcome-title {
        text-align: center;
        margin-top: 1.3em;
        font-family: ${theme.titleFont};
        color: ${theme.secondaryColor};
        font-size: 2em;
      }
      .presentation-paragraphs {
        display: flex;
        flex-direction: column;
        /*height: 60vh;*/
        justify-content: center;
        .presentation-paragraph {
          display: flex;
          align-items: center;
          padding: 1.5em;
          margin-top: 1em;
          p {
            margin: 0 2em;
            font-family: ${theme.contentFont};
            font-size: 1.3em;
          }
        }
      }
    }

    .recipes-display {
      height: 86.5vh;
      width: 50%;
      border-left: 2px solid lightgrey;
      overflow-x: hidden;
      /*padding-bottom: 2.5em;*/
      .mobile-modale {
        display: none;
      }
      .mobile-presentation {
        display: none;
      }
      .recipes-display-title {
        margin-top: 1em;
      }
      .recipes-display-cards-big-screen {
        display: none;
      }
      .recipes-display-cards-medium-screen {
        display: none;
      }
      .recipes-display-cards-little-screen {
        margin-top: 0;
        display: block;
        padding: 2em;
      }
    }
  }
  /* Image of the /favorite-recipes page */
  .image {
      display: flex;
      justify-content: center;
      .image-size {
        max-width: 100%;
        height: 86vh;
      }
    }
  @media only screen and (min-width: 900px) {
    .recipes-display {
      .recipes-display-cards-big-screen {
        display: none;
      }
      .recipes-display-cards-medium-screen {
        margin-top: 0;
        display: block;
        padding: 2em;
      }
      .recipes-display-cards-little-screen {
        display: none;
      }
    }
  }

  @media only screen and (min-width: 1020px) {
    .dynamic-display {
      width: 30%;
    }
    .recipes-display {
      width: 70%;
      height: 86.5vh;
      .recipes-display-cards-big-screen {
        margin-top: 0;
        display: block;
        padding: 2em;
      }
      .recipes-display-cards-medium-screen {
        display: none;
      }
      .recipes-display-cards-little-screen {
        display: none;
      }
    }
  }
`;

export default HomeStyled;
