import "./App.css";

import Mint from "./Routes/Mint/Mint.component";

import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Mint />} />
        <Route exact path="/mint" element={<Mint />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
