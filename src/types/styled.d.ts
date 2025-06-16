import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: {
      'background': string;
      'text': string;
      'title': string;
      'error': string;
      'primary': string;
      'primary-foreground': string;
      'secondary': string;
      'secondary-foreground': string;
      'card': string;
      'card-foreground': string;
      'header': string;
      'header-foreground': string;
      'border': string;
      'border-error': string;
      'input': string;
      'input-border': string;
      'input-text': string;
      'input-error': string;
      'placeholder': string;
      'buttom': string;
      'buttom-text': string;
      'buttom-error': string;
      'buttom-error-text': string;
    };
    fonts: {
      regular: string;
      bold: string;
      italic: string;
    };
    fontSizes: {
      'xs': number;
      'sm': number;
      'base': number;
      'md': number;
      'lg': number;
      'xl': number;
      '2xl': number;
    };
  }
}
