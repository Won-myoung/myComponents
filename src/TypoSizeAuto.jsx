import { useEffect, useState } from "react";
import styles from "./css/TypoSizeAuto.module.css";
export default function TypoSizeAuto() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const calculateFontSize1612 = () => {
    const minFontSize = 12;
    const maxFontSize = 16;

    // 1120에서 640 사이의 화면 너비 범위에서만 폰트 크기를 조정합니다.
    const fontSize = minFontSize + ((maxFontSize - minFontSize) * (Math.min(1120, Math.max(windowWidth, 640)) - 640)) / (1120 - 640);

    // 폰트 크기를 반환합니다.
    return `${fontSize}px`;
  };
  const calculateFontSize4826 = () => {
    const minFontSize = 26;
    const maxFontSize = 48;

    // 1120에서 640 사이의 화면 너비 범위에서만 폰트 크기를 조정합니다.
    const fontSize = minFontSize + ((maxFontSize - minFontSize) * (Math.min(1120, Math.max(windowWidth, 640)) - 640)) / (1120 - 640);

    // 폰트 크기를 반환합니다.
    return `${fontSize}px`;
  };
  const calculateFontSize3217 = () => {
    const minFontSize = 17;
    const maxFontSize = 32;

    // 1120에서 640 사이의 화면 너비 범위에서만 폰트 크기를 조정합니다.
    const fontSize = minFontSize + ((maxFontSize - minFontSize) * (Math.min(1120, Math.max(windowWidth, 640)) - 640)) / (1120 - 640);

    // 폰트 크기를 반환합니다.
    return `${fontSize}px`;
  };
  return (
    <>
      <div className={styles.mainBodyUN}>
        <div className={styles.mainBodyUNHead}>
          <h2 style={{ fontSize: calculateFontSize4826() }}>
            <span>UN공식</span>기관
            <br />
            유니세프
          </h2>
          <p>
            유엔아동권리협약에 유일하게 명시된 아동권리 증진기구 유니세프,
            <br />
            후원자님의 소중한 후원금으로 전 세계 어린이 및 한국 어린이를 돕습니다.
          </p>
        </div>
        <div className={styles.mainBodyUNThum}>
          <div>
            <div className={styles.imageWrap}>
              <img src="/main/un01.png " alt="" className={styles.w130120} />
            </div>
            <strong>
              <span>UN 공식 기관</span>으로
              <span>약 80년의 구호 활동 경험과 전문성</span>
            </strong>
          </div>
          <div>
            <div className={`${styles.imageWrap} ${styles.w170}`}>
              <img src="/main/un02.png " alt="" />
            </div>
            <strong>
              <span>유엔아동권리협약에 직접 명시</span>된 유일한 아동권리증진 기관
            </strong>
          </div>
          <div>
            <div className={styles.imageWrap}>
              <img src="/main/un03.png " alt="" className={styles.w120120} />
            </div>
            <strong>
              유니세프 본부 및 외부 회계 법인 감사로
              <span>후원금 사용의 투명성 검증</span>
            </strong>
          </div>
          <div>
            <div className={styles.imageWrap}>
            <img src="/main/un04.png " alt="" className={styles.w120120} />
            </div>
            <strong>
              2023 대한민국 국가사회산업공헌 대상 비영리 기관
              <span> '세계 어린이 구호' 부문 3년 연속 수상</span>
            </strong>
          </div>
          <div>
            <div className={styles.imageWrap}>
            <img src="/main/un05.png " alt="" className={styles.w120120} />
            </div>
            <strong>
              2022년 원조투명성지수 평가 에서
              <span>2회 연속 최상위 등급 (Very Good) 획득</span>
            </strong>
          </div>
        </div>
        <div className={styles.mainBodyUNLink}>
          <div className={styles.unLinkWrap}>
            <div>
              <p style={{ fontSize: calculateFontSize1612() }}>유니세프 팩트체크</p>
              <strong style={{ fontSize: calculateFontSize3217() }}>유니세프, 믿을 수 있나요?</strong>
            </div>
            <img src="/main/unbtnimg01.png" alt="" />
          </div>
          <div className={styles.unLinkWrap}>
            <div>
              <p style={{ fontSize: calculateFontSize1612() }}>후원금 사용 내역</p>
              <strong style={{ fontSize: calculateFontSize3217() }}>후원금은 어떻게 쓰이나요?</strong>
            </div>
            <img src="/main/unbtnimg02.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
