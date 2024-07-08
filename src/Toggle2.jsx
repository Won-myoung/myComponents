import { useState } from "react";
import styles from "./css/Toggle2.module.css";
import { Link } from "react-router-dom";

/* 하나의 서브메뉴 열릴시 다른 서브메뉴 자동닫힘 */
export default function Toggle2() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className={styles.Toggle2}>
      <button onClick={() => handleToggle(0)}>
        <h2>브랜드</h2> <span className={`${styles.arrow} ${openIndex === 0 ? styles.up : styles.down}`}></span>
      </button>
      <div className={`${styles.textBox} ${openIndex === 0 ? styles.open : styles.closed}`}>
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
        <h2>메뉴</h2> <span className={`${styles.arrow} ${openIndex === 1 ? styles.up : styles.down}`}></span>
      </button>
      <div className={`${styles.textBox} ${openIndex === 1 ? styles.open : styles.closed}`}>
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
        <h2>매장</h2> <span className={`${styles.arrow} ${openIndex === 2 ? styles.up : styles.down}`}></span>
      </button>
      <div className={`${styles.textBox} ${openIndex === 2 ? styles.open : styles.closed}`}>
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
        <h2>뉴스</h2> <span className={`${styles.arrow} ${openIndex === 3 ? styles.up : styles.down}`}></span>
      </button>
      <div className={`${styles.textBox} ${openIndex === 3 ? styles.open : styles.closed}`}>
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
        <h2>창업</h2> <span className={`${styles.arrow} ${openIndex === 4 ? styles.up : styles.down}`}></span>
      </button>
      <div className={`${styles.textBox} ${openIndex === 4 ? styles.open : styles.closed}`}>
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
