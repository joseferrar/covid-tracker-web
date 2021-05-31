import { createMuiTheme } from "@material-ui/core/styles";

const arcBlue = "#e91e63";

export default createMuiTheme({
  palette: {
    common: {
      arcBlue: `${arcBlue}`,
      arcOrange: "#FFBA60",
    },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: "#000",
    },
    error: {
      main: "#f44336",
    },
  },
  typography: {
    h4: {
      fontWeight: 300,
    },
  },
});
