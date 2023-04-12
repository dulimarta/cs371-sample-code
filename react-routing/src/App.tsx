import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Forecast from "./Forecast";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Vite + React + Routing</h1>
      <p>
        Choose your next page
        <Link to="/forecast">Forecast</Link>
      </p>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/forecast" element={<Forecast />} />
      </Routes>
    </div>
  );
}

export default App;
