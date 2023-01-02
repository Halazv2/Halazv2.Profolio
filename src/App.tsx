import Home from "./pages";
import Navbar from "./layouts/Navbar";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
