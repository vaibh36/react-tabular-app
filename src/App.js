import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider, Button, createTheme } from "@mui/material";
import Table from "./components/Table";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ padding: "20px" }}>
        <Table />
      </div>
    </ThemeProvider>
  );
};

export default App;
