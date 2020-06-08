import styled from 'styled-components';
import theme, { lighten } from 'src/styles/theme';

const FooterStyled = styled.div`
  margin-bottom: 4.4em;
  border-top: 1px solid ${lighten(theme.alternativeColor, 50)};
  border-bottom: 1px solid ${lighten(theme.alternativeColor, 50)};
  background-color: ${lighten(theme.alternativeColor, 60)};
  padding: .5em 0;

  .footer-icons {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .footer-links {
    display: none;
    .footer-link {
      color: ${theme.secondaryColor};
      font-family: ${theme.titleFont};
      font-size: 1.3em;
      font-weight: bold;
      :hover {
        color: ${theme.strongColor};
      }
    }
  }

  @media only screen and (min-width: 650px) {
    margin: 0em;
    .footer-icons {
      display: none;
    }
    .footer-links {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }
  }
`;

export default FooterStyled;
