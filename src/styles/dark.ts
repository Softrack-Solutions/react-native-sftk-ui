import type { Theme } from "../types/theme.type";
import { EFonts } from "./fonts";
import { EFontSizes } from "./fontSizes";

export const darkTheme: Theme = {
  colors: {
    background: '',
    text: '',
    primary: '',
  },
  fonts: {
    regular: EFonts.Regular,
    bold: EFonts.Bold,
    italic: EFonts.Italic,
  },
  fontSizes: EFontSizes,
};