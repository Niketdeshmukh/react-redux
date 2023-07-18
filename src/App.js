import "./App.css";
import Create from "./components/Create";
import Navbar from "./components/Navbar";
import Reader from "./components/Reader";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Update from "./components/Update";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Create />} />
          <Route path="/read" element={<Reader />} />
          <Route path="/edit/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
