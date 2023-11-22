import { ThemeProvider } from "styled-components";
import { Router } from "./router/Router";
import { GlobalStyle } from "./styles/globalstyle";
import { GlobalFont } from "./styles/globalfont";
import { theme } from "./styles/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalFont />
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
