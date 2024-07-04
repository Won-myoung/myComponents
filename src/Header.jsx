import { NavLink } from "react-router-dom";
import "./css/Header.css";

export default function Header() {
  return (
    <div className="Header">
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
            Button01
          </NavLink>
        </li>
        <li>
          <NavLink to="/Button02" className={({ isActive }) => (isActive ? "active" : "")}>
            Button02
          </NavLink>
        </li>
        <li>
          <NavLink to="/DropMenu" className={({ isActive }) => (isActive ? "active" : "")}>
            DropMenu
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
