import { useState } from "react";
import styles from "./css/Toggle1.module.css";
import { Link } from "react-router-dom";

export default function ToggleText() {
  const [isOpenArray, setIsOpenArray] = useState([false, false, false, false, false]);

  const handleToggle = (index) => {
    setIsOpenArray((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className={styles.ToggleText}>
      <button onClick={() => handleToggle(0)}>
        <h2>브랜드</h2> <span className={`${styles.arrow} ${isOpenArray[0] ? styles.up : styles.down}`}></span>
      </button>
      <div className={`${styles.textBox} ${isOpenArray[0] ? styles.open : styles.closed}`}>
        <ul>
          <li>
            <Link to="#">브랜드 스토리</Link>
          </li>
          <li>
            <Link to="#">연혁</Link>
          </li>
          <li>
            <Link to="#">오시는 길</Link>
          </li>
        </ul>
      </div>

      <button onClick={() => handleToggle(1)}>
        <h2>메뉴</h2> <span className={`${styles.arrow} ${isOpenArray[1] ? styles.up : styles.down}`}></span>
      </button>
      <div className={`${styles.textBox} ${isOpenArray[1] ? styles.open : styles.closed}`}>
        <ul>
          <li>
            <Link to="#">피자</Link>
          </li>
          <li>
            <Link to="#">사이드</Link>
          </li>
          <li>
            <Link to="#">세트 </Link>
          </li>
        </ul>
      </div>

      <button onClick={() => handleToggle(2)}>
        <h2>매장</h2> <span className={`${styles.arrow} ${isOpenArray[2] ? styles.up : styles.down}`}></span>
      </button>
      <div className={`${styles.textBox} ${isOpenArray[2] ? styles.open : styles.closed}`}>
        <ul>
          <li>
            <Link to="#">매장 찾기</Link>
          </li>
          <li>
            <Link to="#">우수 가맹점</Link>
          </li>
        </ul>
      </div>

      <button onClick={() => handleToggle(3)}>
        <h2>뉴스</h2> <span className={`${styles.arrow} ${isOpenArray[3] ? styles.up : styles.down}`}></span>
      </button>
      <div className={`${styles.textBox} ${isOpenArray[3] ? styles.open : styles.closed}`}>
        <ul>
          <li>
            <Link to="#">새소식</Link>
          </li>
          <li>
            <Link to="#">이벤트</Link>
          </li>
        </ul>
      </div>

      <button onClick={() => handleToggle(4)}>
        <h2>창업</h2> <span className={`${styles.arrow} ${isOpenArray[4] ? styles.up : styles.down}`}></span>
      </button>
      <div className={`${styles.textBox} ${isOpenArray[4] ? styles.open : styles.closed}`}>
        <ul>
          <li>
            <Link to="#">창업 경쟁력</Link>
          </li>
          <li>
            <Link to="#">창업 안내</Link>
          </li>
          <li>
            <Link to="#">창업비용 및 절차</Link>
          </li>
          <li>
            <Link to="#">가맹 FAQ</Link>
          </li>
          <li>
            <Link to="#">창업문의</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
