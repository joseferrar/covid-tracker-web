import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider } from "@material-ui/styles";
import Navbar from "./components/Navbar/Navbar";
import theme from "./theme/default";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar />
      </ThemeProvider>
    </div>
  );
}

export default App;
