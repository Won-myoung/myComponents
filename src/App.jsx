import "./App.css";
import Header from "./Header";
import Accordi from "./Accordi";
import Button01 from "./Button01";
import Button02 from "./Button02";
import CrossFade from "./CrossFade";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DropMenu from "./DropMenu";
import DropMenuFull from "./DropMenuFull";
import Modal from "./Modal";
import MovingText from "./MovingText";
import OneClick from "./OneClick";
import RandomInput from "./RandomInput";
import ScrollWheel from "./ScrollWheel";
import SideMenuBackUp from "./SideMenuBackUp";
import SideMenuDown from "./SideMenuDown";
import SlideShow from "./SlideShow";
import SlideShow2 from "./SlideShow2";
import Tabs from "./Tabs";
import Toggle from "./Toggle";
import Toggle1 from "./Toggle1";
import Toggle2 from "./Toggle2";
import TypoSizeAuto from "./TypoSizeAuto";

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
            <Route path="/CrossFade" element={<CrossFade />} />
            <Route path="/DropMenu" element={<DropMenu />} />
            <Route path="/DropMenuFull" element={<DropMenuFull />} />
            <Route path="/Modal" element={<Modal />} />
            <Route path="/MovingText" element={<MovingText />} />
            <Route path="/OneClick" element={<OneClick />} />
            <Route path="/RandomInput" element={<RandomInput />} />
            <Route path="/ScrollWheel" element={<ScrollWheel />} />
            <Route path="/SideMenuBackUp" element={<SideMenuBackUp />} />
            <Route path="/SideMenuDown" element={<SideMenuDown />} />
            <Route path="/SlideShow" element={<SlideShow />} />
            <Route path="/SlideShow2" element={<SlideShow2 />} />
            <Route path="/Tabs" element={<Tabs />} />
            <Route path="/Toggle" element={<Toggle />} />
            <Route path="/Toggle1" element={<Toggle1 />} />
            <Route path="/Toggle2" element={<Toggle2 />} />
            <Route path="/TypoSizeAuto" element={<TypoSizeAuto />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
