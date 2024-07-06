import React, { useEffect, useState } from "react";
import "./css/SlideShow2.css";

export default function Slideshow2() {
  useEffect(() => {
    const articles = document.querySelectorAll(".article");

    const articleObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.3 }
    );

    articles.forEach((article) => {
      articleObserver.observe(article);
    });

    const delays = document.querySelectorAll(".delay");

    delays.forEach((delay) => {
      const delayTime = delay.getAttribute("data-delay");
      delay.style.animationDelay = `${delayTime}s`;
    });

    // 컴포넌트 언마운트 시 옵저버 해제
    return () => {
      articles.forEach((article) => {
        articleObserver.unobserve(article);
      });
    };
  }, []);

  /* 폰트크기 */
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
  // 폰트크기 width에 맞게 변환 min28/max48
  const calculateFontSize = () => {
    const minFontSize = 28; // 최소 폰트 크기
    const maxFontSize = 48; // 최대 폰트 크기

    // 1120에서 640 사이의 화면 너비 범위에서만 폰트 크기를 조정합니다.
    const fontSize = minFontSize + ((maxFontSize - minFontSize) * (Math.min(1120, Math.max(windowWidth, 640)) - 640)) / (1120 - 640);

    // 폰트 크기를 반환합니다.
    return `${fontSize}px`;
  };
  // 폰트크기 width에 맞게 변환 min28/max48
  const calculateFontSize4024 = () => {
    const minFontSize = 24; // 최소 폰트 크기
    const maxFontSize = 40; // 최대 폰트 크기

    // 1120에서 640 사이의 화면 너비 범위에서만 폰트 크기를 조정합니다.
    const fontSize = minFontSize + ((maxFontSize - minFontSize) * (Math.min(1120, Math.max(windowWidth, 640)) - 640)) / (1120 - 640);

    // 폰트 크기를 반환합니다.
    return `${fontSize}px`;
  };
  // 폰트크기 width에 맞게 변환 min28/max48
  const calculateFontSize3220 = () => {
    const minFontSize = 20; // 최소 폰트 크기
    const maxFontSize = 32; // 최대 폰트 크기

    // 1120에서 640 사이의 화면 너비 범위에서만 폰트 크기를 조정합니다.
    const fontSize = minFontSize + ((maxFontSize - minFontSize) * (Math.min(1120, Math.max(windowWidth, 640)) - 640)) / (1120 - 640);

    // 폰트 크기를 반환합니다.
    return `${fontSize}px`;
  };

  const calculateFontSize1614 = () => {
    const minFontSize = 14; // 최소 폰트 크기
    const maxFontSize = 16; // 최대 폰트 크기

    // 1120에서 640 사이의 화면 너비 범위에서만 폰트 크기를 조정합니다.
    const fontSize = minFontSize + ((maxFontSize - minFontSize) * (Math.min(1120, Math.max(windowWidth, 640)) - 640)) / (1120 - 640);

    // 폰트 크기를 반환합니다.
    return `${fontSize}px`;
  };
  return (
    <section className="#">
      <article className="#">
        <div className="introWhatDifferent container">
          <div className="article headTitle">
            <h2 style={{ fontSize: calculateFontSize() }} className="  letterLeft letterDown">
              유니세프 <br />
              무엇이 다른가요?
            </h2>
          </div>
          <div className="introWhatDifferentBox article">
            <div className="introWhatTextBox title">
              <div className="letterLeft letterDown">
                <h3 style={{ fontSize: calculateFontSize3220() }}>유니세프는</h3>
                <strong style={{ fontSize: calculateFontSize4024() }}>신뢰할 수 있습니다</strong>
              </div>
              <p className="letterLeft letterDown delay" data-delay="0.1" style={{ fontSize: calculateFontSize1614() }}>
                유엔 기관이기 때문입니다. 유엔아동권리협약에 직접 명시된 유일한 아동권리증진 기관이자 1965년에 노벨평화상도 수상했습니다.
              </p>
            </div>
            <div className="introWhatVisualBox letterRight letterDown delay" data-delay="0.4">
              <img src="/introduce/introduction_img1.jpg" alt="" />
            </div>
          </div>

          <div className="introWhatDifferentBox article">
            <div className="introWhatTextBox title">
              <div className="letterLeft letterDown">
                <h3 style={{ fontSize: calculateFontSize3220() }}>유니세프는</h3>
                <strong style={{ fontSize: calculateFontSize4024() }}>같은 돈으로 더 많은 어린이를 구합니다</strong>
              </div>
              <p className="letterLeft letterDown delay" data-delay="0.1" style={{ fontSize: calculateFontSize1614() }}>
                유니세프는 약 80년의 경험과 전문성을 가지고 있으며 구호물품 등을 대량 구매하며 각국 정부와 협력해 근본적인 문제 해결을 추구하기 때문입니다.
              </p>
            </div>
            <div className="introWhatVisualBox letterRight letterDown delay" data-delay="0.4">
              <img src="/introduce/introduction_img2.jpg" alt="" />
            </div>
          </div>

          <div className="introWhatDifferentBox article">
            <div className="introWhatTextBox title">
              <div className="letterLeft letterDown">
                <h3 style={{ fontSize: calculateFontSize3220() }}>유니세프는</h3>
                <strong style={{ fontSize: calculateFontSize4024() }}>재난 발생시 가장 먼저 현장에 접근합니다</strong>
              </div>
              <p className="letterLeft letterDown delay" data-delay="0.1" style={{ fontSize: calculateFontSize1614() }}>
                유니세프는 약 190개 나라와 영토에서 활동하며, 5개의 물류센터를 보유해 전 세계 어디서 재난이 발생해도 가장 신속하게 현장에 접근하여 어린이를 돕습니다. 긴급상황이 종료된 후에도 한결같이 어린이 곁을 지키며 지속가능한 발전을 지원합니다.
              </p>
            </div>
            <div className="introWhatVisualBox letterRight letterDown delay" data-delay="0.4">
              <img src="/introduce/introduction_img3.jpg" alt="" />
            </div>
          </div>

          <div className="introWhatDifferentBox article">
            <div className="introWhatTextBox title">
              <div className="letterLeft letterDown">
                <h3 style={{ fontSize: calculateFontSize3220() }}>유니세프는</h3>
                <strong style={{ fontSize: calculateFontSize4024() }}>효율적이고 투명합니다</strong>
              </div>
              <p className="letterLeft letterDown delay" data-delay="0.1" style={{ fontSize: calculateFontSize1614() }}>
                유니세프한국위원회는 고유목적사업을 위해 매년 총 수입의 90% 이상을 국내외 어린이를 위해 사용합니다. 유니세프한국위원회는 내부감사와 외부회계법인 감사 및 유니세프 본부 감사를 통해 후원금 사용의 적정성을 검증받고 있으며, 국세청에
                투명하게 공시하고 있습니다.
              </p>
            </div>
            <div className="introWhatVisualBox letterRight letterDown delay" data-delay="0.4">
              <img src="/introduce/introduction_img5.jpg" alt="" />
            </div>
          </div>

          <div className="introWhatDifferentBox article">
            <div className="introWhatTextBox title">
              <div className="letterLeft letterDown">
                <h3 style={{ fontSize: calculateFontSize3220() }}>유니세프는</h3>
                <strong style={{ fontSize: calculateFontSize4024() }}>도움을 줄 차례입니다</strong>
              </div>
              <p className="letterLeft letterDown delay" data-delay="0.1" style={{ fontSize: calculateFontSize1614() }}>
                유니세프는 1950년부터 1993년까지 43년간 수많은 한국 어린이의 소중한 생명을 지켰습니다. 이제는 우리가 개발도상국 어린이들에게도 꿈꿀 기회를 주어야 합니다.
              </p>
            </div>
            <div className="introWhatVisualBox letterRight letterDown delay" data-delay="0.4">
              <img src="/introduce/introduction_img4.jpg" alt="" />
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
