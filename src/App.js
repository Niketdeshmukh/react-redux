import './App.css';
import Create from './components/Create';
import Navbar from './components/Navbar';
import {BrowserRouter,Route,Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" element = {<Create/>}></Route>
      </Routes>
      </BrowserRouter>
      
      <h1>Hello</h1>
    </div>
  );
}

export default App;
