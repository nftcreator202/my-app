import "./App.css";

import Home from "./Routes/Home/Home.component";
import Project from "./Routes/Project/Project.component";
import Artist from "./Routes/Artist/Artist.component";

import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/project" element={<Project />} />
        <Route exact path="/artist" element={<Artist />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
