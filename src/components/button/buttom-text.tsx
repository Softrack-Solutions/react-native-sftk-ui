import styled from 'styled-components/native';
import { getButtonVariantStyles, type ButtomVariantType } from './buttom.type';

export interface ButtonTextProps {
  type: ButtomVariantType;
}

export const ButtonTextStyled = styled.Text<ButtonTextProps>`
  color: ${({ theme, type }) => getButtonVariantStyles(theme, type).textColor};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.fontSizes.base};
  text-align: center;
`;
