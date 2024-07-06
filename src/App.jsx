import "./App.css";
import Header from "./Header";
import Accordi from "./Accordi";
import Button01 from "./Button01";
import Button02 from "./Button02";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DropMenu from "./DropMenu";
import DropMenuFull from "./DropMenuFull";
import Modal from "./Modal";
import OneClick from "./OneClick";
import RandomInput from "./RandomInput";
import ScrollWheel from "./ScrollWheel";
import SideMenuBackUp from "./SideMenuBackUp";
import SideMenuDown from "./SideMenuDown";
import SlideShow from "./SlideShow";
import SlideShow2 from "./SlideShow2";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="routes">
          <Routes className="p-3">
            <Route path="/" element={<Accordi />} />
            <Route path="/Button01" element={<Button01 />} />
            <Route path="/Button02" element={<Button02 />} />
            <Route path="/DropMenu" element={<DropMenu />} />
            <Route path="/DropMenuFull" element={<DropMenuFull />} />
            <Route path="/Modal" element={<Modal />} />
            <Route path="/OneClick" element={<OneClick />} />
            <Route path="/RandomInput" element={<RandomInput />} />
            <Route path="/ScrollWheel" element={<ScrollWheel />} />
            <Route path="/SideMenuBackUp" element={<SideMenuBackUp />} />
            <Route path="/SideMenuDown" element={<SideMenuDown />} />
            <Route path="/SlideShow" element={<SlideShow />} />
            <Route path="/SlideShow2" element={<SlideShow2 />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
