import "./App.css";
import Header from "./Header";
import Accordion from "./Accordion";
import Button01 from "./Button01";
import Button02 from "./Button02";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DropMenu from "./DropMenu";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="routes">
          <Routes className="p-3">
            <Route path="/Accordion" element={<Accordion />} />
            <Route path="/Button01" element={<Button01 />} />
            <Route path="/Button02" element={<Button02 />} />
            <Route path="/DropMenu" element={<DropMenu />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
