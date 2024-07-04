import { useState } from "react";
import "./css/Button01.css";
import { Link } from "react-router-dom";

export default function Button01() {
  const [currentTab, setCurrentTab] = useState("guideTap04"); // 초기 상태
  const handleButtonClick = (tab) => {
    setCurrentTab(tab);
  };
  return (
    <div className="Button01">
      <div className="guideTapButton">
        <button onClick={() => handleButtonClick("guideTap01")} className={currentTab === "guideTap01" ? "active" : ""}>
          추천
        </button>

        <button onClick={() => handleButtonClick("guideTap02")} className={currentTab === "guideTap02" ? "active" : ""}>
          NEW
        </button>
        <button onClick={() => handleButtonClick("guideTap03")} className={currentTab === "guideTap03" ? "active" : ""}>
          삼성iD카드
        </button>
        <button onClick={() => handleButtonClick("guideTap04")} className={currentTab === "guideTap04" ? "active" : ""}>
          디지털신청전용
        </button>
        <button onClick={() => handleButtonClick("guideTap05")} className={currentTab === "guideTap05" ? "active" : ""}>
          taptap
        </button>
        <button onClick={() => handleButtonClick("guideTap06")} className={currentTab === "guideTap06" ? "active" : ""}>
          트레이더스
        </button>
        <button onClick={() => handleButtonClick("guideTap07")} className={currentTab === "guideTap07" ? "active" : ""}>
          프리미엄
        </button>
      </div>

      <div className="guideApp">
        {currentTab === "guideTap01" && (
          <div className="guideTapItem guideTapItem04">
            <h3>디지털신청전용1</h3>
            <hr />
            <div className="guideCardItem">
              <img src="/guide/04digital/guide04Digital01.png" alt="" />
              <div className="guideItemTextbox">
                <h4>삼성카드&MILEAGE PLATINUM(스카이패스) </h4>
                <p>1,000원당 스카이패스 1마일리지 적립</p>
                <p>1,000원당 스카이패스 1마일리지 추가적립</p>
              </div>
            </div>
            <Link to="#">연회비 100% 캐시백 이벤트 자세히 보기</Link>
            <div className="guideCardItem">
              <img src="/guide/04digital/guide04Digital02.gif" alt="" />
              <div className="guideItemTextbox">
                <h4>삼성카드&MILEAGE PLATINUM(스카이패스) </h4>
                <p>1,000원당 스카이패스 1마일리지 적립</p>
                <p>1,000원당 스카이패스 1마일리지 추가적립</p>
              </div>
            </div>
            <Link to="#">연회비 100% 캐시백 이벤트 자세히 보기</Link>
            <div className="guideTapItemWrap">
              <div className="guideCardItem">
                <img src="/guide/04digital/guide04Digital03.png" alt="" />
                <div className="guideItemTextbox">
                  <h4>삼성카드&MILEAGE PLATINUM(스카이패스) </h4>
                  <p>1,000원당 스카이패스 1마일리지 적립</p>
                  <p>1,000원당 스카이패스 1마일리지 추가적립</p>
                </div>
              </div>
              <div className="guideCardItem">
                <img src="/guide/04digital/guide04Digital12.png" alt="" />
                <div className="guideItemTextbox">
                  <h4>삼성카드&MILEAGE PLATINUM(스카이패스) </h4>
                  <p>1,000원당 스카이패스 1마일리지 적립</p>
                  <p>1,000원당 스카이패스 1마일리지 추가적립</p>
                </div>
              </div>
              <div className="guideCardItem">
                <img src="/guide/04digital/guide04Digital16.png" alt="" />
                <div className="guideItemTextbox">
                  <h4>삼성카드&MILEAGE PLATINUM(스카이패스) </h4>
                  <p>1,000원당 스카이패스 1마일리지 적립</p>
                  <p>1,000원당 스카이패스 1마일리지 추가적립</p>
                </div>
              </div>
              <div className="guideCardItem">
                <img src="/guide/04digital/guide04Digital17.png" alt="" />
                <div className="guideItemTextbox">
                  <h4>삼성카드&MILEAGE PLATINUM(스카이패스) </h4>
                  <p>1,000원당 스카이패스 1마일리지 적립</p>
                  <p>1,000원당 스카이패스 1마일리지 추가적립</p>
                </div>
              </div>
            </div>
          </div>
        )}
        {currentTab === "guideTap02" && (
          <div className="guideTapItem guideTapItem04">
            <h3>디지털신청전용2</h3>
            <hr />
            <div className="guideTapItemWrap">
              <div className="guideCardItem">
                <img src="/guide/04digital/guide04Digital03.png" alt="" />
                <div className="guideItemTextbox">
                  <h4>삼성카드&MILEAGE PLATINUM(스카이패스) </h4>
                  <p>1,000원당 스카이패스 1마일리지 적립</p>
                  <p>1,000원당 스카이패스 1마일리지 추가적립</p>
                </div>
              </div>
              <div className="guideCardItem">
                <img src="/guide/04digital/guide04Digital04.gif" alt="" />
                <div className="guideItemTextbox">
                  <h4>삼성카드&MILEAGE PLATINUM(스카이패스) </h4>
                  <p>1,000원당 스카이패스 1마일리지 적립</p>
                  <p>1,000원당 스카이패스 1마일리지 추가적립</p>
                </div>
              </div>
              <div className="guideCardItem">
                <img src="/guide/04digital/guide04Digital05.png" alt="" />
                <div className="guideItemTextbox">
                  <h4>삼성카드&MILEAGE PLATINUM(스카이패스) </h4>
                  <p>1,000원당 스카이패스 1마일리지 적립</p>
                  <p>1,000원당 스카이패스 1마일리지 추가적립</p>
                </div>
              </div>
            </div>
            <Link to="#">연회비 100% 캐시백 이벤트 자세히 보기</Link>
            <div className="guideCardItem">
              <img src="/guide/04digital/guide04Digital06.png" alt="" />
              <div className="guideItemTextbox">
                <h4>삼성카드&MILEAGE PLATINUM(스카이패스) </h4>
                <p>1,000원당 스카이패스 1마일리지 적립</p>
                <p>1,000원당 스카이패스 1마일리지 추가적립</p>
              </div>
            </div>
            <Link to="#">연회비 100% 캐시백 이벤트 자세히 보기</Link>
            <div className="guideCardItem">
              <img src="/guide/04digital/guide04Digital07.png" alt="" />
              <div className="guideItemTextbox">
                <h4>삼성카드&MILEAGE PLATINUM(스카이패스) </h4>
                <p>1,000원당 스카이패스 1마일리지 적립</p>
                <p>1,000원당 스카이패스 1마일리지 추가적립</p>
              </div>
            </div>
            <Link to="#">연회비 100% 캐시백 이벤트 자세히 보기</Link>
            <div className="guideTapItemWrap">
              <div className="guideCardItem">
                <img src="/guide/04digital/guide04Digital08.png" alt="" />
                <div className="guideItemTextbox">
                  <h4>삼성카드&MILEAGE PLATINUM(스카이패스) </h4>
                  <p>1,000원당 스카이패스 1마일리지 적립</p>
                  <p>1,000원당 스카이패스 1마일리지 추가적립</p>
                </div>
              </div>
              <div className="guideCardItem">
                <img src="/guide/04digital/guide04Digital09.png" alt="" />
                <div className="guideItemTextbox">
                  <h4>삼성카드&MILEAGE PLATINUM(스카이패스) </h4>
                  <p>1,000원당 스카이패스 1마일리지 적립</p>
                  <p>1,000원당 스카이패스 1마일리지 추가적립</p>
                </div>
              </div>
              <div className="guideCardItem">
                <img src="/guide/04digital/guide04Digital15.png" alt="" />
                <div className="guideItemTextbox">
                  <h4>삼성카드&MILEAGE PLATINUM(스카이패스) </h4>
                  <p>1,000원당 스카이패스 1마일리지 적립</p>
                  <p>1,000원당 스카이패스 1마일리지 추가적립</p>
                </div>
              </div>
              <div className="guideCardItem">
                <img src="/guide/04digital/guide04Digital16.png" alt="" />
                <div className="guideItemTextbox">
                  <h4>삼성카드&MILEAGE PLATINUM(스카이패스) </h4>
                  <p>1,000원당 스카이패스 1마일리지 적립</p>
                  <p>1,000원당 스카이패스 1마일리지 추가적립</p>
                </div>
              </div>
            </div>
          </div>
        )}
        {currentTab === "guideTap03" && (
          <div className="guideTapItem guideTapItem04">
            <h3>디지털신청전용3</h3>
            <hr />
            <div className="guideCardItem">
              <img src="/guide/04digital/guide04Digital06.png" alt="" />
              <div className="guideItemTextbox">
                <h4>삼성카드&MILEAGE PLATINUM(스카이패스) </h4>
                <p>1,000원당 스카이패스 1마일리지 적립</p>
                <p>1,000원당 스카이패스 1마일리지 추가적립</p>
              </div>
            </div>
            <Link to="#">연회비 100% 캐시백 이벤트 자세히 보기</Link>
            <div className="guideCardItem">
              <img src="/guide/04digital/guide04Digital07.png" alt="" />
              <div className="guideItemTextbox">
                <h4>삼성카드&MILEAGE PLATINUM(스카이패스) </h4>
                <p>1,000원당 스카이패스 1마일리지 적립</p>
                <p>1,000원당 스카이패스 1마일리지 추가적립</p>
              </div>
            </div>
            <Link to="#">연회비 100% 캐시백 이벤트 자세히 보기</Link>
            <div className="guideTapItemWrap">
              <div className="guideCardItem">
                <img src="/guide/04digital/guide04Digital08.png" alt="" />
                <div className="guideItemTextbox">
                  <h4>삼성카드&MILEAGE PLATINUM(스카이패스) </h4>
                  <p>1,000원당 스카이패스 1마일리지 적립</p>
                  <p>1,000원당 스카이패스 1마일리지 추가적립</p>
                </div>
              </div>
              <div className="guideCardItem">
                <img src="/guide/04digital/guide04Digital09.png" alt="" />
                <div className="guideItemTextbox">
                  <h4>삼성카드&MILEAGE PLATINUM(스카이패스) </h4>
                  <p>1,000원당 스카이패스 1마일리지 적립</p>
                  <p>1,000원당 스카이패스 1마일리지 추가적립</p>
                </div>
              </div>
              <div className="guideCardItem">
                <img src="/guide/04digital/guide04Digital10.png" alt="" />
                <div className="guideItemTextbox">
                  <h4>삼성카드&MILEAGE PLATINUM(스카이패스) </h4>
                  <p>1,000원당 스카이패스 1마일리지 적립</p>
                  <p>1,000원당 스카이패스 1마일리지 추가적립</p>
                </div>
              </div>
              <div className="guideCardItem">
                <img src="/guide/04digital/guide04Digital11.png" alt="" />
                <div className="guideItemTextbox">
                  <h4>삼성카드&MILEAGE PLATINUM(스카이패스) </h4>
                  <p>1,000원당 스카이패스 1마일리지 적립</p>
                  <p>1,000원당 스카이패스 1마일리지 추가적립</p>
                </div>
              </div>
              <div className="guideCardItem">
                <img src="/guide/04digital/guide04Digital12.png" alt="" />
                <div className="guideItemTextbox">
                  <h4>삼성카드&MILEAGE PLATINUM(스카이패스) </h4>
                  <p>1,000원당 스카이패스 1마일리지 적립</p>
                  <p>1,000원당 스카이패스 1마일리지 추가적립</p>
                </div>
              </div>
              <div className="guideCardItem">
                <img src="/guide/04digital/guide04Digital13.png" alt="" />
                <div className="guideItemTextbox">
                  <h4>삼성카드&MILEAGE PLATINUM(스카이패스) </h4>
                  <p>1,000원당 스카이패스 1마일리지 적립</p>
                  <p>1,000원당 스카이패스 1마일리지 추가적립</p>
                </div>
              </div>
              <div className="guideCardItem">
                <img src="/guide/04digital/guide04Digital14.png" alt="" />
                <div className="guideItemTextbox">
                  <h4>삼성카드&MILEAGE PLATINUM(스카이패스) </h4>
                  <p>1,000원당 스카이패스 1마일리지 적립</p>
                  <p>1,000원당 스카이패스 1마일리지 추가적립</p>
                </div>
              </div>
              <div className="guideCardItem">
                <img src="/guide/04digital/guide04Digital15.png" alt="" />
                <div className="guideItemTextbox">
                  <h4>삼성카드&MILEAGE PLATINUM(스카이패스) </h4>
                  <p>1,000원당 스카이패스 1마일리지 적립</p>
                  <p>1,000원당 스카이패스 1마일리지 추가적립</p>
                </div>
              </div>
              <div className="guideCardItem">
                <img src="/guide/04digital/guide04Digital16.png" alt="" />
                <div className="guideItemTextbox">
                  <h4>삼성카드&MILEAGE PLATINUM(스카이패스) </h4>
                  <p>1,000원당 스카이패스 1마일리지 적립</p>
                  <p>1,000원당 스카이패스 1마일리지 추가적립</p>
                </div>
              </div>
              <div className="guideCardItem">
                <img src="/guide/04digital/guide04Digital17.png" alt="" />
                <div className="guideItemTextbox">
                  <h4>삼성카드&MILEAGE PLATINUM(스카이패스) </h4>
                  <p>1,000원당 스카이패스 1마일리지 적립</p>
                  <p>1,000원당 스카이패스 1마일리지 추가적립</p>
                </div>
              </div>
            </div>
          </div>
        )}
        {currentTab === "guideTap04" && (
          <div className="guideTapItem guideTapItem04">
            <h3>디지털신청전용4</h3>
            <hr />

            <div className="guideTapItemWrap">
              <div className="guideCardItem">
                <img src="/guide/04digital/guide04Digital08.png" alt="" />
                <div className="guideItemTextbox">
                  <h4>삼성카드&MILEAGE PLATINUM(스카이패스) </h4>
                  <p>1,000원당 스카이패스 1마일리지 적립</p>
                  <p>1,000원당 스카이패스 1마일리지 추가적립</p>
                </div>
              </div>
              <div className="guideCardItem">
                <img src="/guide/04digital/guide04Digital09.png" alt="" />
                <div className="guideItemTextbox">
                  <h4>삼성카드&MILEAGE PLATINUM(스카이패스) </h4>
                  <p>1,000원당 스카이패스 1마일리지 적립</p>
                  <p>1,000원당 스카이패스 1마일리지 추가적립</p>
                </div>
              </div>
              <div className="guideCardItem">
                <img src="/guide/04digital/guide04Digital10.png" alt="" />
                <div className="guideItemTextbox">
                  <h4>삼성카드&MILEAGE PLATINUM(스카이패스) </h4>
                  <p>1,000원당 스카이패스 1마일리지 적립</p>
                  <p>1,000원당 스카이패스 1마일리지 추가적립</p>
                </div>
              </div>
              <div className="guideCardItem">
                <img src="/guide/04digital/guide04Digital11.png" alt="" />
                <div className="guideItemTextbox">
                  <h4>삼성카드&MILEAGE PLATINUM(스카이패스) </h4>
                  <p>1,000원당 스카이패스 1마일리지 적립</p>
                  <p>1,000원당 스카이패스 1마일리지 추가적립</p>
                </div>
              </div>
              <div className="guideCardItem">
                <img src="/guide/04digital/guide04Digital12.png" alt="" />
                <div className="guideItemTextbox">
                  <h4>삼성카드&MILEAGE PLATINUM(스카이패스) </h4>
                  <p>1,000원당 스카이패스 1마일리지 적립</p>
                  <p>1,000원당 스카이패스 1마일리지 추가적립</p>
                </div>
              </div>
              <div className="guideCardItem">
                <img src="/guide/04digital/guide04Digital13.png" alt="" />
                <div className="guideItemTextbox">
                  <h4>삼성카드&MILEAGE PLATINUM(스카이패스) </h4>
                  <p>1,000원당 스카이패스 1마일리지 적립</p>
                  <p>1,000원당 스카이패스 1마일리지 추가적립</p>
                </div>
              </div>
              <div className="guideCardItem">
                <img src="/guide/04digital/guide04Digital14.png" alt="" />
                <div className="guideItemTextbox">
                  <h4>삼성카드&MILEAGE PLATINUM(스카이패스) </h4>
                  <p>1,000원당 스카이패스 1마일리지 적립</p>
                  <p>1,000원당 스카이패스 1마일리지 추가적립</p>
                </div>
              </div>
              <div className="guideCardItem">
                <img src="/guide/04digital/guide04Digital15.png" alt="" />
                <div className="guideItemTextbox">
                  <h4>삼성카드&MILEAGE PLATINUM(스카이패스) </h4>
                  <p>1,000원당 스카이패스 1마일리지 적립</p>
                  <p>1,000원당 스카이패스 1마일리지 추가적립</p>
                </div>
              </div>
              <div className="guideCardItem">
                <img src="/guide/04digital/guide04Digital16.png" alt="" />
                <div className="guideItemTextbox">
                  <h4>삼성카드&MILEAGE PLATINUM(스카이패스) </h4>
                  <p>1,000원당 스카이패스 1마일리지 적립</p>
                  <p>1,000원당 스카이패스 1마일리지 추가적립</p>
                </div>
              </div>
              <div className="guideCardItem">
                <img src="/guide/04digital/guide04Digital17.png" alt="" />
                <div className="guideItemTextbox">
                  <h4>삼성카드&MILEAGE PLATINUM(스카이패스) </h4>
                  <p>1,000원당 스카이패스 1마일리지 적립</p>
                  <p>1,000원당 스카이패스 1마일리지 추가적립</p>
                </div>
              </div>
            </div>
          </div>
        )}
        {currentTab === "guideTap05" && (
          <div className="guideTapItem guideTapItem04">
            <h3>디지털신청전용5</h3>
            <hr />

            <div className="guideCardItem">
              <img src="/guide/04digital/guide04Digital02.gif" alt="" />
              <div className="guideItemTextbox">
                <h4>삼성카드&MILEAGE PLATINUM(스카이패스) </h4>
                <p>1,000원당 스카이패스 1마일리지 적립</p>
                <p>1,000원당 스카이패스 1마일리지 추가적립</p>
              </div>
            </div>
            <Link to="#">연회비 100% 캐시백 이벤트 자세히 보기</Link>
            <div className="guideTapItemWrap">
              <div className="guideCardItem">
                <img src="/guide/04digital/guide04Digital03.png" alt="" />
                <div className="guideItemTextbox">
                  <h4>삼성카드&MILEAGE PLATINUM(스카이패스) </h4>
                  <p>1,000원당 스카이패스 1마일리지 적립</p>
                  <p>1,000원당 스카이패스 1마일리지 추가적립</p>
                </div>
              </div>
              <div className="guideCardItem">
                <img src="/guide/04digital/guide04Digital04.gif" alt="" />
                <div className="guideItemTextbox">
                  <h4>삼성카드&MILEAGE PLATINUM(스카이패스) </h4>
                  <p>1,000원당 스카이패스 1마일리지 적립</p>
                  <p>1,000원당 스카이패스 1마일리지 추가적립</p>
                </div>
              </div>
              <div className="guideCardItem">
                <img src="/guide/04digital/guide04Digital05.png" alt="" />
                <div className="guideItemTextbox">
                  <h4>삼성카드&MILEAGE PLATINUM(스카이패스) </h4>
                  <p>1,000원당 스카이패스 1마일리지 적립</p>
                  <p>1,000원당 스카이패스 1마일리지 추가적립</p>
                </div>
              </div>
            </div>
            <Link to="#">연회비 100% 캐시백 이벤트 자세히 보기</Link>
            <div className="guideCardItem">
              <img src="/guide/04digital/guide04Digital06.png" alt="" />
              <div className="guideItemTextbox">
                <h4>삼성카드&MILEAGE PLATINUM(스카이패스) </h4>
                <p>1,000원당 스카이패스 1마일리지 적립</p>
                <p>1,000원당 스카이패스 1마일리지 추가적립</p>
              </div>
            </div>
            <Link to="#">연회비 100% 캐시백 이벤트 자세히 보기</Link>
            <div className="guideCardItem">
              <img src="/guide/04digital/guide04Digital07.png" alt="" />
              <div className="guideItemTextbox">
                <h4>삼성카드&MILEAGE PLATINUM(스카이패스) </h4>
                <p>1,000원당 스카이패스 1마일리지 적립</p>
                <p>1,000원당 스카이패스 1마일리지 추가적립</p>
              </div>
            </div>
            <Link to="#">연회비 100% 캐시백 이벤트 자세히 보기</Link>
          </div>
        )}
        {currentTab === "guideTap06" && (
          <div className="guideTapItem guideTapItem04">
            <h3>디지털신청전용6</h3>
            <hr />
            <div className="guideTapItemWrap">
              <div className="guideCardItem">
                <img src="/guide/04digital/guide04Digital03.png" alt="" />
                <div className="guideItemTextbox">
                  <h4>삼성카드&MILEAGE PLATINUM(스카이패스) </h4>
                  <p>1,000원당 스카이패스 1마일리지 적립</p>
                  <p>1,000원당 스카이패스 1마일리지 추가적립</p>
                </div>
              </div>
              <div className="guideCardItem">
                <img src="/guide/04digital/guide04Digital04.gif" alt="" />
                <div className="guideItemTextbox">
                  <h4>삼성카드&MILEAGE PLATINUM(스카이패스) </h4>
                  <p>1,000원당 스카이패스 1마일리지 적립</p>
                  <p>1,000원당 스카이패스 1마일리지 추가적립</p>
                </div>
              </div>
              <div className="guideCardItem">
                <img src="/guide/04digital/guide04Digital05.png" alt="" />
                <div className="guideItemTextbox">
                  <h4>삼성카드&MILEAGE PLATINUM(스카이패스) </h4>
                  <p>1,000원당 스카이패스 1마일리지 적립</p>
                  <p>1,000원당 스카이패스 1마일리지 추가적립</p>
                </div>
              </div>
            </div>
            <div className="guideCardItem">
              <img src="/guide/04digital/guide04Digital07.png" alt="" />
              <div className="guideItemTextbox">
                <h4>삼성카드&MILEAGE PLATINUM(스카이패스) </h4>
                <p>1,000원당 스카이패스 1마일리지 적립</p>
                <p>1,000원당 스카이패스 1마일리지 추가적립</p>
              </div>
            </div>
            <Link to="#">연회비 100% 캐시백 이벤트 자세히 보기</Link>
            <div className="guideTapItemWrap">
              <div className="guideCardItem">
                <img src="/guide/04digital/guide04Digital08.png" alt="" />
                <div className="guideItemTextbox">
                  <h4>삼성카드&MILEAGE PLATINUM(스카이패스) </h4>
                  <p>1,000원당 스카이패스 1마일리지 적립</p>
                  <p>1,000원당 스카이패스 1마일리지 추가적립</p>
                </div>
              </div>
              <div className="guideCardItem">
                <img src="/guide/04digital/guide04Digital11.png" alt="" />
                <div className="guideItemTextbox">
                  <h4>삼성카드&MILEAGE PLATINUM(스카이패스) </h4>
                  <p>1,000원당 스카이패스 1마일리지 적립</p>
                  <p>1,000원당 스카이패스 1마일리지 추가적립</p>
                </div>
              </div>
              <div className="guideCardItem">
                <img src="/guide/04digital/guide04Digital12.png" alt="" />
                <div className="guideItemTextbox">
                  <h4>삼성카드&MILEAGE PLATINUM(스카이패스) </h4>
                  <p>1,000원당 스카이패스 1마일리지 적립</p>
                  <p>1,000원당 스카이패스 1마일리지 추가적립</p>
                </div>
              </div>
              <div className="guideCardItem">
                <img src="/guide/04digital/guide04Digital16.png" alt="" />
                <div className="guideItemTextbox">
                  <h4>삼성카드&MILEAGE PLATINUM(스카이패스) </h4>
                  <p>1,000원당 스카이패스 1마일리지 적립</p>
                  <p>1,000원당 스카이패스 1마일리지 추가적립</p>
                </div>
              </div>
              <div className="guideCardItem">
                <img src="/guide/04digital/guide04Digital17.png" alt="" />
                <div className="guideItemTextbox">
                  <h4>삼성카드&MILEAGE PLATINUM(스카이패스) </h4>
                  <p>1,000원당 스카이패스 1마일리지 적립</p>
                  <p>1,000원당 스카이패스 1마일리지 추가적립</p>
                </div>
              </div>
            </div>
          </div>
        )}
        {currentTab === "guideTap07" && (
          <div className="guideTapItem guideTapItem04">
            <h3>디지털신청전용7</h3>
            <hr />

            <div className="guideCardItem">
              <img src="/guide/04digital/guide04Digital02.gif" alt="" />
              <div className="guideItemTextbox">
                <h4>삼성카드&MILEAGE PLATINUM(스카이패스) </h4>
                <p>1,000원당 스카이패스 1마일리지 적립</p>
                <p>1,000원당 스카이패스 1마일리지 추가적립</p>
              </div>
            </div>
            <Link to="#">연회비 100% 캐시백 이벤트 자세히 보기</Link>
            <div className="guideTapItemWrap">
              <div className="guideCardItem">
                <img src="/guide/04digital/guide04Digital03.png" alt="" />
                <div className="guideItemTextbox">
                  <h4>삼성카드&MILEAGE PLATINUM(스카이패스) </h4>
                  <p>1,000원당 스카이패스 1마일리지 적립</p>
                  <p>1,000원당 스카이패스 1마일리지 추가적립</p>
                </div>
              </div>
              <div className="guideCardItem">
                <img src="/guide/04digital/guide04Digital04.gif" alt="" />
                <div className="guideItemTextbox">
                  <h4>삼성카드&MILEAGE PLATINUM(스카이패스) </h4>
                  <p>1,000원당 스카이패스 1마일리지 적립</p>
                  <p>1,000원당 스카이패스 1마일리지 추가적립</p>
                </div>
              </div>
              <div className="guideCardItem">
                <img src="/guide/04digital/guide04Digital05.png" alt="" />
                <div className="guideItemTextbox">
                  <h4>삼성카드&MILEAGE PLATINUM(스카이패스) </h4>
                  <p>1,000원당 스카이패스 1마일리지 적립</p>
                  <p>1,000원당 스카이패스 1마일리지 추가적립</p>
                </div>
              </div>
            </div>
            <Link to="#">연회비 100% 캐시백 이벤트 자세히 보기</Link>
            <div className="guideCardItem">
              <img src="/guide/04digital/guide04Digital06.png" alt="" />
              <div className="guideItemTextbox">
                <h4>삼성카드&MILEAGE PLATINUM(스카이패스) </h4>
                <p>1,000원당 스카이패스 1마일리지 적립</p>
                <p>1,000원당 스카이패스 1마일리지 추가적립</p>
              </div>
            </div>
            <Link to="#">연회비 100% 캐시백 이벤트 자세히 보기</Link>
            <div className="guideCardItem">
              <img src="/guide/04digital/guide04Digital07.png" alt="" />
              <div className="guideItemTextbox">
                <h4>삼성카드&MILEAGE PLATINUM(스카이패스) </h4>
                <p>1,000원당 스카이패스 1마일리지 적립</p>
                <p>1,000원당 스카이패스 1마일리지 추가적립</p>
              </div>
            </div>
            <Link to="#">연회비 100% 캐시백 이벤트 자세히 보기</Link>
            <div className="guideTapItemWrap">
              <div className="guideCardItem">
                <img src="/guide/04digital/guide04Digital08.png" alt="" />
                <div className="guideItemTextbox">
                  <h4>삼성카드&MILEAGE PLATINUM(스카이패스) </h4>
                  <p>1,000원당 스카이패스 1마일리지 적립</p>
                  <p>1,000원당 스카이패스 1마일리지 추가적립</p>
                </div>
              </div>
              <div className="guideCardItem">
                <img src="/guide/04digital/guide04Digital09.png" alt="" />
                <div className="guideItemTextbox">
                  <h4>삼성카드&MILEAGE PLATINUM(스카이패스) </h4>
                  <p>1,000원당 스카이패스 1마일리지 적립</p>
                  <p>1,000원당 스카이패스 1마일리지 추가적립</p>
                </div>
              </div>
              <div className="guideCardItem">
                <img src="/guide/04digital/guide04Digital10.png" alt="" />
                <div className="guideItemTextbox">
                  <h4>삼성카드&MILEAGE PLATINUM(스카이패스) </h4>
                  <p>1,000원당 스카이패스 1마일리지 적립</p>
                  <p>1,000원당 스카이패스 1마일리지 추가적립</p>
                </div>
              </div>
              <div className="guideCardItem">
                <img src="/guide/04digital/guide04Digital11.png" alt="" />
                <div className="guideItemTextbox">
                  <h4>삼성카드&MILEAGE PLATINUM(스카이패스) </h4>
                  <p>1,000원당 스카이패스 1마일리지 적립</p>
                  <p>1,000원당 스카이패스 1마일리지 추가적립</p>
                </div>
              </div>
              <div className="guideCardItem">
                <img src="/guide/04digital/guide04Digital12.png" alt="" />
                <div className="guideItemTextbox">
                  <h4>삼성카드&MILEAGE PLATINUM(스카이패스) </h4>
                  <p>1,000원당 스카이패스 1마일리지 적립</p>
                  <p>1,000원당 스카이패스 1마일리지 추가적립</p>
                </div>
              </div>
              <div className="guideCardItem">
                <img src="/guide/04digital/guide04Digital13.png" alt="" />
                <div className="guideItemTextbox">
                  <h4>삼성카드&MILEAGE PLATINUM(스카이패스) </h4>
                  <p>1,000원당 스카이패스 1마일리지 적립</p>
                  <p>1,000원당 스카이패스 1마일리지 추가적립</p>
                </div>
              </div>
              <div className="guideCardItem">
                <img src="/guide/04digital/guide04Digital14.png" alt="" />
                <div className="guideItemTextbox">
                  <h4>삼성카드&MILEAGE PLATINUM(스카이패스) </h4>
                  <p>1,000원당 스카이패스 1마일리지 적립</p>
                  <p>1,000원당 스카이패스 1마일리지 추가적립</p>
                </div>
              </div>
              <div className="guideCardItem">
                <img src="/guide/04digital/guide04Digital15.png" alt="" />
                <div className="guideItemTextbox">
                  <h4>삼성카드&MILEAGE PLATINUM(스카이패스) </h4>
                  <p>1,000원당 스카이패스 1마일리지 적립</p>
                  <p>1,000원당 스카이패스 1마일리지 추가적립</p>
                </div>
              </div>
              <div className="guideCardItem">
                <img src="/guide/04digital/guide04Digital16.png" alt="" />
                <div className="guideItemTextbox">
                  <h4>삼성카드&MILEAGE PLATINUM(스카이패스) </h4>
                  <p>1,000원당 스카이패스 1마일리지 적립</p>
                  <p>1,000원당 스카이패스 1마일리지 추가적립</p>
                </div>
              </div>
              <div className="guideCardItem">
                <img src="/guide/04digital/guide04Digital17.png" alt="" />
                <div className="guideItemTextbox">
                  <h4>삼성카드&MILEAGE PLATINUM(스카이패스) </h4>
                  <p>1,000원당 스카이패스 1마일리지 적립</p>
                  <p>1,000원당 스카이패스 1마일리지 추가적립</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
