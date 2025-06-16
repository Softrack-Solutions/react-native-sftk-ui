import type { DefaultTheme } from 'styled-components/native';
import { EFonts } from '../fonts';
import { EFontSizes } from '../fontSizes';

export const darkTheme: DefaultTheme = {
  colors: {
    'background': '#040507',
    'text': '#AFABB6',
    'title': '#FBF9FE',
    'error': '#dc2626',
    'primary': 'rgb(0, 255, 159)',
    'primary-foreground': '#000000',
    'secondary': '#465DFF',
    'secondary-foreground': '#ffffff',
    'card': '#17171A',
    'card-foreground': '#AFABB6',
    'header': '#17171A',
    'header-foreground': '#FBF9FE',
    'border': '#252529',
    'border-error': '#E68181',
    'input': '#111112',
    'input-border': '#252529',
    'input-text': '#FBF9FE',
    'input-error': '#E68181',
    'placeholder': '#7A767F',
    'buttom': '#17171A',
    'buttom-text': '#AFABB6',
    'buttom-error': '#dc2626',
    'buttom-error-text': '#ffffff',
  },
  fonts: {
    regular: EFonts.Regular,
    bold: EFonts.Bold,
    italic: EFonts.Italic,
  },
  fontSizes: EFontSizes,
};
