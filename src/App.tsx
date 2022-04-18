import { Header } from "./components/Header/Index";
import GlobalStyles from './styles/global'
import { CustomThemeProvider } from './context'

function App() {
  return (
    <CustomThemeProvider>
      <GlobalStyles />
      <Header />
    </CustomThemeProvider>
  );
}

export default App;
