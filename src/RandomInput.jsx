import { useState } from "react";
import styles from "./css/RandomInput.module.css";
import { Link } from "react-router-dom";

export default function RandomInput() {
  const [selectedButton, setSelectedButton] = useState("button01"); // 상태 추가
  const [priceText, setPriceText] = useState("30,000원"); // 상태 추가
  const [vaccineText, setVaccineText] = useState("DTP 예방백신 1,200회");

  const vaccineOptions = [
    ["DTP 예방백신 1,200회", "다테토스 백신 300회", "폴리오 예방백신 700회", "BCG 예방백신 500회"],
    ["인플루엔자 백신 1,000회", "수두 예방백신 400회", "홍역 예방백신 800회", "수막구균 예방백신 600회"],
    ["티푸스 백신 600회", "파상풍 백신 900회", "장티푸스 백신 400회", "말라리아 백신 200회"],
  ];

  // 버튼 클릭 핸들러 함수
  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId); // 선택된 버튼 업데이트

    // 각 버튼에 맞는 가격과 랜덤한 백신 정보 설정
    switch (buttonId) {
      case 1:
        setPriceText("30,000원");
        setVaccineText(getRandomVaccineText(vaccineOptions[0]));
        break;
      case 2:
        setPriceText("50,000원");
        setVaccineText(getRandomVaccineText(vaccineOptions[1]));
        break;
      case 3:
        setPriceText("100,000원");
        setVaccineText(getRandomVaccineText(vaccineOptions[2]));
        break;
      default:
        break;
    }
  };

  // 랜덤한 백신 정보 반환 함수
  const getRandomVaccineText = (options) => {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  };

  return (
    <div className={styles.mainSponsor}>
      <div className={styles.mainSponsorSelect}>
        <div className={styles.selectMoney}>
          <div className={styles.selectBox}>
            <select name="" id="">
              <option value="">정기 </option>
              <option value="">일시</option>
            </select>
          </div>
          <div className={styles.sponsorCenterbox}>
            <ul>
              <li>
                <button
                  id="button01"
                  onClick={() => handleButtonClick(1)} // 버튼 클릭 핸들러 연결
                  className={selectedButton === 1 ? "active" : ""}
                >
                  30,000원
                </button>
              </li>
              <li>
                <button
                  id="button02"
                  onClick={() => handleButtonClick(2)} // 버튼 클릭 핸들러 연결
                  className={selectedButton === 2 ? "active" : ""}
                >
                  50,000원
                </button>
              </li>
              <li>
                <button
                  id="button03"
                  onClick={() => handleButtonClick(3)} // 버튼 클릭 핸들러 연결
                  className={selectedButton === 3 ? "active" : ""}
                >
                  100,000원
                </button>
              </li>
              <li>
                <input type="text" placeholder="금액직접입력" />
              </li>
            </ul>
            <div className={styles.sponsorBodyText}>
              <strong>
                월 <span id="price">{priceText}</span>이면, 전 세계 어린이를 위해
                <span id="vaccines"> {vaccineText}</span>를 지원할 수 있습니다
              </strong>
            </div>
          </div>
        </div>
        <div className={styles.sponsorButton}>
          <strong>후원하기</strong>
        </div>
      </div>
    </div>
  );
}
