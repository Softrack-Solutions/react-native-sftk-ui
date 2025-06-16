import type { DefaultTheme } from 'styled-components/native';

export type ButtomVariantType = 'primary' | 'secondary' | 'danger' | 'outline';

export const getButtonVariantStyles = (
  theme: DefaultTheme,
  type: ButtomVariantType
) => {
  const map = {
    outline: {
      backgroundColor: theme.colors.buttom,
      textColor: theme.colors['buttom-text'],
      borderColor: theme.colors.border,
      borderWidth: '2px',
    },
    danger: {
      backgroundColor: theme.colors['buttom-error'],
      textColor: theme.colors['buttom-error-text'],
      borderColor: theme.colors['border-error'],
      borderWidth: '2px',
    },
    secondary: {
      backgroundColor: theme.colors.secondary,
      textColor: theme.colors['secondary-foreground'],
      borderColor: theme.colors.secondary,
      borderWidth: '0px',
    },
    primary: {
      backgroundColor: theme.colors.primary,
      textColor: theme.colors['primary-foreground'],
      borderColor: theme.colors.primary,
      borderWidth: '0px',
    },
  };

  return map[type] ?? map.primary;
};
