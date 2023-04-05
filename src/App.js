
import Router from "./routes/Router";
import './App.css';
import Navbar from './components/NavBar';
/* toast */
// import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Router />
      </main>
    </div>
  );
}

export default App;
