import { Link } from "react-router-dom";
import styles from "./css/DropMenuFull.module.css";
import { useState } from "react";
import Accordi from "./Accordi";

export default function DropMenuFull() {
  const [isOpen, setIsOpen] = useState(false);
  const [isBgVisible, setIsBgVisible] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsBgVisible(!isBgVisible);
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsBgVisible(false);
  };

  const [activeMenu, setActiveMenu] = useState(null);
  const [hoveredSubMenu, setHoveredSubMenu] = useState(null);

  const handleMouseEnter = (menu) => {
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
    setHoveredSubMenu(null);
  };

  const handleSubMenuHover = (mainMenuIndex) => {
    setHoveredSubMenu(mainMenuIndex);
  };
  const mainMenuItems = [
    { id: 1, name: "메인메뉴1" },
    { id: 2, name: "메인메뉴2" },
    { id: 3, name: "메인메뉴3" },
    { id: 4, name: "메인메뉴4" },
    { id: 5, name: "메인메뉴5" },
    { id: 6, name: "메인메뉴6" },
  ];
  return (
    <>
      <div className={styles.DropMenuFull}>
        <h3>Logo</h3>
        <ul className={styles.MainMenu} onMouseEnter={() => handleMouseEnter("mainAll")} onMouseLeave={handleMouseLeave}>
          {mainMenuItems.map((menuItem) => (
            <li key={menuItem.id} className={hoveredSubMenu === menuItem.id ? styles.activeMain : ""}>
              <Link to={`/main${menuItem.id}`}>{menuItem.name}</Link>
            </li>
          ))}
        </ul>
        <div className={`${styles.subMenu} ${activeMenu === "mainAll" ? styles.active : ""}`}>
          <ul>
            <li onMouseEnter={() => handleSubMenuHover(1)} onMouseLeave={() => handleSubMenuHover(null)}>
              <Link to="#">sub1-1</Link>
            </li>
            <li onMouseEnter={() => handleSubMenuHover(1)} onMouseLeave={() => handleSubMenuHover(null)}>
              <Link to="#">sub1-2</Link>
            </li>
            <li onMouseEnter={() => handleSubMenuHover(1)} onMouseLeave={() => handleSubMenuHover(null)}>
              <Link to="#">sub1-3</Link>
            </li>
            <li onMouseEnter={() => handleSubMenuHover(1)} onMouseLeave={() => handleSubMenuHover(null)}>
              <Link to="#">sub1-4</Link>
            </li>
          </ul>
          <ul>
            <li onMouseEnter={() => handleSubMenuHover(2)} onMouseLeave={() => handleSubMenuHover(null)}>
              <Link to="#">sub2-1</Link>
            </li>
            <li onMouseEnter={() => handleSubMenuHover(2)} onMouseLeave={() => handleSubMenuHover(null)}>
              <Link to="#">sub2-2</Link>
            </li>
            <li onMouseEnter={() => handleSubMenuHover(2)} onMouseLeave={() => handleSubMenuHover(null)}>
              <Link to="#">sub2-3</Link>
            </li>
            <li onMouseEnter={() => handleSubMenuHover(2)} onMouseLeave={() => handleSubMenuHover(null)}>
              <Link to="#">sub2-4</Link>
            </li>{" "}
          </ul>
          <ul>
            <li onMouseEnter={() => handleSubMenuHover(3)} onMouseLeave={() => handleSubMenuHover(null)}>
              <Link to="#">sub3-1</Link>
            </li>
            <li onMouseEnter={() => handleSubMenuHover(3)} onMouseLeave={() => handleSubMenuHover(null)}>
              <Link to="#">sub3-2</Link>
            </li>
            <li onMouseEnter={() => handleSubMenuHover(3)} onMouseLeave={() => handleSubMenuHover(null)}>
              <Link to="#">sub3-3</Link>
            </li>
            <li onMouseEnter={() => handleSubMenuHover(3)} onMouseLeave={() => handleSubMenuHover(null)}>
              <Link to="#">sub3-4</Link>
            </li>{" "}
          </ul>
          <ul>
            <li onMouseEnter={() => handleSubMenuHover(4)} onMouseLeave={() => handleSubMenuHover(null)}>
              <Link to="#">sub4-1</Link>
            </li>
            <li onMouseEnter={() => handleSubMenuHover(4)} onMouseLeave={() => handleSubMenuHover(null)}>
              <Link to="#">sub4-2</Link>
            </li>
            <li onMouseEnter={() => handleSubMenuHover(4)} onMouseLeave={() => handleSubMenuHover(null)}>
              <Link to="#">sub4-3</Link>
            </li>
            <li onMouseEnter={() => handleSubMenuHover(4)} onMouseLeave={() => handleSubMenuHover(null)}>
              <Link to="#">sub4-4</Link>
            </li>{" "}
          </ul>
          <ul>
            <li onMouseEnter={() => handleSubMenuHover(5)} onMouseLeave={() => handleSubMenuHover(null)}>
              <Link to="#">sub5-1</Link>
            </li>
            <li onMouseEnter={() => handleSubMenuHover(5)} onMouseLeave={() => handleSubMenuHover(null)}>
              <Link to="#">sub5-2</Link>
            </li>
            <li onMouseEnter={() => handleSubMenuHover(5)} onMouseLeave={() => handleSubMenuHover(null)}>
              <Link to="#">sub5-3</Link>
            </li>
            <li onMouseEnter={() => handleSubMenuHover(5)} onMouseLeave={() => handleSubMenuHover(null)}>
              <Link to="#">sub5-4</Link>
            </li>{" "}
          </ul>
          <ul>
            <li onMouseEnter={() => handleSubMenuHover(6)} onMouseLeave={() => handleSubMenuHover(null)}>
              <Link to="#">sub6-1</Link>
            </li>
            <li onMouseEnter={() => handleSubMenuHover(6)} onMouseLeave={() => handleSubMenuHover(null)}>
              <Link to="#">sub6-2</Link>
            </li>
            <li onMouseEnter={() => handleSubMenuHover(6)} onMouseLeave={() => handleSubMenuHover(null)}>
              <Link to="#">sub6-3</Link>
            </li>
            <li onMouseEnter={() => handleSubMenuHover(6)} onMouseLeave={() => handleSubMenuHover(null)}>
              <Link to="#">sub6-4</Link>
            </li>
          </ul>
        </div>
        <div className={styles.SideMenu}>
          <div className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}>
            <Accordi />
          </div>
          <button className={`${styles["toggleButton"]} ${isOpen ? styles.open : styles.closed}`} onClick={toggleMenu}>
            <span className={`${styles.icon} ${isOpen ? styles["closeIcon"] : styles["openIcon"]}`}></span>
          </button>
          <div className={`${styles.blackBg} ${isBgVisible ? styles.visible : ""}`} onClick={handleClose}></div>
        </div>
      </div>
    </>
  );
}
