import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/title.css';

import React, { useRef, useState } from 'react';

import Slider from 'react-slick';
import bag from '../resorces/images/bag.png';
import goods1 from '../resorces/images/goods1.jpg';
import goods10 from '../resorces/images/goods10.jpg';
import goods11 from '../resorces/images/goods11.jpg';
import goods12 from '../resorces/images/goods12.jpg';
import goods13 from '../resorces/images/goods13.jpg';
import goods14 from '../resorces/images/goods14.jpg';
import goods15 from '../resorces/images/goods15.jpg';
import goods16 from '../resorces/images/goods16.jpg';
import goods17 from '../resorces/images/goods17.jpg';
import goods18 from '../resorces/images/goods18.jpg';
import goods19 from '../resorces/images/goods19.jpg';
import goods2 from '../resorces/images/goods2.jpg';
import goods20 from '../resorces/images/goods20.jpg';
import goods3 from '../resorces/images/goods3.jpg';
import goods4 from '../resorces/images/goods4.jpg';
import goods5 from '../resorces/images/goods5.jpg';
import goods6 from '../resorces/images/goods6.jpg';
import goods7 from '../resorces/images/goods7.jpg';
import goods8 from '../resorces/images/goods8.jpg';
import goods9 from '../resorces/images/goods9.jpg';
import more from '../resorces/images/more.png';
import timer from '../resorces/images/timer.png';

const NextArrow = ({ onClick, currentSlide }) => (
  <div className="w-[510px] flex flex-row justify-center">
    <button
      className="w-[335px] h-[40px] border border-[#ddd] rounded text-sm text-[#666] mt-[40px] font-medium"
      onClick={onClick}
    >
      다른상품 추천해드릴게요 {currentSlide + 1} <span className="text-[#b2b8be]">| 5</span>
    </button>
  </div>
);

const MainCarousel = () => {
  const [currentSlideA, setCurrentSlideA] = useState(0);
  const [currentSlideB, setCurrentSlideB] = useState(0);
  const sliderRefA = useRef(null);
  const sliderRefB = useRef(null);

  const settingsA = {
    dots: false,
    infinite: true,
    speed: 10,
    waitForAnimate: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    draggable: false,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => setCurrentSlideA(newIndex),
  };

  const settingsB = {
    dots: false,
    infinite: true,
    speed: 10,
    waitForAnimate: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    draggable: false,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => setCurrentSlideB(newIndex),
  };

  const handleNextClickA = () => {
    if (sliderRefA.current) {
      sliderRefA.current.slickNext();
    }
  };

  const handleNextClickB = () => {
    if (sliderRefB.current) {
      sliderRefB.current.slickNext();
    }
  };

  return (
    <div className="w-[1020px] mt-[30px] slider-container flex flex-row">
      <div>
        <div className="w-[510px] h-[405px] flex flex-col border-r">
          <h1 className="w-[510px] text-left px-[20px] text-2xl font-bold">요즘 주목 받는 상품</h1>
          <button
            className="w-[510px] px-[20px] text-[15px] text-[#aaa] font-bold flex flex-row justify-end gap-2 items-center mb-[25px]"
            href="*"
          >
            더보기 <img className="w-[7px] h-[11px]" src={more} alt="more" />
          </button>
          <Slider ref={sliderRefA} {...settingsA}>
            <div>
              <div className="w-[510px] px-[20px] flex flex-row justify-between">
                <div className="w-[215px] flex flex-col items-center">
                  <div
                    className="w-[215px] h-[215px]"
                    style={{
                      backgroundImage: `url(${goods1})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  ></div>
                  <p className="h-[40px] text-sm w-[215px] break-keep custom-ellipsis mt-[8px]">
                    [리뷰이벤트] 넘버즈인 1번 판토텐산 액티브업 수딩세럼 50ml
                  </p>
                  <div className="w-[215px] flex flex-row mt-[5px] justify-between items-center">
                    <div className="flex flex-row items-baseline">
                      <p className="text-sm line-through font-semibold text-[#a9a9a9]">30,000원</p>
                      <p className="text-sm ml-[7px] text-[#e02020] font-semibold">
                        <span className="text-xl">17,500</span>원
                      </p>
                    </div>
                    <img className="w-[16px] h-[18px]" src={bag} alt="bag" />
                  </div>
                  <div className="w-[215px] flex flex-row justify-start mt-[5px]">
                    <div className="w-[40px] h-[18px] rounded-[9px] bg-[#f65c60] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                      세일
                    </div>
                  </div>
                </div>

                <div className="w-[215px] flex flex-col items-center">
                  <div
                    className="w-[215px] h-[215px]"
                    style={{
                      backgroundImage: `url(${goods2})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  ></div>
                  <p className="h-[40px] text-sm w-[200px] break-keep custom-ellipsis mt-[8px]">
                    [모공교정] 바이오힐보 프로바이오덤 콜라겐 리모델링 크림 기획세트 (+세럼13ml증정)
                  </p>
                  <div className="w-[215px] flex flex-row mt-[5px] justify-between items-center">
                    <div className="flex flex-row items-baseline">
                      <p className="text-sm line-through font-semibold text-[#a9a9a9]">38,000원</p>
                      <p className="text-sm ml-[7px] text-[#e02020] font-semibold">
                        <span className="text-xl">27,900</span>원
                      </p>
                    </div>
                    <img className="w-[16px] h-[18px]" src={bag} alt="bag" />
                  </div>
                  <div className="w-[215px] flex flex-row justify-start mt-[5px]">
                    <div className="w-[40px] h-[18px] rounded-[9px] bg-[#f65c60] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                      세일
                    </div>
                    <div className="w-[60px] h-[18px] rounded-[9px] bg-[#f374b7] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                      오늘드림
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="w-[510px] px-[20px] flex flex-row justify-between">
                <div className="w-[215px] flex flex-col items-center">
                  <div
                    className="w-[215px] h-[215px] relative"
                    style={{
                      backgroundImage: `url(${goods3})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    <div className="absolute top-[7px] left-[7px] w-[48px] h-[48px] rounded-full bg-[#fff] border border-[#f05a5e] border-2 text-[#f05a5e] text-sm font-bold flex justify-center items-center">
                      베스트
                    </div>
                  </div>
                  <p className="h-[40px] text-sm w-[215px] break-keep custom-ellipsis mt-[8px]">
                    [6월 올영픽/아일릿 원희PICK]바이오더마 하이드라비오 에센스로션 200ml 더블 기획
                  </p>
                  <div className="w-[215px] flex flex-row mt-[5px] justify-between items-center">
                    <div className="flex flex-row items-baseline">
                      <p className="text-sm line-through font-semibold text-[#a9a9a9]">54,000원</p>
                      <p className="text-sm ml-[7px] text-[#e02020] font-semibold">
                        <span className="text-xl">43,200</span>원
                      </p>
                    </div>
                    <img className="w-[16px] h-[18px]" src={bag} alt="bag" />
                  </div>
                  <div className="w-[215px] flex flex-row justify-start mt-[5px]">
                    <div className="w-[40px] h-[18px] rounded-[9px] bg-[#f65c60] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                      세일
                    </div>
                  </div>
                </div>

                <div className="w-[215px] flex flex-col items-center">
                  <div
                    className="w-[215px] h-[215px]"
                    style={{
                      backgroundImage: `url(${goods4})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  ></div>
                  <p className="h-[40px] text-sm w-[200px] break-keep custom-ellipsis mt-[8px]">
                    [흔적미백] 넘버즈인 5번 글루타치온C 흔적 앰플 30ml 기획(+패드 6매 증정)
                  </p>
                  <div className="w-[215px] flex flex-row mt-[5px] justify-between items-center">
                    <div className="flex flex-row items-baseline">
                      <p className="text-sm line-through font-semibold text-[#a9a9a9]">28,000원</p>
                      <p className="text-sm ml-[7px] text-[#e02020] font-semibold">
                        <span className="text-xl">18,200</span>원
                      </p>
                    </div>
                    <img className="w-[16px] h-[18px]" src={bag} alt="bag" />
                  </div>
                  <div className="w-[215px] flex flex-row justify-start mt-[5px]">
                    <div className="w-[40px] h-[18px] rounded-[9px] bg-[#f65c60] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                      세일
                    </div>
                    <div className="w-[60px] h-[18px] rounded-[9px] bg-[#f374b7] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                      오늘드림
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="w-[510px] px-[20px] flex flex-row justify-between">
                <div className="w-[215px] flex flex-col items-center">
                  <div
                    className="w-[215px] h-[215px]"
                    style={{
                      backgroundImage: `url(${goods5})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  ></div>
                  <p className="h-[40px] text-sm w-[215px] break-keep custom-ellipsis mt-[8px]">
                    [수분진정] 이니스프리 그린티 히알루론산 스킨 170ml
                  </p>
                  <div className="w-[215px] flex flex-row mt-[5px] justify-between items-center">
                    <div className="flex flex-row items-baseline">
                      <p className="text-sm line-through font-semibold text-[#a9a9a9]">19,000원</p>
                      <p className="text-sm ml-[7px] text-[#e02020] font-semibold">
                        <span className="text-xl">13,300</span>원
                      </p>
                    </div>
                    <img className="w-[16px] h-[18px]" src={bag} alt="bag" />
                  </div>
                  <div className="w-[215px] flex flex-row justify-start mt-[5px]">
                    <div className="w-[40px] h-[18px] rounded-[9px] bg-[#f65c60] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                      세일
                    </div>
                  </div>
                </div>

                <div className="w-[215px] flex flex-col items-center">
                  <div
                    className="w-[215px] h-[215px] relative"
                    style={{
                      backgroundImage: `url(${goods6})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    <div className="absolute top-0 left-0 w-[80px] h-[28px] bg-[#ff5753] text-[#fff] text-sm font-bold flex justify-center items-center gap-1 rounded-br">
                      <img className="w-[14px]" src={timer} alt="timer" />
                      00:44
                    </div>
                  </div>
                  <p className="h-[40px] text-sm w-[200px] break-keep custom-ellipsis mt-[8px]">
                    [트러블모공] 이니스프리 레티놀 시카 흔적 앰플 30ml 기획 (+15ml)
                  </p>
                  <div className="w-[215px] flex flex-row mt-[5px] justify-between items-center">
                    <div className="flex flex-row items-baseline">
                      <p className="text-sm line-through font-semibold text-[#a9a9a9]">40,000원</p>
                      <p className="text-sm ml-[7px] text-[#e02020] font-semibold">
                        <span className="text-xl">28,000</span>원
                      </p>
                    </div>
                    <img className="w-[16px] h-[18px]" src={bag} alt="bag" />
                  </div>
                  <div className="w-[215px] flex flex-row justify-start mt-[5px]">
                    <div className="w-[40px] h-[18px] rounded-[9px] bg-[#9bce26] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                      쿠폰
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="w-[510px] px-[20px] flex flex-row justify-between">
                <div className="w-[215px] flex flex-col items-center">
                  <div
                    className="w-[215px] h-[215px]"
                    style={{
                      backgroundImage: `url(${goods7})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  ></div>
                  <p className="h-[40px] text-sm w-[215px] break-keep custom-ellipsis mt-[8px]">
                    [단독/더블기획]웰라쥬 리얼 히알루로닉 100 크림 50ml 1+1 기획
                  </p>
                  <div className="w-[215px] flex flex-row mt-[5px] justify-between items-center">
                    <div className="flex flex-row items-baseline">
                      <p className="text-sm line-through font-semibold text-[#a9a9a9]">39,000원</p>
                      <p className="text-sm ml-[7px] text-[#e02020] font-semibold">
                        <span className="text-xl">25,900</span>원
                      </p>
                    </div>
                    <img className="w-[16px] h-[18px]" src={bag} alt="bag" />
                  </div>
                  <div className="w-[215px] flex flex-row justify-start mt-[5px]">
                    <div className="w-[40px] h-[18px] rounded-[9px] bg-[#f65c60] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                      세일
                    </div>
                    <div className="w-[60px] h-[18px] rounded-[9px] bg-[#f374b7] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                      오늘드림
                    </div>
                  </div>
                </div>

                <div className="w-[215px] flex flex-col items-center">
                  <div
                    className="w-[215px] h-[215px]"
                    style={{
                      backgroundImage: `url(${goods8})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  ></div>
                  <p className="h-[40px] text-sm w-[200px] break-keep custom-ellipsis mt-[8px]">
                    [고윤정PICK/한정기획] 구달 청귤 비타C 잡티케어 크림 75ml 기획(+크림 10mlx2ea 증정)
                  </p>
                  <div className="w-[215px] flex flex-row mt-[5px] justify-between items-center">
                    <div className="flex flex-row items-baseline">
                      <p className="text-sm line-through font-semibold text-[#a9a9a9]">28,000원</p>
                      <p className="text-sm ml-[7px] text-[#e02020] font-semibold">
                        <span className="text-xl">22,400</span>원
                      </p>
                    </div>
                    <img className="w-[16px] h-[18px]" src={bag} alt="bag" />
                  </div>
                  <div className="w-[215px] flex flex-row justify-start mt-[5px]">
                    <div className="w-[40px] h-[18px] rounded-[9px] bg-[#f65c60] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                      세일
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="w-[510px] px-[20px] flex flex-row justify-between">
                <div className="w-[215px] flex flex-col items-center">
                  <div
                    className="w-[215px] h-[215px] relative"
                    style={{
                      backgroundImage: `url(${goods9})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    <div className="absolute top-[7px] left-[7px] w-[48px] h-[48px] rounded-full bg-[#fff] border border-[#f05a5e] border-2 text-[#f05a5e] text-sm font-bold flex justify-center items-center">
                      베스트
                    </div>
                  </div>
                  <p className="h-[40px] text-sm w-[215px] break-keep custom-ellipsis mt-[8px]">
                    [1+1+1한정기획/모공탄력] 성분에디터 그린토마토 모공앰플 30ml 1+1+1 트리플기획
                  </p>
                  <div className="w-[215px] flex flex-row mt-[5px] justify-between items-center">
                    <div className="flex flex-row items-baseline">
                      <p className="text-sm line-through font-semibold text-[#a9a9a9]">38,000원</p>
                      <p className="text-sm ml-[7px] text-[#e02020] font-semibold">
                        <span className="text-xl">26,600</span>원
                      </p>
                    </div>
                    <img className="w-[16px] h-[18px]" src={bag} alt="bag" />
                  </div>
                  <div className="w-[215px] flex flex-row justify-start mt-[5px]">
                    <div className="w-[40px] h-[18px] rounded-[9px] bg-[#f65c60] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                      세일
                    </div>
                    <div className="w-[60px] h-[18px] rounded-[9px] bg-[#f374b7] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                      오늘드림
                    </div>
                  </div>
                </div>

                <div className="w-[215px] flex flex-col items-center">
                  <div
                    className="w-[215px] h-[215px]"
                    style={{
                      backgroundImage: `url(${goods10})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  ></div>
                  <p className="h-[40px] text-sm w-[200px] break-keep custom-ellipsis mt-[8px]">
                    [1+1+증정]닥터지 레드 블레미쉬 바쿠치올 포어젯 세럼 30ml 리필 기획 (+크림 10ml)
                  </p>
                  <div className="w-[215px] flex flex-row mt-[5px] justify-between items-center">
                    <div className="flex flex-row items-baseline">
                      <p className="text-sm line-through font-semibold text-[#a9a9a9]">60,000원</p>
                      <p className="text-sm ml-[7px] text-[#e02020] font-semibold">
                        <span className="text-xl">25,420</span>원
                      </p>
                    </div>
                    <img className="w-[16px] h-[18px]" src={bag} alt="bag" />
                  </div>
                  <div className="w-[215px] flex flex-row justify-start mt-[5px]">
                    <div className="w-[40px] h-[18px] rounded-[9px] bg-[#f65c60] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                      세일
                    </div>
                    <div className="w-[40px] h-[18px] rounded-[9px] bg-[#9bce26] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                      쿠폰
                    </div>
                    <div className="w-[60px] h-[18px] rounded-[9px] bg-[#f374b7] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                      오늘드림
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>

        <NextArrow onClick={handleNextClickA} currentSlide={currentSlideA} />
      </div>

      <div>
        <div className="w-[510px] h-[405px] flex flex-col">
          <h1 className="w-[510px] text-left px-[20px] text-2xl font-bold">클론코딩님을 위한 추천 상품</h1>
          <button
            className="w-[510px] px-[20px] text-[15px] text-[#aaa] font-bold flex flex-row justify-end gap-2 items-center mb-[25px]"
            href="*"
          >
            더보기 <img className="w-[7px] h-[11px]" src={more} alt="more" />
          </button>
          <Slider ref={sliderRefB} {...settingsB}>
            <div>
              <div className="w-[510px] px-[20px] flex flex-row justify-between">
                <div className="w-[215px] flex flex-col items-center">
                  <div
                    className="w-[215px] h-[215px]"
                    style={{
                      backgroundImage: `url(${goods11})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  ></div>
                  <p className="h-[40px] text-sm w-[215px] break-keep custom-ellipsis mt-[8px]">
                    [고윤정PICK/한정기획] 구달 청귤 비타C 잡티케어 크림 리필에디션 기획(75ml+75ml리필)
                  </p>
                  <div className="w-[215px] flex flex-row mt-[5px] justify-between items-center">
                    <div className="flex flex-row items-baseline">
                      <p className="text-sm line-through font-semibold text-[#a9a9a9]">30,000원</p>
                      <p className="text-sm ml-[7px] text-[#e02020] font-semibold">
                        <span className="text-xl">24,000</span>원
                      </p>
                    </div>
                    <img className="w-[16px] h-[18px]" src={bag} alt="bag" />
                  </div>
                  <div className="w-[215px] flex flex-row justify-start mt-[5px]">
                    <div className="w-[40px] h-[18px] rounded-[9px] bg-[#f65c60] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                      세일
                    </div>
                    <div className="w-[60px] h-[18px] rounded-[9px] bg-[#f374b7] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                      오늘드림
                    </div>
                  </div>
                </div>

                <div className="w-[215px] flex flex-col items-center">
                  <div
                    className="w-[215px] h-[215px]"
                    style={{
                      backgroundImage: `url(${goods12})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  ></div>
                  <p className="h-[40px] text-sm w-[200px] break-keep custom-ellipsis mt-[8px]">
                    이니스프리 레티놀 시카 흔적 앰플 30mL 기획
                  </p>
                  <div className="w-[215px] flex flex-row mt-[5px] justify-between items-center">
                    <div className="flex flex-row items-baseline">
                      <p className="text-sm ml-[7px] text-[#e02020] font-semibold">
                        <span className="text-xl">40,000</span>원
                      </p>
                    </div>
                    <img className="w-[16px] h-[18px]" src={bag} alt="bag" />
                  </div>
                  <div className="w-[215px] flex flex-row justify-start mt-[5px]">
                    <div className="w-[60px] h-[18px] rounded-[9px] bg-[#f374b7] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                      오늘드림
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="w-[510px] px-[20px] flex flex-row justify-between">
                <div className="w-[215px] flex flex-col items-center">
                  <div
                    className="w-[215px] h-[215px] relative"
                    style={{
                      backgroundImage: `url(${goods13})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    <div className="absolute top-[7px] left-[7px] w-[48px] h-[48px] rounded-full bg-[#fff] border border-[#f05a5e] border-2 text-[#f05a5e] text-sm font-bold flex justify-center items-center">
                      베스트
                    </div>
                  </div>
                  <p className="h-[40px] text-sm w-[215px] break-keep custom-ellipsis mt-[8px]">
                    토리든 다이브인 저분자 히알루론산 수딩크림 더블기획 (100ml+100ml)
                  </p>
                  <div className="w-[215px] flex flex-row mt-[5px] justify-between items-center">
                    <div className="flex flex-row items-baseline">
                      <p className="text-sm line-through font-semibold text-[#a9a9a9]">42,000원</p>
                      <p className="text-sm ml-[7px] text-[#e02020] font-semibold">
                        <span className="text-xl">29,400</span>원
                      </p>
                    </div>
                    <img className="w-[16px] h-[18px]" src={bag} alt="bag" />
                  </div>
                  <div className="w-[215px] flex flex-row justify-start mt-[5px]">
                    <div className="w-[40px] h-[18px] rounded-[9px] bg-[#f65c60] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                      세일
                    </div>
                    <div className="w-[60px] h-[18px] rounded-[9px] bg-[#f374b7] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                      오늘드림
                    </div>
                  </div>
                </div>

                <div className="w-[215px] flex flex-col items-center">
                  <div
                    className="w-[215px] h-[215px]"
                    style={{
                      backgroundImage: `url(${goods14})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  ></div>
                  <p className="h-[40px] text-sm w-[200px] break-keep custom-ellipsis mt-[8px]">
                    이니스프리X쿠로미 비타C 그린티 엔자임 세럼 30mL 기획
                  </p>
                  <div className="w-[215px] flex flex-row mt-[5px] justify-between items-center">
                    <div className="flex flex-row items-baseline">
                      <p className="text-sm line-through font-semibold text-[#a9a9a9]">38,000원</p>
                      <p className="text-sm ml-[7px] text-[#e02020] font-semibold">
                        <span className="text-xl">27,740</span>원
                      </p>
                    </div>
                    <img className="w-[16px] h-[18px]" src={bag} alt="bag" />
                  </div>
                  <div className="w-[215px] flex flex-row justify-start mt-[5px]">
                    <div className="w-[40px] h-[18px] rounded-[9px] bg-[#f65c60] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                      세일
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="w-[510px] px-[20px] flex flex-row justify-between">
                <div className="w-[215px] flex flex-col items-center">
                  <div
                    className="w-[215px] h-[215px] relative"
                    style={{
                      backgroundImage: `url(${goods15})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    <div className="absolute top-[7px] left-[7px] w-[48px] h-[48px] rounded-full bg-[#fff] border border-[#f05a5e] border-2 text-[#f05a5e] text-sm font-bold flex justify-center items-center">
                      베스트
                    </div>
                  </div>
                  <p className="h-[40px] text-sm w-[215px] break-keep custom-ellipsis mt-[8px]">
                    [굿즈증정]닥터지 레드 블레미쉬 클리어 수딩 크림 70ml 1+1 기획
                  </p>
                  <div className="w-[215px] flex flex-row mt-[5px] justify-between items-center">
                    <div className="flex flex-row items-baseline">
                      <p className="text-sm line-through font-semibold text-[#a9a9a9]">38,000원</p>
                      <p className="text-sm ml-[7px] text-[#e02020] font-semibold">
                        <span className="text-xl">27,360</span>원
                      </p>
                    </div>
                    <img className="w-[16px] h-[18px]" src={bag} alt="bag" />
                  </div>
                  <div className="w-[215px] flex flex-row justify-start mt-[5px]">
                    <div className="w-[40px] h-[18px] rounded-[9px] bg-[#f65c60] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                      세일
                    </div>
                    <div className="w-[40px] h-[18px] rounded-[9px] bg-[#9bce26] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                      쿠폰
                    </div>
                    <div className="w-[60px] h-[18px] rounded-[9px] bg-[#f374b7] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                      오늘드림
                    </div>
                  </div>
                </div>

                <div className="w-[215px] flex flex-col items-center">
                  <div
                    className="w-[215px] h-[215px] relative"
                    style={{
                      backgroundImage: `url(${goods16})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    <div className="absolute top-[7px] left-[7px] w-[48px] h-[48px] rounded-full bg-[#fff] border border-[#f05a5e] border-2 text-[#f05a5e] text-sm font-bold flex justify-center items-center">
                      베스트
                    </div>
                  </div>
                  <p className="h-[40px] text-sm w-[200px] break-keep custom-ellipsis mt-[8px]">
                    [이사배PICK] 메디힐 마데카소사이드 흔적 패드 100매+100매+10매 한정기획
                  </p>
                  <div className="w-[215px] flex flex-row mt-[5px] justify-between items-center">
                    <div className="flex flex-row items-baseline">
                      <p className="text-sm line-through font-semibold text-[#a9a9a9]">39,900원</p>
                      <p className="text-sm ml-[7px] text-[#e02020] font-semibold">
                        <span className="text-xl">28,900</span>원
                      </p>
                    </div>
                    <img className="w-[16px] h-[18px]" src={bag} alt="bag" />
                  </div>
                  <div className="w-[215px] flex flex-row justify-start mt-[5px]">
                    <div className="w-[40px] h-[18px] rounded-[9px] bg-[#f65c60] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                      세일
                    </div>
                    <div className="w-[60px] h-[18px] rounded-[9px] bg-[#f374b7] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                      오늘드림
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="w-[510px] px-[20px] flex flex-row justify-between">
                <div className="w-[215px] flex flex-col items-center">
                  <div
                    className="w-[215px] h-[215px] relative"
                    style={{
                      backgroundImage: `url(${goods17})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    <div className="absolute top-[7px] left-[7px] w-[48px] h-[48px] rounded-full bg-[#fff] border border-[#f05a5e] border-2 text-[#f05a5e] text-sm font-bold flex justify-center items-center">
                      베스트
                    </div>
                  </div>
                  <p className="h-[40px] text-sm w-[215px] break-keep custom-ellipsis mt-[8px]">
                    [35관왕] 메디힐 마데카소사이드 흔적 패드 100매 (+100매 더블증정 기획)
                  </p>
                  <div className="w-[215px] flex flex-row mt-[5px] justify-between items-center">
                    <div className="flex flex-row items-baseline">
                      <p className="text-sm line-through font-semibold text-[#a9a9a9]">39,900원</p>
                      <p className="text-sm ml-[7px] text-[#e02020] font-semibold">
                        <span className="text-xl">28,900</span>원
                      </p>
                    </div>
                    <img className="w-[16px] h-[18px]" src={bag} alt="bag" />
                  </div>
                  <div className="w-[215px] flex flex-row justify-start mt-[5px]">
                    <div className="w-[40px] h-[18px] rounded-[9px] bg-[#f65c60] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                      세일
                    </div>
                  </div>
                </div>

                <div className="w-[215px] flex flex-col items-center">
                  <div
                    className="w-[215px] h-[215px]"
                    style={{
                      backgroundImage: `url(${goods18})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  ></div>
                  <p className="h-[40px] text-sm w-[200px] break-keep custom-ellipsis mt-[8px]">
                    [톤업잡티] 이니스프리 비타C 잡티 토닝 세럼 30ml 기획 (+20ml)
                  </p>
                  <div className="w-[215px] flex flex-row mt-[5px] justify-between items-center">
                    <div className="flex flex-row items-baseline">
                      <p className="text-sm line-through font-semibold text-[#a9a9a9]">38,000원</p>
                      <p className="text-sm ml-[7px] text-[#e02020] font-semibold">
                        <span className="text-xl">27,740</span>원
                      </p>
                    </div>
                    <img className="w-[16px] h-[18px]" src={bag} alt="bag" />
                  </div>
                  <div className="w-[215px] flex flex-row justify-start mt-[5px]">
                    <div className="w-[40px] h-[18px] rounded-[9px] bg-[#f65c60] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                      세일
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="w-[510px] px-[20px] flex flex-row justify-between">
                <div className="w-[215px] flex flex-col items-center">
                  <div
                    className="w-[215px] h-[215px] relative"
                    style={{
                      backgroundImage: `url(${goods19})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    <div className="absolute top-[7px] left-[7px] w-[48px] h-[48px] rounded-full bg-[#fff] border border-[#f05a5e] border-2 text-[#f05a5e] text-sm font-bold flex justify-center items-center">
                      베스트
                    </div>
                  </div>
                  <p className="h-[40px] text-sm w-[215px] break-keep custom-ellipsis mt-[8px]">
                    [한정기획] 구달 청귤 비타C 잡티케어 세럼 30ml+31ml 리필 기획
                  </p>
                  <div className="w-[215px] flex flex-row mt-[5px] justify-between items-center">
                    <div className="flex flex-row items-baseline">
                      <p className="text-sm line-through font-semibold text-[#a9a9a9]">28,000원</p>
                      <p className="text-sm ml-[7px] text-[#e02020] font-semibold">
                        <span className="text-xl">22,400</span>원
                      </p>
                    </div>
                    <img className="w-[16px] h-[18px]" src={bag} alt="bag" />
                  </div>
                  <div className="w-[215px] flex flex-row justify-start mt-[5px]">
                    <div className="w-[40px] h-[18px] rounded-[9px] bg-[#f65c60] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                      세일
                    </div>
                  </div>
                </div>

                <div className="w-[215px] flex flex-col items-center">
                  <div
                    className="w-[215px] h-[215px] relative"
                    style={{
                      backgroundImage: `url(${goods20})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    <div className="absolute top-[7px] left-[7px] w-[48px] h-[48px] rounded-full bg-[#fff] border border-[#f05a5e] border-2 text-[#f05a5e] text-sm font-bold flex justify-center items-center">
                      베스트
                    </div>
                  </div>
                  <p className="h-[40px] text-sm w-[200px] break-keep custom-ellipsis mt-[8px]">
                    [고윤정PICK/1+1기획] 구달 맑은 어성초 진정 수분 선크림 50ml+50ml 기획
                  </p>
                  <div className="w-[215px] flex flex-row mt-[5px] justify-between items-center">
                    <div className="flex flex-row items-baseline">
                      <p className="text-sm line-through font-semibold text-[#a9a9a9]">20,000원</p>
                      <p className="text-sm ml-[7px] text-[#e02020] font-semibold">
                        <span className="text-xl">17,500</span>원
                      </p>
                    </div>
                    <img className="w-[16px] h-[18px]" src={bag} alt="bag" />
                  </div>
                  <div className="w-[215px] flex flex-row justify-start mt-[5px]">
                    <div className="w-[40px] h-[18px] rounded-[9px] bg-[#f65c60] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                      세일
                    </div>
                    <div className="w-[60px] h-[18px] rounded-[9px] bg-[#f374b7] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                      오늘드림
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>

        <NextArrow onClick={handleNextClickB} currentSlide={currentSlideB} />
      </div>
    </div>
  );
};

export default MainCarousel;
