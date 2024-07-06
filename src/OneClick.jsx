import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./css/OneClick.module.css";

export default function OneClick() {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const handleShowContent = () => {
    setIsContentVisible(true);
  };

  return (
    // <div className="section section2">
    <div className={`${styles.section} ${styles.section2}`}>
      <div className={styles.section2Header}>
        <h3>납부</h3>
        <Link to="#">한번에 가입하기</Link>
      </div>
      <ul className={styles.section2Body}>
        <li>
          <Link to="#">
            <img src="/payment/ico_mrc_grp_2.png" alt="" />
            <h4>아파트 관리비</h4>
          </Link>
        </li>
        <li>
          <Link to="#">
            <img src="/payment/ico_mrc_grp_4.png" alt="" />
            <h4>전화요금</h4>
            <p>휴대전화, 유선전화</p>
          </Link>
        </li>
        <li>
          <Link to="#">
            <img src="/payment/ico_mrc_grp_1.png" alt="" />
            <h4>도시가스요금</h4>
          </Link>
        </li>
        <li>
          <Link to="#">
            <img src="/payment/ico_mrc_grp_5.png" alt="" />
            <h4>4대 사회보험</h4>
            <p>국민연금, 건강보험, 고용보험, 산재보험</p>
          </Link>
        </li>
        <li>
          <Link to="#">
            <img src="/payment/ico_mrc_grp_3.png" alt="" />
            <h4>전기요금</h4>
          </Link>
        </li>
        <li>
          <Link to="#">
            <img src="/payment/ico_mrc_grp_91.png" alt="" />
            <h4>유치원 납입금</h4>
          </Link>
        </li>
        {!isContentVisible && (
          <button onClick={handleShowContent} className={styles.showContentButton}>
            <span>4개</span> 서비스 더 보기
          </button>
        )}
        {isContentVisible && (
          <ul className={styles.hiddenContent}>
            <li>
              <Link to="#">
                <img src="/payment/ico_mrc_grp_7.png" alt="" />
                <h4>초중고 학교납입금</h4>
              </Link>
            </li>
            <li>
              <Link to="#">
                <img src="/payment/ico_mrc_grp_8.png" alt="" />
                <h4>지방세입 모바일 고지서</h4>
                <p>고지서 알림받고 세액 공제까지</p>
              </Link>
            </li>
            <li>
              <Link to="#">
                <img src="/payment/ico_mrc_grp_6.png" alt="" />
                <h4>국세/지방세</h4>
              </Link>
            </li>
            <li>
              <Link to="#">
                <img src="/payment/ico_mrc_grp_10.png" alt="" />
                <h4>대학등록금</h4>
              </Link>
            </li>
          </ul>
        )}
      </ul>
      <Link to="#" className={styles.sectionBottomLink}>
        아파트 관리비 2.5% 할인! 삼성iD ALL 카드
      </Link>
    </div>
  );
}
