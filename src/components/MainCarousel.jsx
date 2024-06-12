import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/carousel.css';

import React, { useRef, useState } from 'react';

import Slider from 'react-slick';
import award from '../resorces/images/award.svg';
import img1 from '../resorces/images/slide-7.jpg';
import img2 from '../resorces/images/slide-1.jpg';
import img3 from '../resorces/images/slide-2.jpg';
import img4 from '../resorces/images/slide-3.jpg';
import img5 from '../resorces/images/slide-4.jpg';
import img6 from '../resorces/images/slide-5.jpg';

const PrevArrow = ({ onClick }) => (
  <div className="prev-arrow font-bold" onClick={onClick}>
    &lt;
  </div>
);

const NextArrow = ({ onClick }) => (
  <div className="next-arrow font-bold" onClick={onClick}>
    &gt;
  </div>
);

const MainCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAuto, setIsAuto] = useState(true);

  let sliderRef = useRef(null);
  const play = () => {
    sliderRef.slickPlay();
  };
  const pause = () => {
    sliderRef.slickPause();
  };

  const [settings, setSettings] = useState({
    dots: false,
    infinite: true,
    speed: 600,
    waitForAnimate: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: isAuto,
    autoplaySpeed: 10000,
    draggable: false,
    arrows: true,
    fade: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  });

  const toggleAutoPlay = () => {
    if (!isAuto) play();
    else pause();
    setIsAuto(!isAuto);
  };

  return (
    <div className="w-[100%] slider-container relative">
      <div className="absolute top-0 left-[442px] w-[170px] h-[450px] bg-[rgba(0,0,0,0.3)] z-10">
        <ul className="w-[170px] h-[31px] text-[#fff] font-bold text-sm leading-[27px]">
          <li className="px-[23px] hover:bg-[rgba(0,0,0,0.8)]">스킨케어</li>
          <li className="px-[23px] hover:bg-[rgba(0,0,0,0.8)]">메이크업/네일</li>
          <li className="px-[23px] hover:bg-[rgba(0,0,0,0.8)]">미용소품</li>
          <li className="px-[23px] hover:bg-[rgba(0,0,0,0.8)]">더모코스메틱</li>
          <li className="px-[23px] hover:bg-[rgba(0,0,0,0.8)]">맨즈케어</li>
          <li className="px-[23px] hover:bg-[rgba(0,0,0,0.8)]">향수/디퓨저</li>
          <li className="px-[23px] hover:bg-[rgba(0,0,0,0.8)]">헤어케어</li>
          <li className="px-[23px] hover:bg-[rgba(0,0,0,0.8)]">바디케어</li>
          <li className="px-[23px] hover:bg-[rgba(0,0,0,0.8)]">건강식품</li>
          <li className="px-[23px] hover:bg-[rgba(0,0,0,0.8)]">푸드</li>
          <li className="px-[23px] hover:bg-[rgba(0,0,0,0.8)]">구강/건강용품</li>
          <li className="px-[23px] hover:bg-[rgba(0,0,0,0.8)]">여성/위생용품</li>
          <li className="px-[23px] hover:bg-[rgba(0,0,0,0.8)]">라이프/팬시</li>
          <li className="flex flex-row gap-1 w-[170px] px-[23px] bg-[rgba(0,0,0,0.4)] hover:bg-[rgba(0,0,0,0.8)]">
            AWARDS
            <img src={award} />
          </li>
        </ul>
      </div>
      <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
        <div>
          <div className="relative">
            <div
              className="h-[450px]"
              style={{
                backgroundImage: `url(${img1})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            ></div>
            <div className="absolute top-[52px] left-[34%]">
              <p className="h-[40px] text-lg font-bold">
                에스쁘아
                <br />─
              </p>
              <h1 className="text-5xl text-[#1f1f1f] mt-[30px] mb-[10px] w-[340px]">
                젤리처럼
                <br />
                탱글하게 빛나는
                <br />내 피부
              </h1>
              <h2 className="text-lg text-[#666] font-bold">톤업쿠션 할인, 파우치 증정</h2>
            </div>
          </div>
        </div>
        <div>
          <div className="relative">
            <div
              className="h-[450px]"
              style={{
                backgroundImage: `url(${img2})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            ></div>
            <div className="absolute top-[52px] left-[34%]">
              <p className="h-[40px] text-lg font-bold">
                바닐라코
                <br />─
              </p>
              <h1 className="text-5xl text-[#1f1f1f] mt-[30px] mb-[10px] w-[340px]">
                클렌징은
                <br />
                내 주특기
                <br />
                귀여움은 덤
              </h1>
              <h2 className="text-lg text-[#666] font-bold">마이멜로디 토드백 한정수량</h2>
            </div>
          </div>
        </div>
        <div>
          <div className="relative">
            <div
              className="h-[450px]"
              style={{
                backgroundImage: `url(${img3})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            ></div>
            <div className="absolute top-[52px] left-[34%]">
              <p className="h-[40px] text-lg font-bold">
                클리오
                <br />─
              </p>
              <h1 className="text-5xl text-[#1f1f1f] mt-[30px] mb-[10px] w-[340px]">
                나도 있어
                <br />
                파우치 속
                <br />
                귀여운 고양이
              </h1>
              <h2 className="text-lg text-[#666] font-bold">냥생역전 코숏 에디션</h2>
            </div>
          </div>
        </div>
        <div>
          <div className="relative">
            <div
              className="h-[450px]"
              style={{
                backgroundImage: `url(${img4})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            ></div>
            <div className="absolute top-[52px] left-[34%]">
              <p className="h-[40px] text-lg font-bold">
                grn+와 함께하는
                <br />─
              </p>
              <h1 className="text-5xl text-[#1f1f1f] mt-[30px] mb-[10px] w-[340px]">
                건강한
                <br />
                관리 시작
                <br />
                베스트템
              </h1>
              <h2 className="text-lg text-[#666] font-bold">라이브 최대 59%</h2>
            </div>
          </div>
        </div>
        <div>
          <div className="relative">
            <div
              className="h-[450px]"
              style={{
                backgroundImage: `url(${img5})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            ></div>
            <div className="absolute top-[52px] left-[34%]">
              <p className="h-[40px] text-lg font-bold">
                올영PICK
                <br />─
              </p>
              <h1 className="text-5xl text-[#1f1f1f] mt-[30px] mb-[10px] w-[340px]">
                올리브영이
                <br />
                PICK한
                <br />이 달의 브랜드
              </h1>
              <h2 className="text-lg text-[#666] font-bold">닥터지-라운드랩 특가</h2>
            </div>
          </div>
        </div>
        <div>
          <div className="relative">
            <div
              className="h-[450px]"
              style={{
                backgroundImage: `url(${img6})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            ></div>
            <div className="absolute top-[52px] left-[34%]">
              <p className="h-[40px] text-lg font-bold">
                헤라
                <br />─
              </p>
              <h1 className="text-5xl text-[#1f1f1f] mt-[30px] mb-[10px] w-[340px]">
                푹푹 찌는날에도
                <br />
                피부표현은
                <br />
                가볍게 초밀착
              </h1>
              <h2 className="text-lg text-[#666] font-bold">올리브영 단독 기획세트 출시</h2>
            </div>
          </div>
        </div>
      </Slider>
      <div className="absolute bottom-[10%] left-[36.9%] text-sm text-[#666]">{currentSlide + 1}/6</div>
      <div
        className={`absolute w-[40px] h-[40px] left-[42%] bottom-[7.5%] ${isAuto ? 'auto-active' : 'auto-inactive'}`}
        onClick={toggleAutoPlay}
      ></div>
    </div>
  );
};

export default MainCarousel;
