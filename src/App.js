
// import Router from "./routes/Router";

import './App.css';
import Navbar from './components/NavBar';
import HomePage from './pages/HomePage';
/* toast */
// import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
