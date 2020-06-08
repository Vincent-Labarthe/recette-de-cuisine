import tinycolor from 'tinycolor2';

// Permet de générer une couleur plus claire
// color : couleur à traiter et percent: pourcentage à appliquer
export const lighten = (color, percent) => tinycolor(color).lighten(percent).toString();
// Permet de générer une couleur plus foncée
// color : couleur à traiter et percent: pourcentage à appliquer
export const darken = (color, percent) => tinycolor(color).darken(percent).toString();

const theme = {
  strongColor: '#E38038',
  grocereazColor: '#610444',
  // grocereazColor: '#f2711c',
  thirdColor: '#00a8cc',
  secondaryColor: '#610444',
  // secondaryColorLight: '#BDCE6A',
  alternativeColor: '#4B5C6B',
  // alternativeColorLight: '#F5F1EE',

  grocereazFont: 'Montserrat',
  // grocereazFont: 'Expletus Sans',
  // grocereazFont: 'Lobster',
  // grocereazFont: 'Red Hat Display',
  // grocereazFont: 'Montserrat Alternates',
  // grocereazFont: 'Montserrat',
  titleFont: 'Economica',
  contentFont: 'Roboto',
};

export default theme;
