import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/title.css';

import React, { useRef, useState } from 'react';

import Slider from 'react-slick';
import new1 from '../resorces/images/new1.jpg';
import new2 from '../resorces/images/new2.jpg';
import new3 from '../resorces/images/new3.jpg';
import new4 from '../resorces/images/new4.jpg';
import new5 from '../resorces/images/new5.jpg';
import new6 from '../resorces/images/new6.jpg';

const NextArrow = ({ onClick, currentSlide }) => (
  <div className="w-[1020px] flex flex-row justify-center">
    <button
      className="w-[335px] h-[40px] border border-[#ddd] rounded text-sm text-[#666] mt-[40px] font-medium"
      onClick={onClick}
    >
      신상 더보기 {currentSlide + 1} <span className="text-[#b2b8be]">| 3</span>
    </button>
  </div>
);

const New = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const [settings, setSettings] = useState({
    dots: false,
    infinite: true,
    speed: 10,
    waitForAnimate: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    draggable: false,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  });

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className="w-[1020px] mt-[30px] slider-container flex flex-row">
      <div>
        <div className="w-[1020px] h-[405px] flex flex-col">
          <h1 className="w-[1020px] px-[20px] text-[26px] font-bold text-center mb-[25px]">신상 업데이트</h1>
          <Slider ref={sliderRef} {...settings}>
            <div>
              <div className="w-[1020px] flex flex-row justify-between">
                <div className="w-[500px] flex flex-col items-center">
                  <div
                    className="w-[500px] h-[282px] rounded"
                    style={{
                      backgroundImage: `url(${new1})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  ></div>
                  <h2 className="text-xl font-bold w-[500px] break-keep custom-ellipsis mt-[15px]">
                    에딧비 NEW 톤업 신세럼 런칭
                  </h2>
                  <p className="w-[500px] text-[#50585f] mt-[10px]">노란기 ZERO 화잘먹 톤업 올인원 신세럼</p>
                </div>

                <div className="w-[500px] flex flex-col items-center">
                  <div
                    className="w-[500px] h-[282px] rounded"
                    style={{
                      backgroundImage: `url(${new2})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  ></div>
                  <h2 className="text-xl font-bold w-[500px] break-keep custom-ellipsis mt-[15px]">
                    려 루트젠 신개념 헤어볼륨필러 출시
                  </h2>
                  <p className="w-[500px] text-[#50585f] mt-[10px]">
                    스킬없어도 자연스럽게 뿌리볼륨을 만들어주는 치트키
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="w-[1020px] flex flex-row justify-between">
                <div className="w-[500px] flex flex-col items-center">
                  <div
                    className="w-[500px] h-[282px] rounded"
                    style={{
                      backgroundImage: `url(${new3})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  ></div>
                  <h2 className="text-xl font-bold w-[500px] break-keep custom-ellipsis mt-[15px]">
                    촉촉하고 도톰하게, 베베숲
                  </h2>
                  <p className="w-[500px] text-[#50585f] mt-[10px]">아이를 위한 고평량 프리미엄 물티슈</p>
                </div>

                <div className="w-[500px] flex flex-col items-center">
                  <div
                    className="w-[500px] h-[282px] rounded"
                    style={{
                      backgroundImage: `url(${new4})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  ></div>
                  <h2 className="text-xl font-bold w-[500px] break-keep custom-ellipsis mt-[15px]">
                    제니퍼룸 커피머신
                  </h2>
                  <p className="w-[500px] text-[#50585f] mt-[10px]">기술력을 더해 실현한 완성도 높은 커피 맛</p>
                </div>
              </div>
            </div>

            <div>
              <div className="w-[1020px] flex flex-row justify-between">
                <div className="w-[500px] flex flex-col items-center">
                  <div
                    className="w-[500px] h-[282px] rounded"
                    style={{
                      backgroundImage: `url(${new5})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  ></div>
                  <h2 className="text-xl font-bold w-[500px] break-keep custom-ellipsis mt-[15px]">
                    공기처럼 가벼운 파우더로
                  </h2>
                  <p className="w-[500px] text-[#50585f] mt-[10px]">개기름 없이 보송한 피부 완성</p>
                </div>

                <div className="w-[500px] flex flex-col items-center">
                  <div
                    className="w-[500px] h-[282px] rounded"
                    style={{
                      backgroundImage: `url(${new6})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  ></div>
                  <h2 className="text-xl font-bold w-[500px] break-keep custom-ellipsis mt-[15px]">
                    화려하고 완벽하게 즐기는
                  </h2>
                  <p className="w-[500px] text-[#50585f] mt-[10px]">반디 자석 네일 폴리쉬</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>

        <NextArrow onClick={handleNextClick} currentSlide={currentSlide} />
      </div>
    </div>
  );
};

export default New;
