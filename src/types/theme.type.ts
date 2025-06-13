export interface Theme {
  colors: {
    background: string;
    'background-foreground': string;
    primary: string;
    'primary-foreground': string;
    secondary: string
    'secondary-foreground': string
    card: string
    'card-foreground': string
    header: string
    'header-foreground': string
    border: string
    placeholder: string
    backgroundSmooth: string
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
