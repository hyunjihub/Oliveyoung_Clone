import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/title.css';

import React, { useState } from 'react';

import Slider from 'react-slick';
import arrow from '../resorces/images/prev_next.png';
import heart from '../resorces/images/heart.png';
import taste1 from '../resorces/images/taste1.jpg';
import taste10 from '../resorces/images/taste10.jpg';
import taste11 from '../resorces/images/taste11.jpg';
import taste12 from '../resorces/images/taste12.jpg';
import taste2 from '../resorces/images/taste2.jpg';
import taste3 from '../resorces/images/taste3.jpg';
import taste4 from '../resorces/images/taste4.jpg';
import taste5 from '../resorces/images/taste5.jpg';
import taste6 from '../resorces/images/taste6.jpg';
import taste7 from '../resorces/images/taste7.jpg';
import taste8 from '../resorces/images/taste8.jpg';
import taste9 from '../resorces/images/taste9.jpg';
import timer from '../resorces/images/timer.png';

const PrevArrow = ({ onClick }) => (
  <div className="prev-arrow-taste font-bold" onClick={onClick}>
    &lt;
  </div>
);

const NextArrow = ({ onClick }) => (
  <div className="next-arrow-taste font-bold" onClick={onClick}>
    &gt;
  </div>
);

const Taste = () => {
  const [slider, setSlider] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const [settings, setSettings] = useState({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    draggable: true,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    beforeChange: (current, next) => setActiveSlide(next),
  });

  const customPaging = (i) => (
    <div className={`custom-dot ${i === activeSlide ? 'active' : ''}`} onClick={() => slider.slickGoTo(i)}>
      {i + 1}
    </div>
  );

  return (
    <div className="w-[1020px] mt-[50px] slider-container flex flex-row">
      <div>
        <div className="w-[1020px] flex flex-col">
          <h1 className="w-[1020px] pb-[8px] px-[20px] text-[26px] font-bold text-center mb-[25px] relative border-b">
            이 상품 어때요?
            <div className="custom-dots-container absolute right-0 top-3">
              {Array.from({ length: 3 }).map((_, i) => customPaging(i))}
            </div>
          </h1>

          <Slider ref={(slider) => setSlider(slider)} {...settings}>
            <div>
              <div className="w-[1020px] flex flex-row justify-between">
                <div className="w-[225px] h-[410px] py-[30px] px-[10px] flex flex-col items-center">
                  <div
                    className="w-[215px] h-[215px] relative cursor-pointer"
                    style={{
                      backgroundImage: `url(${taste1})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    <div className="absolute top-0 left-0 w-[59px] h-[28px] bg-[#ff5753] text-[#fff] text-sm font-bold flex justify-center items-center gap-1 rounded-br">
                      <img className="w-[14px]" src={timer} alt="timer" />
                      오특
                    </div>
                    <div
                      className="w-[40px] h-[40px] absolute right-0 bottom-0 bg-[#fff] border cursor-pointer"
                      style={{
                        backgroundImage: `url(${heart})`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                      }}
                    ></div>
                  </div>
                  <strong className="text-sm text-[#777] mt-[10px] cursor-pointer">베뉴먼트</strong>
                  <p className="h-[40px] text-sm w-[215px] break-keep custom-ellipsis mt-[5px] text-center cursor-pointer">
                    [리뷰이벤트] 베뉴먼트 솔리드 퍼퓸 30ml 2종 택 1
                  </p>
                  <div className="w-[215px] flex flex-row mt-[5px] justify-center items-center">
                    <div className="flex flex-row items-baseline">
                      <p className="text-sm line-through font-semibold text-[#a9a9a9]">20,000원~</p>
                      <p className="text-sm ml-[7px] text-[#e02020] font-semibold">
                        <span className="text-xl">17,500</span>원~
                      </p>
                    </div>
                  </div>
                  <div className="w-[215px] flex flex-row justify-center mt-[5px]">
                    <div className="w-[40px] h-[18px] rounded-[9px] bg-[#f65c60] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                      세일
                    </div>
                    <div className="w-[60px] h-[18px] rounded-[9px] bg-[#f374b7] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                      오늘드림
                    </div>
                    <div className="w-[40px] h-[18px] rounded-[9px] bg-[#6fcff7] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                      증정
                    </div>
                  </div>
                </div>

                <div className="w-[225px] h-[410px] py-[30px] px-[10px] flex flex-col items-center">
                  <div
                    className="w-[215px] h-[215px] relative cursor-pointer"
                    style={{
                      backgroundImage: `url(${taste2})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    <div className="absolute top-0 left-0 w-[59px] h-[28px] bg-[#ff5753] text-[#fff] text-sm font-bold flex justify-center items-center gap-1 rounded-br">
                      <img className="w-[14px]" src={timer} alt="timer" />
                      오특
                    </div>
                    <div
                      className="w-[40px] h-[40px] absolute right-0 bottom-0 bg-[#fff] border cursor-pointer"
                      style={{
                        backgroundImage: `url(${heart})`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                      }}
                    ></div>
                  </div>
                  <strong className="text-sm text-[#777] mt-[10px] cursor-pointer">아누아</strong>
                  <p className="h-[40px] text-sm w-[215px] break-keep custom-ellipsis mt-[5px] text-center cursor-pointer">
                    [6/12단하루특가] 아누아 어성초 77 수딩 토너 350ml 리필 기획세트(350ml+350ml리필)
                  </p>
                  <div className="w-[215px] flex flex-row mt-[5px] justify-center items-center">
                    <div className="flex flex-row items-baseline">
                      <p className="text-sm line-through font-semibold text-[#a9a9a9]">49,000원</p>
                      <p className="text-sm ml-[7px] text-[#e02020] font-semibold">
                        <span className="text-xl">31,000</span>원
                      </p>
                    </div>
                  </div>
                  <div className="w-[215px] flex flex-row justify-center mt-[5px]">
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

                <div className="w-[225px] h-[410px] py-[30px] px-[10px] flex flex-col items-center">
                  <div
                    className="w-[215px] h-[215px] relative cursor-pointer"
                    style={{
                      backgroundImage: `url(${taste3})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    <div className="absolute top-[7px] left-[7px] w-[48px] h-[48px] rounded-full bg-[#fff] border border-[#f05a5e] border-2 text-[#f05a5e] text-sm font-bold flex justify-center items-center">
                      베스트
                    </div>
                    <div
                      className="w-[40px] h-[40px] absolute right-0 bottom-0 bg-[#fff] border cursor-pointer"
                      style={{
                        backgroundImage: `url(${heart})`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                      }}
                    ></div>
                  </div>
                  <strong className="text-sm text-[#777] mt-[10px] cursor-pointer">어노브</strong>
                  <p className="h-[40px] text-sm w-[215px] break-keep custom-ellipsis mt-[5px] text-center cursor-pointer">
                    [6월 올영픽/헤어케어 1위] 어노브 대용량 딥 데미지 트리트먼트 EX 더블/듀오 기획 4종
                    택1(텐더블룸/웜페탈)
                  </p>
                  <div className="w-[215px] flex flex-row mt-[5px] justify-center items-center">
                    <div className="flex flex-row items-baseline">
                      <p className="text-sm line-through font-semibold text-[#a9a9a9]">42,000원~</p>
                      <p className="text-sm ml-[7px] text-[#e02020] font-semibold">
                        <span className="text-xl">29,800</span>원~
                      </p>
                    </div>
                  </div>
                  <div className="w-[215px] flex flex-row justify-center mt-[5px]">
                    <div className="w-[40px] h-[18px] rounded-[9px] bg-[#f65c60] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                      세일
                    </div>
                    <div className="w-[60px] h-[18px] rounded-[9px] bg-[#f374b7] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                      오늘드림
                    </div>
                  </div>
                </div>

                <div className="w-[225px] h-[410px] py-[30px] px-[10px] flex flex-col items-center">
                  <div
                    className="w-[215px] h-[215px] relative cursor-pointer"
                    style={{
                      backgroundImage: `url(${taste4})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    <div className="absolute top-[7px] left-[7px] w-[48px] h-[48px] rounded-full bg-[#fff] border border-[#f05a5e] border-2 text-[#f05a5e] text-sm font-bold flex justify-center items-center">
                      베스트
                    </div>
                    <div
                      className="w-[40px] h-[40px] absolute right-0 bottom-0 bg-[#fff] border cursor-pointer"
                      style={{
                        backgroundImage: `url(${heart})`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                      }}
                    ></div>
                  </div>
                  <strong className="text-sm text-[#777] mt-[10px] cursor-pointer">더샘</strong>
                  <p className="h-[40px] text-sm w-[215px] break-keep custom-ellipsis mt-[5px] text-center cursor-pointer">
                    [신규4종 런칭] 더샘 내추럴 마스크팩 1매 (10종 중 택1)
                  </p>
                  <div className="w-[215px] flex flex-row mt-[5px] justify-center items-center">
                    <div className="flex flex-row items-baseline">
                      <p className="text-sm line-through font-semibold text-[#a9a9a9]">1,000원</p>
                      <p className="text-sm ml-[7px] text-[#e02020] font-semibold">
                        <span className="text-xl">500</span>원~
                      </p>
                    </div>
                  </div>
                  <div className="w-[215px] flex flex-row justify-center mt-[5px]">
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
              <div className="w-[1020px] flex flex-row justify-between">
                <div className="w-[225px] h-[410px] py-[30px] px-[10px] flex flex-col items-center">
                  <div
                    className="w-[215px] h-[215px] relative cursor-pointer"
                    style={{
                      backgroundImage: `url(${taste8})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    <div className="absolute top-[7px] left-[7px] w-[48px] h-[48px] rounded-full bg-[#fff] border border-[#f05a5e] border-2 text-[#f05a5e] text-sm font-bold flex justify-center items-center">
                      베스트
                    </div>
                    <div
                      className="w-[40px] h-[40px] absolute right-0 bottom-0 bg-[#fff] border cursor-pointer"
                      style={{
                        backgroundImage: `url(${heart})`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                      }}
                    ></div>
                  </div>
                  <strong className="text-sm text-[#777] mt-[10px] cursor-pointer">딜라이트 프로젝트</strong>
                  <p className="h-[40px] text-sm w-[215px] break-keep custom-ellipsis mt-[5px] text-center cursor-pointer">
                    딜라이트 프로젝트 프로틴 베이커리칩 2종 택1
                  </p>
                  <div className="w-[215px] flex flex-row mt-[5px] justify-center items-center">
                    <div className="flex flex-row items-baseline">
                      <p className="text-sm ml-[7px] text-[#e02020] font-semibold">
                        <span className="text-xl">2,800</span>원~
                      </p>
                    </div>
                  </div>
                  <div className="w-[215px] flex flex-row justify-center mt-[5px]">
                    <div className="w-[40px] h-[18px] rounded-[9px] bg-[#ff8942] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                      2+1
                    </div>
                    <div className="w-[60px] h-[18px] rounded-[9px] bg-[#f374b7] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                      오늘드림
                    </div>
                  </div>
                </div>

                <div className="w-[225px] h-[410px] py-[30px] px-[10px] flex flex-col items-center">
                  <div
                    className="w-[215px] h-[215px] relative cursor-pointer"
                    style={{
                      backgroundImage: `url(${taste5})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    <div className="absolute top-[7px] left-[7px] w-[48px] h-[48px] rounded-full bg-[#fff] border border-[#f05a5e] border-2 text-[#f05a5e] text-sm font-bold flex justify-center items-center">
                      베스트
                    </div>
                    <div
                      className="w-[40px] h-[40px] absolute right-0 bottom-0 bg-[#fff] border cursor-pointer"
                      style={{
                        backgroundImage: `url(${heart})`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                      }}
                    ></div>
                  </div>
                  <strong className="text-sm text-[#777] mt-[10px] cursor-pointer">라운드랩</strong>
                  <p className="h-[40px] text-sm w-[215px] break-keep custom-ellipsis mt-[5px] text-center cursor-pointer">
                    [6월 올영픽] 라운드랩 자작나무 수분 선크림 50ml 1+1 기획 (+20ml)
                  </p>
                  <div className="w-[215px] flex flex-row mt-[5px] justify-center items-center">
                    <div className="flex flex-row items-baseline">
                      <p className="text-sm line-through font-semibold text-[#a9a9a9]">25,000원</p>
                      <p className="text-sm ml-[7px] text-[#e02020] font-semibold">
                        <span className="text-xl">23,900</span>원
                      </p>
                    </div>
                  </div>
                  <div className="w-[215px] flex flex-row justify-center mt-[5px]">
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

                <div className="w-[225px] h-[410px] py-[30px] px-[10px] flex flex-col items-center">
                  <div
                    className="w-[215px] h-[215px] relative cursor-pointer"
                    style={{
                      backgroundImage: `url(${taste6})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    <div className="absolute top-[7px] left-[7px] w-[48px] h-[48px] rounded-full bg-[#fff] border border-[#f05a5e] border-2 text-[#f05a5e] text-sm font-bold flex justify-center items-center">
                      베스트
                    </div>
                    <div
                      className="w-[40px] h-[40px] absolute right-0 bottom-0 bg-[#fff] border cursor-pointer"
                      style={{
                        backgroundImage: `url(${heart})`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                      }}
                    ></div>
                  </div>
                  <strong className="text-sm text-[#777] mt-[10px] cursor-pointer">한율</strong>
                  <p className="h-[40px] text-sm w-[215px] break-keep custom-ellipsis mt-[5px] text-center cursor-pointer">
                    [이슬로콜라보 한정판] 한율 어린쑥 수분진정 크림 55ml 1+1 기획 (+패드2매+띠부씰6종) (이슬로)
                  </p>
                  <div className="w-[215px] flex flex-row mt-[5px] justify-center items-center">
                    <div className="flex flex-row items-baseline">
                      <p className="text-sm line-through font-semibold text-[#a9a9a9]">38,000원</p>
                      <p className="text-sm ml-[7px] text-[#e02020] font-semibold">
                        <span className="text-xl">28,200</span>원~
                      </p>
                    </div>
                  </div>
                  <div className="w-[215px] flex flex-row justify-center mt-[5px]">
                    <div className="w-[40px] h-[18px] rounded-[9px] bg-[#9bce26] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                      쿠폰
                    </div>
                    <div className="w-[60px] h-[18px] rounded-[9px] bg-[#f374b7] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                      오늘드림
                    </div>
                  </div>
                </div>

                <div className="w-[225px] h-[410px] py-[30px] px-[10px] flex flex-col items-center">
                  <div
                    className="w-[215px] h-[215px] relative cursor-pointer"
                    style={{
                      backgroundImage: `url(${taste7})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    <div className="absolute top-[7px] left-[7px] w-[48px] h-[48px] rounded-full bg-[#fff] border border-[#f05a5e] border-2 text-[#f05a5e] text-sm font-bold flex justify-center items-center">
                      베스트
                    </div>
                    <div
                      className="w-[40px] h-[40px] absolute right-0 bottom-0 bg-[#fff] border cursor-pointer"
                      style={{
                        backgroundImage: `url(${heart})`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                      }}
                    ></div>
                  </div>
                  <strong className="text-sm text-[#777] mt-[10px] cursor-pointer">퓌</strong>
                  <p className="h-[40px] text-sm w-[215px] break-keep custom-ellipsis mt-[5px] text-center cursor-pointer">
                    [6월 올영픽/한정기획] 퓌 립앤치크 블러리 푸딩팟 증정 기획(+팬던트키링)
                  </p>
                  <div className="w-[215px] flex flex-row mt-[5px] justify-center items-center">
                    <div className="flex flex-row items-baseline">
                      <p className="text-sm line-through font-semibold text-[#a9a9a9]">22,000원</p>
                      <p className="text-sm ml-[7px] text-[#e02020] font-semibold">
                        <span className="text-xl">15,400</span>원~
                      </p>
                    </div>
                  </div>
                  <div className="w-[215px] flex flex-row justify-center mt-[5px]">
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
              <div className="w-[1020px] flex flex-row justify-between">
                <div className="w-[225px] h-[410px] py-[30px] px-[10px] flex flex-col items-center">
                  <div
                    className="w-[215px] h-[215px] relative cursor-pointer"
                    style={{
                      backgroundImage: `url(${taste9})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    <div className="absolute top-[7px] left-[7px] w-[48px] h-[48px] rounded-full bg-[#fff] border border-[#f05a5e] border-2 text-[#f05a5e] text-sm font-bold flex justify-center items-center">
                      베스트
                    </div>
                    <div
                      className="w-[40px] h-[40px] absolute right-0 bottom-0 bg-[#fff] border cursor-pointer"
                      style={{
                        backgroundImage: `url(${heart})`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                      }}
                    ></div>
                  </div>
                  <strong className="text-sm text-[#777] mt-[10px] cursor-pointer">메디힐</strong>
                  <p className="h-[40px] text-sm w-[215px] break-keep custom-ellipsis mt-[5px] text-center cursor-pointer">
                    [6년연속1위] 메디힐 에센셜 마스크팩 1매 6종 택1
                  </p>
                  <div className="w-[215px] flex flex-row mt-[5px] justify-center items-center">
                    <div className="flex flex-row items-baseline">
                      <p className="text-sm line-through font-semibold text-[#a9a9a9]">2,000원</p>
                      <p className="text-sm ml-[7px] text-[#e02020] font-semibold">
                        <span className="text-xl">1,000</span>원~
                      </p>
                    </div>
                  </div>
                  <div className="w-[215px] flex flex-row justify-center mt-[5px]">
                    <div className="w-[40px] h-[18px] rounded-[9px] bg-[#f65c60] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                      세일
                    </div>
                    <div className="w-[60px] h-[18px] rounded-[9px] bg-[#f374b7] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                      오늘드림
                    </div>
                  </div>
                </div>

                <div className="w-[225px] h-[410px] py-[30px] px-[10px] flex flex-col items-center">
                  <div
                    className="w-[215px] h-[215px] relative cursor-pointer"
                    style={{
                      backgroundImage: `url(${taste10})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    <div className="absolute top-[7px] left-[7px] w-[48px] h-[48px] rounded-full bg-[#fff] border border-[#f05a5e] border-2 text-[#f05a5e] text-sm font-bold flex justify-center items-center">
                      베스트
                    </div>
                    <div
                      className="w-[40px] h-[40px] absolute right-0 bottom-0 bg-[#fff] border cursor-pointer"
                      style={{
                        backgroundImage: `url(${heart})`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                      }}
                    ></div>
                  </div>
                  <strong className="text-sm text-[#777] mt-[10px] cursor-pointer">메디힐</strong>
                  <p className="h-[40px] text-sm w-[215px] break-keep custom-ellipsis mt-[5px] text-center cursor-pointer">
                    [한정수량 스페셜 증정] 메디힐 더마 모델링 팩 풀패키지 3종 택1(티트리/마데카소사이드/히알루론산)
                  </p>
                  <div className="w-[215px] flex flex-row mt-[5px] justify-center items-center">
                    <div className="flex flex-row items-baseline">
                      <p className="text-sm line-through font-semibold text-[#a9a9a9]">5,000원</p>
                      <p className="text-sm ml-[7px] text-[#e02020] font-semibold">
                        <span className="text-xl">3,400</span>원~
                      </p>
                    </div>
                  </div>
                  <div className="w-[215px] flex flex-row justify-center mt-[5px]">
                    <div className="w-[40px] h-[18px] rounded-[9px] bg-[#f65c60] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                      세일
                    </div>
                    <div className="w-[60px] h-[18px] rounded-[9px] bg-[#f374b7] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                      오늘드림
                    </div>
                  </div>
                </div>

                <div className="w-[225px] h-[410px] py-[30px] px-[10px] flex flex-col items-center">
                  <div
                    className="w-[215px] h-[215px] relative cursor-pointer"
                    style={{
                      backgroundImage: `url(${taste11})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    <div className="absolute top-[7px] left-[7px] w-[48px] h-[48px] rounded-full bg-[#fff] border border-[#f05a5e] border-2 text-[#f05a5e] text-sm font-bold flex justify-center items-center">
                      베스트
                    </div>
                    <div
                      className="w-[40px] h-[40px] absolute right-0 bottom-0 bg-[#fff] border cursor-pointer"
                      style={{
                        backgroundImage: `url(${heart})`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                      }}
                    ></div>
                  </div>
                  <strong className="text-sm text-[#777] mt-[10px] cursor-pointer">딜라이트 프로젝트</strong>
                  <p className="h-[40px] text-sm w-[215px] break-keep custom-ellipsis mt-[5px] text-center cursor-pointer">
                    딜라이트 프로젝트 베이글칩 6종 택1
                  </p>
                  <div className="w-[215px] flex flex-row mt-[5px] justify-center items-center">
                    <div className="flex flex-row items-baseline">
                      <p className="text-sm ml-[7px] text-[#e02020] font-semibold">
                        <span className="text-xl">2,700</span>원~
                      </p>
                    </div>
                  </div>
                  <div className="w-[215px] flex flex-row justify-center mt-[5px]">
                    <div className="w-[40px] h-[18px] rounded-[9px] bg-[#ff8942] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                      2+1
                    </div>
                    <div className="w-[60px] h-[18px] rounded-[9px] bg-[#f374b7] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                      오늘드림
                    </div>
                  </div>
                </div>

                <div className="w-[225px] h-[410px] py-[30px] px-[10px] flex flex-col items-center">
                  <div
                    className="w-[215px] h-[215px] relative cursor-pointer"
                    style={{
                      backgroundImage: `url(${taste12})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    <div className="absolute top-[7px] left-[7px] w-[48px] h-[48px] rounded-full bg-[#fff] border border-[#f05a5e] border-2 text-[#f05a5e] text-sm font-bold flex justify-center items-center">
                      베스트
                    </div>
                    <div
                      className="w-[40px] h-[40px] absolute right-0 bottom-0 bg-[#fff] border cursor-pointer"
                      style={{
                        backgroundImage: `url(${heart})`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                      }}
                    ></div>
                  </div>
                  <strong className="text-sm text-[#777] mt-[10px] cursor-pointer">메디힐</strong>
                  <p className="h-[40px] text-sm w-[215px] break-keep custom-ellipsis mt-[5px] text-center cursor-pointer">
                    [한정기획] 메디힐 패드 100매+100매(+10매) 더블기획 6종 택1
                  </p>
                  <div className="w-[215px] flex flex-row mt-[5px] justify-center items-center">
                    <div className="flex flex-row items-baseline">
                      <p className="text-sm line-through font-semibold text-[#a9a9a9]">39,900원</p>
                      <p className="text-sm ml-[7px] text-[#e02020] font-semibold">
                        <span className="text-xl">28,900</span>원~
                      </p>
                    </div>
                  </div>
                  <div className="w-[215px] flex flex-row justify-center mt-[5px]">
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
      </div>
    </div>
  );
};

export default Taste;
