import "./App.css";

import Mint from "./Routes/Mint/Mint.component";
import WalletChecker from "./Routes/WalletChecker/WalletChecker.component";

import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>


      <Routes>
        <Route exact path="/" element={<Mint />} />
        <Route exact path="/walletchecker" element={<WalletChecker />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
