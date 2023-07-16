import "./App.css";
import Create from "./components/Create";
import Navbar from "./components/Navbar";
import Reader from "./components/Reader";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Create />} />
          <Route  path="/read" element={<Reader />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;