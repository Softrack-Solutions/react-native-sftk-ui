import { ThemeProvider as StyledProvider } from 'styled-components/native';
import { darkTheme } from '../styles/themes/dark';
import { lightTheme } from '../styles/themes/light';

const ThemeProvider = ({
  children,
  isDark,
}: {
  children: React.ReactNode;
  isDark: boolean;
}) => {
  return (
    <StyledProvider theme={isDark ? darkTheme : lightTheme}>
      {children}
    </StyledProvider>
  );
};

export default ThemeProvider;
