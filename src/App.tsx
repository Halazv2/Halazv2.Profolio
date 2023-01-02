import Home from "./pages";
import Navbar from "./layouts/Navbar";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        <Home />
      </div>
    </BrowserRouter>
  );
}

export default App;
