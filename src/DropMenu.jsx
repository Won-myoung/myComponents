import { Link } from "react-router-dom";
import "./css/DropMenu.css";

export default function DropMenu() {
  /*   const [isMenuOpen, setIsMenuOpen] = useState();
  const handleButtonClick = (tab) => {
    setIsMenuOpen(tab);
  }; */
  return (
    <>
      <div className="DropMenu">
        <ul>
          <li>
            <Link to="/" /* onClick={() => handleButtonClick("menuTab01")} className={isMenuOpen === "menuTab01" ? "active" : ""} */>Button01</Link>

            <ul className="subMenu">
              <li>
                <Link to="#">submenusubmenu01</Link>
              </li>
              <li>
                <Link to="#">submenu02</Link>
              </li>
              <li>
                <Link to="#">submenu03</Link>
              </li>
              <li>
                <Link to="#">submenu04</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/" /* onClick={() => handleButtonClick("menuTab02")} className={isMenuOpen === "menuTab02" ? "active" : ""} */>Button02</Link>
            <ul className="subMenu">
              <li>
                <Link to="#">submenu01</Link>
              </li>
              <li>
                <Link to="#">submenu02</Link>
              </li>
              <li>
                <Link to="#">submenu03</Link>
              </li>
              <li>
                <Link to="#">submenu04</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/" /* onClick={() => handleButtonClick("menuTab03")} className={isMenuOpen === "menuTab03" ? "active" : ""} */> Button03</Link>
            <ul className="subMenu">
              <li>
                <Link to="#">submenu01</Link>
              </li>
              <li>
                <Link to="#">submenu02</Link>
              </li>
              <li>
                <Link to="#">submenu03</Link>
              </li>
              <li>
                <Link to="#">submenu04</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/" /* onClick={() => handleButtonClick("menuTab04")} className={isMenuOpen === "menuTab04" ? "active" : ""} */> Button04</Link>
            <ul className="subMenu">
              <li>
                <Link to="#">submenu01</Link>
              </li>
              <li>
                <Link to="#">submenu02</Link>
              </li>
              <li>
                <Link to="#">submenu03</Link>
              </li>
              <li>
                <Link to="#">submenu04</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/" /* onClick={() => handleButtonClick("menuTab05")} className={isMenuOpen === "menuTab05" ? "active" : ""} */> Button05</Link>
            <ul className="subMenu">
              <li>
                <Link to="#">submenu01</Link>
              </li>
              <li>
                <Link to="#">submenu02</Link>
              </li>
              <li>
                <Link to="#">submenu03</Link>
              </li>
              <li>
                <Link to="#">submenu04</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/" /* onClick={() => handleButtonClick("menuTab06")} className={isMenuOpen === "menuTab06" ? "active" : ""} */> Button06</Link>
            <ul className="subMenu">
              <li>
                <Link to="#">submenu01</Link>
              </li>
              <li>
                <Link to="#">submenu02</Link>
              </li>
              <li>
                <Link to="#">submenu03</Link>
              </li>
              <li>
                <Link to="#">submenu04</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/" /* onClick={() => handleButtonClick("menuTab07")} className={isMenuOpen === "menuTab07" ? "active" : ""} */> Button07</Link>
            <ul className="subMenu">
              <li>
                <Link to="#">submenu01</Link>
              </li>
              <li>
                <Link to="#">submenu02</Link>
              </li>
              <li>
                <Link to="#">submenu03</Link>
              </li>
              <li>
                <Link to="#">submenu04</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}
