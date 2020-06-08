import styled from 'styled-components';
import theme from 'src/styles/theme';

const FormStyled = styled.div`
  display: flex;
  flex-direction: row;
  height: 90vh;
  .content-part {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
      font-family: ${theme.titleFont};
      font-size: 2.2em;
    }

    &-title{
      width: 60%;
      display: flex;
      align-items: baseline;
      justify-content: space-between;

      .link-plus{
        color: ${theme.alternativeColor};

        &:hover{
          color: ${theme.grocereazColor};
        }
      }
    }

    .instruction{
      font-family: ${theme.contentFont};
      font-weight: bold;
      color: ${theme.grocereazColor}
    }

    .list{
      width: 60%;
      display: flex;
      flex-direction: column;

      .grocery-item{
        display: flex;
        justify-content: space-between;
        padding: .3em;
      }
      .ingredient-item{
        display: flex;
        justify-content: space-between;
        padding: .3em;
      }
      .link{
        color: ${theme.alternativeColor};
      }
      .link:hover{
        color: ${theme.grocereazColor};
      }
    }

    .addGroceryList{

      &-input{
        margin-top: 1em;
      }

      &-save{
        display:none;
      }
    }
  }

  .picture-part {
    display: none;
  }

  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 1em;
    width: 15em;

    &-input{
      width: 100%;
    }
    .datasInput{
      margin-bottom: 1em;
    }
    .validData--transparent{
      display: none;
    }
    .link {
      display: inline;
      color: #e99d65 ;
      font-size: .9em;
      &:hover{
        color: ${theme.alternativeColor};
      }
    }
  }

  .image {
    display: none;
  }

  @media only screen and (min-width: 760px) {
    .content-part {
      width: 50%;
      }
    .picture-part {
      width: 50%;
      display: block;
      display: flex;
      align-items: center;
      justify-content: center;
      }
    .image {
      display: inline;
      .image-size {
        max-width: 95%;
        height: auto;
        margin-right: 1em;
      }
    }
  }

`;

export default FormStyled;
