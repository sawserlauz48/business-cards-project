import Router from "./routes/Router";
import "./App.css";
import Navbar from "./components/Navbar/NavBar";
/* toast */
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  CircularProgress,
  CssBaseline,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import useLoggedIn from "./hooks/useLoggedIn";

const light = {
  palette: {
    mode: "light",
  },
};

const dark = {
  palette: {
    mode: "dark",
  },
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const loggedIn = useLoggedIn();
  useEffect(() => {
    (async () => {
      await loggedIn();
      setIsLoading(false);
    })();
  }, []);

  const isDarkTheme = useSelector(
    (bigPie) => bigPie.darkThemeSlice.isDarkTheme
  );
  return (
    <ThemeProvider theme={isDarkTheme ? createTheme(dark) : createTheme(light)}>
      <CssBaseline />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="App">
        <header>
          <Navbar />
        </header>
        <main>{isLoading ? <CircularProgress /> : <Router />}</main>
      </div>
    </ThemeProvider>
  );
}

export default App;
