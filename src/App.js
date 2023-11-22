import { ThemeProvider } from "styled-components";
import { Router } from "./router/Router";
import { GlobalStyle } from "./styles/globalstyle";
import { theme } from "./styles/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
