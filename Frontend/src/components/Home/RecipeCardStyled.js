import styled from 'styled-components';
import theme, { lighten } from 'src/styles/theme';

const RecipeCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  .card-section-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .title {
    position: absolute;
    bottom: 4.3em;
  }
  .recipe-title {
    font-family: ${theme.titleFont};
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    height: 2em;
    background-color: rgba(255, 255, 255, 0.8);
    color: ${theme.secondaryColor};
    padding: .5em;
    width: 100%;
  }
  .recipe-image {
    width: 100%;
    height: 17em;
  }
  .recipe-servings {
    font-family: ${theme.contentFont};
    color: ${theme.alternativeColor};
    font-weight: bold;
    margin-top: .6em;
  }
  .card-description {
    display: block;
    font-family: ${theme.contentFont};
    padding: .2em;
  }

`;

export default RecipeCardStyled;
