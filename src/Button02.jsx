import { useState } from "react";
import styles from "./css/Button02.module.css";
// import { Link } from "react-router-dom";

export default function Button02() {
  const [currentTab, setCurrentTab] = useState("guideTap01"); // 초기 상태
  const handleButtonClick = (tab) => {
    setCurrentTab(tab);
  };
  return (
    <div className={styles.Button02}>
      <div className={styles.buttons}>
        <button onClick={() => handleButtonClick("guideTap01")} className={currentTab === "guideTap01" ? styles.active : ""}>
          버튼01
        </button>
        <button onClick={() => handleButtonClick("guideTap02")} className={currentTab === "guideTap02" ? styles.active : ""}>
          버튼02
        </button>
        <button onClick={() => handleButtonClick("guideTap03")} className={currentTab === "guideTap03" ? styles.active : ""}>
          버튼03
        </button>
        <button onClick={() => handleButtonClick("guideTap04")} className={currentTab === "guideTap04" ? styles.active : ""}>
          버튼04
        </button>
      </div>
      <div className={styles.contents}>
        {currentTab === "guideTap01" && (
          <div className={styles.guideCardItem}>
            <h2>버튼01 본문</h2>
            <img src="/guide/04digital/guide04Digital01.png" alt="" />
          </div>
        )}
        {currentTab === "guideTap02" && (
          <div className={styles.guideCardItem}>
            <h2>버튼02 본문</h2>
            <img src="/guide/04digital/guide04Digital16.png" alt="" />
          </div>
        )}
        {currentTab === "guideTap03" && (
          <div className={styles.guideCardItem}>
            <h2>버튼03 본문</h2>
            <img src="/guide/04digital/guide04Digital03.png" alt="" />
          </div>
        )}
        {currentTab === "guideTap04" && (
          <div className={styles.guideCardItem}>
            <h2>버튼04 본문</h2>
            <img src="/guide/04digital/guide04Digital12.png" alt="" />
          </div>
        )}
      </div>
    </div>
  );
}
