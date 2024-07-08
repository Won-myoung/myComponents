import { NavLink } from "react-router-dom";
import "./css/Header.css";

export default function Header() {
  return (
    <div className="Header">
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
            Accordion
          </NavLink>
        </li>
        <li>
          <NavLink to="/Button01" className={({ isActive }) => (isActive ? "active" : "")}>
            Button01
          </NavLink>
        </li>
        <li>
          <NavLink to="/Button02" className={({ isActive }) => (isActive ? "active" : "")}>
            Button02
          </NavLink>
        </li>
        <li>
          <NavLink to="/CrossFade" className={({ isActive }) => (isActive ? "active" : "")}>
            CrossFade
          </NavLink>
        </li>
        <li>
          <NavLink to="/DropMenu" className={({ isActive }) => (isActive ? "active" : "")}>
            DropMenu
          </NavLink>
        </li>
        <li>
          <NavLink to="/DropMenuFull" className={({ isActive }) => (isActive ? "active" : "")}>
            DropDownFull
          </NavLink>
        </li>
        <li>
          <NavLink to="/Modal" className={({ isActive }) => (isActive ? "active" : "")}>
            Modal
          </NavLink>
        </li>
        <li>
          <NavLink to="/MovingText" className={({ isActive }) => (isActive ? "active" : "")}>
            MovingText
          </NavLink>
        </li>
        <li>
          <NavLink to="/OneClick" className={({ isActive }) => (isActive ? "active" : "")}>
            OneClick
          </NavLink>
        </li>
        <li>
          <NavLink to="/RandomInput" className={({ isActive }) => (isActive ? "active" : "")}>
            RandomInput
          </NavLink>
        </li>
        <li>
          <NavLink to="/ScrollWheel" className={({ isActive }) => (isActive ? "active" : "")}>
            ScrollWheel
          </NavLink>
        </li>
        <li>
          <NavLink to="/SideMenuBackUp" className={({ isActive }) => (isActive ? "active" : "")}>
            SideMenuBackUp
          </NavLink>
        </li>
        <li>
          <NavLink to="/SideMenuDown" className={({ isActive }) => (isActive ? "active" : "")}>
            SideMenuDown
          </NavLink>
        </li>
        <li>
          <NavLink to="/SlideShow" className={({ isActive }) => (isActive ? "active" : "")}>
            SlideShow
          </NavLink>
        </li>
        <li>
          <NavLink to="/SlideShow2" className={({ isActive }) => (isActive ? "active" : "")}>
            SlideShow2
          </NavLink>
        </li>
        <li>
          <NavLink to="/Toggle" className={({ isActive }) => (isActive ? "active" : "")}>
            Toggle
          </NavLink>
        </li>
        <li>
          <NavLink to="/Toggle1" className={({ isActive }) => (isActive ? "active" : "")}>
            Toggle1
          </NavLink>
        </li>
        <li>
          <NavLink to="/Toggle2" className={({ isActive }) => (isActive ? "active" : "")}>
            Toggle2
          </NavLink>
        </li>
        <li>
          <NavLink to="/TypoSizeAuto" className={({ isActive }) => (isActive ? "active" : "")}>
            TypoSizeAuto
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
