import "./App.css";
import { ThemeProvider } from "@material-ui/styles";
import { Provider } from "react-redux";
import Navbar from "./components/Navbar/Navbar";
import theme from "./theme/default";
import store from "./store/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Navbar />
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
