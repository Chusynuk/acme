import { ThemeProvider } from "styled-components";
import { defaultTheme, GlobalStyle } from "./theme";

export interface UiProps {
  children?: React.ReactNode;
}

const UIProvider = ({ children }: UiProps) => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

export default UIProvider;
