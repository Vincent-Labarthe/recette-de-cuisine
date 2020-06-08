import styled from 'styled-components';
import theme, { lighten } from 'src/styles/theme';

const RecipeStyled = styled.div`

@keyframes heartBeat {
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
}

.heartBeat {
  animation-name: heartBeat;
  animation-duration: 1.3s;
  animation-timing-function: ease-in-out;
}

  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100%;

  .recipe-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .image-title-wrapper{
    position: relative;
  }

  .recipe-image {
    width: 100%;
    height: 20em;
    margin-top: 0;
  }
  .recipe-title {
    position: absolute;
    bottom: .7em;
    transform-x: 13em;
    width: 100%;
    font-family: ${theme.titleFont};
    text-align: center;
    background-color: rgba(255, 255, 255, 0.8);
    color: ${theme.secondaryColor};
    /*text-shadow: 1px 1px ${theme.strongColor};*/
    padding: .5em;
  }
  .card-section-wrapper-header {
    display: flex;
    margin-top: 0;
    width: 100%;
  }
  .card-section-wrapper-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 4em;
    align-items: center;
    .mobile-button {
      width: 50%;
      margin-bottom: 1em;
    }
  }
  .card-section-infos {
    width: 100%;
    display: flex;
    flex-wrap: no-wrap;
    justify-content: space-between;
    margin: 1em 0;
    .card-section-info {
      max-width: 45%;
      margin: 0 1em;
      display: flex;
      align-items: center;
      p {
        font-family: ${theme.contentFont};
        font-size: 1.2em;
      }
      .favorite-button {
        display: none;
      }
    }
    .card-section-variable-infos {
      display: flex;
      flex-wrap: no-wrap;
    }
  }
  &.user--isConnected {
      .card-section-infos {
        .card-section-info {
          .favorite-button {
            display: inline;
            .clickedHeart {
              animation-name: heartBeat;
              animation-duration: 1.3s;
              animation-iteration-count: 1;
              animation-timing-function: ease-in-out;
            }
          }
          .favorite-button:hover {
            cursor: pointer;
          }
        }
      }
  }
  &.pageofOrigin--favoriteRecipes {
    .card-section-infos {
      .card-section-info {
        .favorite-button {
          display: none;
        }
        .trash-button {
          display: inline;
        }
        .trash-button:hover {
          cursor: pointer;
        }
      }
    }
  }
  .source {
    width: 80%;
    padding: .5em;
    text-align: center;
    color: ${theme.grocereazColor};

    p {
      font-family: ${theme.contentFont};
      font-size: 1.1em;
      a {
        color: ${theme.grocereazColor};
      }
    }
  }
  .recipe-info {
      margin-left: .4em;
    }
  .card-description {
    display: none;
  }
  .trash-button {
    display: none;
  }

  @media only screen and (min-width: 650px) {

    .recipe-image {
      margin-top: 1em;
    }
    .recipe-wrapper {
      width: 90%;
    }
    .card-section-wrapper-content {
      margin-top: 2em;
    }
    .card-description {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }
    h4 {
      font-family: ${theme.titleFont};
      font-size: 1.4em;
      text-align: center;
      padding: .5em;
      border-bottom: 2px solid ${lighten(theme.secondaryColor, 10)};
      width: 80%;
    }
    .list-item {
      margin-bottom: .4em;
      font-family: ${theme.contentFont};
      margin-left: 1em;
    }
    .buttons {
      margin: 2em auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      .button {
        width: 15em;
        margin-bottom: .5em;
      }
    }
    .mobile-button {
      display: none;
    }
    .card-section-wrapper {
      margin-top: 1em;
    }
    }
`;

export default RecipeStyled;
