import "./App.css";
import Header from "./Header";
import Button01 from "./Button01";
import Button02 from "./Button02";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="routes">
          <Routes>
            <Route path="/" element={<Button01 />} />
            <Route path="/Button02" element={<Button02 />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
