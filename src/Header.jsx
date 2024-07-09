import { NavLink } from "react-router-dom";
import styles from "./css/Header.module.css";

export default function Header() {
  return (
    <div className={styles.Header}>
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : "")}>
            Accordion
          </NavLink>
        </li>
        <li>
          <NavLink to="/Button01" className={({ isActive }) => (isActive ? styles.active : "")}>
            Button01
          </NavLink>
        </li>
        <li>
          <NavLink to="/Button02" className={({ isActive }) => (isActive ? styles.active : "")}>
            Button02
          </NavLink>
        </li>
        <li>
          <NavLink to="/CrossFade" className={({ isActive }) => (isActive ? styles.active : "")}>
            CrossFade
          </NavLink>
        </li>
        <li>
          <NavLink to="/DropMenu" className={({ isActive }) => (isActive ? styles.active : "")}>
            DropMenu
          </NavLink>
        </li>
        <li>
          <NavLink to="/DropMenuFull" className={({ isActive }) => (isActive ? styles.active : "")}>
            DropDownFull
          </NavLink>
        </li>
        <li>
          <NavLink to="/Modal" className={({ isActive }) => (isActive ? styles.active : "")}>
            Modal
          </NavLink>
        </li>
        <li>
          <NavLink to="/MovingText" className={({ isActive }) => (isActive ? styles.active : "")}>
            MovingText
          </NavLink>
        </li>
        <li>
          <NavLink to="/OneClick" className={({ isActive }) => (isActive ? styles.active : "")}>
            OneClick
          </NavLink>
        </li>
        <li>
          <NavLink to="/RandomInput" className={({ isActive }) => (isActive ? styles.active : "")}>
            RandomInput
          </NavLink>
        </li>
        <li>
          <NavLink to="/ScrollWheel" className={({ isActive }) => (isActive ? styles.active : "")}>
            ScrollWheel
          </NavLink>
        </li>
        <li>
          <NavLink to="/SideMenuBackUp" className={({ isActive }) => (isActive ? styles.active : "")}>
            SideMenuBackUp
          </NavLink>
        </li>
        <li>
          <NavLink to="/SideMenuDown" className={({ isActive }) => (isActive ? styles.active : "")}>
            SideMenuDown
          </NavLink>
        </li>
        <li>
          <NavLink to="/SlideShow" className={({ isActive }) => (isActive ? styles.active : "")}>
            SlideShow
          </NavLink>
        </li>
        <li>
          <NavLink to="/SlideShow2" className={({ isActive }) => (isActive ? styles.active : "")}>
            SlideShow2
          </NavLink>
        </li>
        <li>
          <NavLink to="/Tabs" className={({ isActive }) => (isActive ? styles.active : "")}>
            Tabs
          </NavLink>
        </li>
        <li>
          <NavLink to="/Toggle" className={({ isActive }) => (isActive ? styles.active : "")}>
            Toggle
          </NavLink>
        </li>
        <li>
          <NavLink to="/Toggle1" className={({ isActive }) => (isActive ? styles.active : "")}>
            Toggle1
          </NavLink>
        </li>
        <li>
          <NavLink to="/Toggle2" className={({ isActive }) => (isActive ? styles.active : "")}>
            Toggle2
          </NavLink>
        </li>
        <li>
          <NavLink to="/TypoSizeAuto" className={({ isActive }) => (isActive ? styles.active : "")}>
            TypoSizeAuto
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
