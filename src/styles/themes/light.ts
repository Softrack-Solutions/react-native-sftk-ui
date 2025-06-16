import type { DefaultTheme } from 'styled-components/native';
import { EFonts } from '../fonts';
import { EFontSizes } from '../fontSizes';

export const lightTheme: DefaultTheme = {
  colors: {
    'background': '#E9E7E9',
    'text': '#756C71',
    'title': '#4A4448',
    'error': '#D44A4C',
    'primary': '#465DFF',
    'primary-foreground': '#FFFFFF',
    'secondary': 'rgb(0, 255, 159)',
    'secondary-foreground': '#000000',
    'card': '#F4F1F2',
    'card-foreground': '#756C71',
    'header': '#F4F1F2',
    'header-foreground': '#4A4448',
    'border': '#DFDCDF',
    'border-error': '#D6585A',
    'input': '#DFDCDF',
    'input-border': '#CECACD',
    'input-text': '#332B31',
    'input-error': '#D6585A',
    'placeholder': '#756C71',
    'buttom': '#F4F1F2',
    'buttom-text': '#756C71',
    'buttom-error': '#D44A4C',
    'buttom-error-text': '#000000',
  },
  fonts: {
    regular: EFonts.Regular,
    bold: EFonts.Bold,
    italic: EFonts.Italic,
  },
  fontSizes: EFontSizes,
};
