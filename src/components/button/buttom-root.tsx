import styled from 'styled-components/native';
import { getButtonVariantStyles, type ButtomVariantType } from './buttom.type';

export interface ButtonRootProps {
  disabled?: boolean;
  onPress?: () => void;
  type: ButtomVariantType;
}

export const ButtonRootStyled = styled.TouchableOpacity.attrs<ButtonRootProps>(
  (props) => ({
    activeOpacity: props.disabled ? 1 : (props.activeOpacity ?? 0.7),
    disabled: props.disabled,
  })
)<ButtonRootProps>`
  background-color: ${({ theme, type }) =>
    getButtonVariantStyles(theme, type).backgroundColor};
  padding: 12px 16px;
  border-radius: 8px;
  border-width: ${({ type, theme }) =>
    getButtonVariantStyles(theme, type).borderWidth};
  border-color: ${({ theme, type }) =>
    getButtonVariantStyles(theme, type).borderColor};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
