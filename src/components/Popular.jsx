import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/title.css';

import React, { useEffect, useRef, useState } from 'react';

import Slider from 'react-slick';
import goods1 from '../resorces/images/popular1.jpg';
import goods10 from '../resorces/images/popular10.jpg';
import goods2 from '../resorces/images/popular2.jpg';
import goods3 from '../resorces/images/popular3.jpg';
import goods4 from '../resorces/images/popular4.jpg';
import goods5 from '../resorces/images/popular5.jpg';
import goods6 from '../resorces/images/popular6.jpg';
import goods7 from '../resorces/images/popular7.jpg';
import goods8 from '../resorces/images/popular8.jpg';
import goods9 from '../resorces/images/popular9.jpg';
import refresh from '../resorces/images/refresh.png';
import view from '../resorces/images/view.png';

const Popular = () => {
  const sliderWrapper = useRef(null);
  const sliderA = useRef(null);
  const sliderB = useRef(null);
  const [activeSlideA, setActiveSlideA] = useState(0);
  const [activeSlideB, setActiveSlideB] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (sliderA.current) {
      sliderA.current.slickPlay();
    }
  }, []);

  const settingsWrapper = {
    dots: false,
    infinite: false,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    vertical: true,
    beforeChange: (current, next) => setActiveSlide(next),
  };

  const customPaging = (i) => (
    <div
      className={`custom-dot ${i === activeSlide ? 'active' : ''}`}
      onClick={() => sliderWrapper.current.slickGoTo(i)}
    >
      {i + 1}
    </div>
  );

  const settingsA = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    vertical: true,
    beforeChange: (current, next) => setActiveSlideA(next),
    afterChange: (current) => {
      if (current === 4) {
        setTimeout(() => {
          if (sliderWrapper.current && sliderB.current) {
            sliderWrapper.current.slickGoTo(1); // Slider B로 이동
            sliderB.current.slickGoTo(0);
            sliderB.current.slickPlay();
          }
        }, 4000);
      }
    },
  };

  const settingsB = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    vertical: true,
    beforeChange: (current, next) => setActiveSlideB(next),
    afterChange: (current) => {
      if (current === 4) {
        setTimeout(() => {
          if (sliderWrapper.current && sliderA.current) {
            sliderWrapper.current.slickGoTo(0); // Slider A로 이동
            sliderA.current.slickGoTo(0);
            sliderA.current.slickPlay();
          }
        }, 4000);
      }
    },
  };

  return (
    <div>
      <h1 className="w-[1020px] pb-[8px] px-[20px] text-[26px] font-bold text-center mb-[5px] mt-[40px] relative">
        조회 급상승, 인기템
        <p className="w-[100px] h-[17px] flex gap-1 text-[#666] text-sm absolute right-[32px] top-[15px] font-normal cursor-pointer">
          <img src={refresh} alt="refresh" />
          업데이트
        </p>
        <div className="custom-dots-container absolute right-0 top-3">
          {Array.from({ length: 2 }).map((_, i) => customPaging(i))}
        </div>
      </h1>

      <div className="w-[1020px] h-[236px] border-y flex flex-row">
        <Slider ref={sliderWrapper} {...settingsWrapper}>
          <div>
            <div className="w-[1000px] h-[230px] px-[20px] flex flex-row justify-between items-center">
              <div className="w-[440px]">
                <Slider ref={sliderA} {...settingsA}>
                  <div>
                    <div className="w-[430px] flex flex-row justify-between">
                      <div
                        className="w-[175px] h-[175px] relative cursor-pointer"
                        style={{
                          backgroundImage: `url(${goods1})`,
                          backgroundPosition: 'center',
                          backgroundSize: 'cover',
                          backgroundRepeat: 'no-repeat',
                        }}
                      ></div>
                      <div className="w-[235px] flex flex-col">
                        <div className="w-[235px] flex flex-row items-center gap-1">
                          <img className="w-[18px]" src={view} alt="view" />
                          <p className="text-[#f27370] text-[13px] mt-[4px]">
                            <strong>4,057</strong>명이 보고있어요
                          </p>
                        </div>
                        <strong className="w-[235px] text-[#777] font-bold text-sm">닥터방기원</strong>
                        <p className="h-[40px] text-sm w-[235px] break-keep custom-ellipsis mt-[5px] cursor-pointer">
                          [지성 두피] 닥터방기원 댄드러프 샴푸 EX 탈모 케어 샴푸 (비듬/기름기 제거)
                        </p>
                        <div className="w-[235px] flex flex-col mt-[5px]">
                          <div className="flex flex-col items-baseline">
                            <p className="text-xs line-through font-semibold text-[#a9a9a9]">17,900원</p>
                            <p className="text-sm text-[#e02020] font-semibold">
                              <span className="text-xl">12,530</span>원
                            </p>
                          </div>
                        </div>
                        <div className="w-[235px] flex flex-row mt-[5px]">
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
                    <div className="w-[430px] flex flex-row justify-between">
                      <div
                        className="w-[175px] h-[175px] relative cursor-pointer"
                        style={{
                          backgroundImage: `url(${goods2})`,
                          backgroundPosition: 'center',
                          backgroundSize: 'cover',
                          backgroundRepeat: 'no-repeat',
                        }}
                      ></div>
                      <div className="w-[235px] flex flex-col">
                        <div className="w-[235px] flex flex-row items-center gap-1">
                          <img className="w-[18px]" src={view} alt="view" />
                          <p className="text-[#f27370] text-[13px] mt-[4px]">
                            <strong>3,754</strong>명이 보고있어요
                          </p>
                        </div>
                        <strong className="w-[235px] text-[#777] font-bold text-sm">에센허브</strong>
                        <p className="h-[40px] text-sm w-[235px] break-keep custom-ellipsis mt-[5px] cursor-pointer">
                          [인씨PICK] 에센허브 티트리 100 오일 10ml 기획(+크림10ml+면봉 50P 증정)
                        </p>
                        <div className="w-[235px] flex flex-col mt-[5px]">
                          <div className="flex flex-col items-baseline">
                            <p className="text-sm text-[#e02020] font-semibold">
                              <span className="text-xl">19,800</span>원
                            </p>
                          </div>
                        </div>
                        <div className="w-[235px] flex flex-row mt-[5px]">
                          <div className="w-[60px] h-[18px] rounded-[9px] bg-[#f374b7] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                            오늘드림
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="w-[430px] flex flex-row justify-between">
                      <div
                        className="w-[175px] h-[175px] relative cursor-pointer"
                        style={{
                          backgroundImage: `url(${goods3})`,
                          backgroundPosition: 'center',
                          backgroundSize: 'cover',
                          backgroundRepeat: 'no-repeat',
                        }}
                      ></div>
                      <div className="w-[235px] flex flex-col">
                        <div className="w-[235px] flex flex-row items-center gap-1">
                          <img className="w-[18px]" src={view} alt="view" />
                          <p className="text-[#f27370] text-[13px] mt-[4px]">
                            <strong>2,825</strong>명이 보고있어요
                          </p>
                        </div>
                        <strong className="w-[235px] text-[#777] font-bold text-sm">어뮤즈</strong>
                        <p className="h-[40px] text-sm w-[235px] break-keep custom-ellipsis mt-[5px] cursor-pointer">
                          [NEW/단독기획] 어뮤즈 듀 틴트 기획/단품
                        </p>
                        <div className="w-[235px] flex flex-col mt-[5px]">
                          <div className="flex flex-col items-baseline">
                            <p className="text-xs line-through font-semibold text-[#a9a9a9]">20,000원</p>
                            <p className="text-sm text-[#e02020] font-semibold">
                              <span className="text-xl">16,000</span>원~
                            </p>
                          </div>
                        </div>
                        <div className="w-[235px] flex flex-row mt-[5px]">
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

                  <div>
                    <div className="w-[430px] flex flex-row justify-between">
                      <div
                        className="w-[175px] h-[175px] relative cursor-pointer"
                        style={{
                          backgroundImage: `url(${goods4})`,
                          backgroundPosition: 'center',
                          backgroundSize: 'cover',
                          backgroundRepeat: 'no-repeat',
                        }}
                      ></div>
                      <div className="w-[235px] flex flex-col">
                        <div className="w-[235px] flex flex-row items-center gap-1">
                          <img className="w-[18px]" src={view} alt="view" />
                          <p className="text-[#f27370] text-[13px] mt-[4px]">
                            <strong>2,756</strong>명이 보고있어요
                          </p>
                        </div>
                        <strong className="w-[235px] text-[#777] font-bold text-sm">애프터블로우</strong>
                        <p className="h-[40px] text-sm w-[235px] break-keep custom-ellipsis mt-[5px] cursor-pointer">
                          [뽐니PICK] 애프터블로우 솔리드/오 드 퍼퓸 중 택1 (단품/기획)
                        </p>
                        <div className="w-[235px] flex flex-col mt-[5px]">
                          <div className="flex flex-col items-baseline">
                            <p className="text-xs line-through font-semibold text-[#a9a9a9]">36,000원</p>
                            <p className="text-sm text-[#e02020] font-semibold">
                              <span className="text-xl">28,800</span>원~
                            </p>
                          </div>
                        </div>
                        <div className="w-[235px] flex flex-row mt-[5px]">
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
                    <div className="w-[430px] flex flex-row justify-between">
                      <div
                        className="w-[175px] h-[175px] relative cursor-pointer"
                        style={{
                          backgroundImage: `url(${goods5})`,
                          backgroundPosition: 'center',
                          backgroundSize: 'cover',
                          backgroundRepeat: 'no-repeat',
                        }}
                      ></div>
                      <div className="w-[235px] flex flex-col">
                        <div className="w-[235px] flex flex-row items-center gap-1">
                          <img className="w-[18px]" src={view} alt="view" />
                          <p className="text-[#f27370] text-[13px] mt-[4px]">
                            <strong>2,756</strong>명이 보고있어요
                          </p>
                        </div>
                        <strong className="w-[235px] text-[#777] font-bold text-sm">존슨즈</strong>
                        <p className="h-[40px] text-sm w-[235px] break-keep custom-ellipsis mt-[5px] cursor-pointer">
                          [신제품/1+1] 존슨즈 코튼터치 페이스 앤 바디로션 500ml
                        </p>
                        <div className="w-[235px] flex flex-col mt-[5px]">
                          <div className="flex flex-col items-baseline">
                            <p className="text-xs line-through font-semibold text-[#a9a9a9]">20,900원</p>
                            <p className="text-sm text-[#e02020] font-semibold">
                              <span className="text-xl">20,800</span>원
                            </p>
                          </div>
                        </div>
                        <div className="w-[235px] flex flex-row mt-[5px]">
                          <div className="w-[40px] h-[18px] rounded-[9px] bg-[#ff8942] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                            1+1
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
              <div className="w-[488px]">
                <ul className="w-[488px] h-[200px] flex flex-col items-center">
                  <li
                    className={`w-[488px] h-[40px] flex flex-row items-center gap-2 px-[20px] ${
                      activeSlideA === 0 ? 'border border-[#000] rounded-md' : ''
                    }`}
                  >
                    <p className={`text-lg ${activeSlideA === 0 ? 'text-[#333]' : 'text-[#999]'}`}>1</p>
                    <p
                      className={`text-sm w-[90%] break-keep custom-ellipsis cursor-pointer text-nowrap ${
                        activeSlideA === 0 ? 'text-[#333]' : 'text-[#999]'
                      }`}
                    >
                      [지성 두피] 닥터방기원 댄드러프 샴푸 EX 탈모 케어 샴푸 (비듬/기름기 제거)
                    </p>
                  </li>
                  <li
                    className={`w-[488px] h-[40px] flex flex-row items-center gap-2 px-[20px] ${
                      activeSlideA === 1 ? 'border border-[#000] rounded-md' : ''
                    }`}
                  >
                    <p className={`text-lg ${activeSlideA === 1 ? 'text-[#333]' : 'text-[#999]'}`}>2</p>
                    <p
                      className={`text-sm w-[90%] break-keep custom-ellipsis cursor-pointer text-nowrap ${
                        activeSlideA === 1 ? 'text-[#333]' : 'text-[#999]'
                      }`}
                    >
                      [인씨PICK] 에센허브 티트리 100 오일 10ml 기획(+크림10ml+면봉 50P 증정)
                    </p>
                  </li>
                  <li
                    className={`w-[488px] h-[40px] flex flex-row items-center gap-2 px-[20px] ${
                      activeSlideA === 2 ? 'border border-[#000] rounded-md' : ''
                    }`}
                  >
                    <p className={`text-lg ${activeSlideA === 2 ? 'text-[#333]' : 'text-[#999]'}`}>3</p>
                    <p
                      className={`text-sm w-[90%] break-keep custom-ellipsis cursor-pointer text-nowrap ${
                        activeSlideA === 2 ? 'text-[#333]' : 'text-[#999]'
                      }`}
                    >
                      [NEW/단독기획] 어뮤즈 듀 틴트 기획/단품
                    </p>
                  </li>
                  <li
                    className={`w-[488px] h-[40px] flex flex-row items-center gap-2 px-[20px] ${
                      activeSlideA === 3 ? 'border border-[#333] rounded-md' : ''
                    }`}
                  >
                    <p className={`text-lg ${activeSlideA === 3 ? 'text-[#000]' : 'text-[#999]'}`}>4</p>
                    <p
                      className={`text-sm w-[90%] break-keep custom-ellipsis cursor-pointer text-nowrap ${
                        activeSlideA === 3 ? 'text-[#333]' : 'text-[#999]'
                      }`}
                    >
                      [뽐니PICK] 애프터블로우 솔리드/오 드 퍼퓸 중 택1 (단품/기획)
                    </p>
                  </li>
                  <li
                    className={`w-[488px] h-[40px] flex flex-row items-center gap-2 px-[20px] ${
                      activeSlideA === 4 ? 'border border-[#000] rounded-md' : ''
                    }`}
                  >
                    <p className={`text-lg ${activeSlideA === 4 ? 'text-[#333]' : 'text-[#999]'}`}>5</p>
                    <p
                      className={`text-sm w-[90%] break-keep custom-ellipsis cursor-pointer text-nowrap ${
                        activeSlideA === 4 ? 'text-[#333]' : 'text-[#999]'
                      }`}
                    >
                      [신제품/1+1] 존슨즈 코튼터치 페이스 앤 바디로션 500ml
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <div className="w-[1000px] h-[230px] px-[20px] flex flex-row justify-between items-center">
              <div className="w-[440px]">
                <Slider ref={sliderB} {...settingsB}>
                  <div>
                    <div className="w-[430px] flex flex-row justify-between">
                      <div
                        className="w-[175px] h-[175px] relative cursor-pointer"
                        style={{
                          backgroundImage: `url(${goods6})`,
                          backgroundPosition: 'center',
                          backgroundSize: 'cover',
                          backgroundRepeat: 'no-repeat',
                        }}
                      ></div>
                      <div className="w-[235px] flex flex-col">
                        <div className="w-[235px] flex flex-row items-center gap-1">
                          <img className="w-[18px]" src={view} alt="view" />
                          <p className="text-[#f27370] text-[13px] mt-[4px]">
                            <strong>717</strong>명이 보고있어요
                          </p>
                        </div>
                        <strong className="w-[235px] text-[#777] font-bold text-sm">퓌</strong>
                        <p className="h-[40px] text-sm w-[235px] break-keep custom-ellipsis mt-[5px] cursor-pointer">
                          [6월 올영픽/한정기획] 퓌 립앤치크 블러리 푸딩팟 증정 기획(+팬던트키링)
                        </p>
                        <div className="w-[235px] flex flex-col mt-[5px]">
                          <div className="flex flex-col items-baseline">
                            <p className="text-xs line-through font-semibold text-[#a9a9a9]">22,000원</p>
                            <p className="text-sm text-[#e02020] font-semibold">
                              <span className="text-xl">15,400</span>원~
                            </p>
                          </div>
                        </div>
                        <div className="w-[235px] flex flex-row mt-[5px]">
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
                    <div className="w-[430px] flex flex-row justify-between">
                      <div
                        className="w-[175px] h-[175px] relative cursor-pointer"
                        style={{
                          backgroundImage: `url(${goods7})`,
                          backgroundPosition: 'center',
                          backgroundSize: 'cover',
                          backgroundRepeat: 'no-repeat',
                        }}
                      ></div>
                      <div className="w-[235px] flex flex-col">
                        <div className="w-[235px] flex flex-row items-center gap-1">
                          <img className="w-[18px]" src={view} alt="view" />
                          <p className="text-[#f27370] text-[13px] mt-[4px]">
                            <strong>555</strong>명이 보고있어요
                          </p>
                        </div>
                        <strong className="w-[235px] text-[#777] font-bold text-sm">닥터포헤어</strong>
                        <p className="h-[40px] text-sm w-[235px] break-keep custom-ellipsis mt-[5px] cursor-pointer">
                          [6월 올영픽/추가증정]닥터포헤어 헤리티지 샴푸 300ml 기획세트/750ml 단품(NEW 두피안티에이징
                          탈모샴푸)
                        </p>
                        <div className="w-[235px] flex flex-col mt-[5px]">
                          <div className="flex flex-col items-baseline">
                            <p className="text-xs line-through font-semibold text-[#a9a9a9]">24,000원</p>
                            <p className="text-sm text-[#e02020] font-semibold">
                              <span className="text-xl">17,020</span>원~
                            </p>
                          </div>
                        </div>
                        <div className="w-[235px] flex flex-row mt-[5px]">
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

                  <div>
                    <div className="w-[430px] flex flex-row justify-between">
                      <div
                        className="w-[175px] h-[175px] relative cursor-pointer"
                        style={{
                          backgroundImage: `url(${goods8})`,
                          backgroundPosition: 'center',
                          backgroundSize: 'cover',
                          backgroundRepeat: 'no-repeat',
                        }}
                      ></div>
                      <div className="w-[235px] flex flex-col">
                        <div className="w-[235px] flex flex-row items-center gap-1">
                          <img className="w-[18px]" src={view} alt="view" />
                          <p className="text-[#f27370] text-[13px] mt-[4px]">
                            <strong>521</strong>명이 보고있어요
                          </p>
                        </div>
                        <strong className="w-[235px] text-[#777] font-bold text-sm">이니스프리</strong>
                        <p className="h-[40px] text-sm w-[235px] break-keep custom-ellipsis mt-[5px] cursor-pointer">
                          이니스프리 비타C 세럼 30mL 장원영 포토카드 세트
                        </p>
                        <div className="w-[235px] flex flex-col mt-[5px]">
                          <div className="flex flex-col items-baseline">
                            <p className="text-xs line-through font-semibold text-[#a9a9a9]">38,000원</p>
                            <p className="text-sm text-[#e02020] font-semibold">
                              <span className="text-xl">27,740</span>원
                            </p>
                          </div>
                        </div>
                        <div className="w-[235px] flex flex-row mt-[5px]">
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
                    <div className="w-[430px] flex flex-row justify-between">
                      <div
                        className="w-[175px] h-[175px] relative cursor-pointer"
                        style={{
                          backgroundImage: `url(${goods9})`,
                          backgroundPosition: 'center',
                          backgroundSize: 'cover',
                          backgroundRepeat: 'no-repeat',
                        }}
                      ></div>
                      <div className="w-[235px] flex flex-col">
                        <div className="w-[235px] flex flex-row items-center gap-1">
                          <img className="w-[18px]" src={view} alt="view" />
                          <p className="text-[#f27370] text-[13px] mt-[4px]">
                            <strong>520</strong>명이 보고있어요
                          </p>
                        </div>
                        <strong className="w-[235px] text-[#777] font-bold text-sm">페리페라</strong>
                        <p className="h-[40px] text-sm w-[235px] break-keep custom-ellipsis mt-[5px] cursor-pointer">
                          [기획/단품] 페리페라 잉크 무드 글로이틴트
                        </p>
                        <div className="w-[235px] flex flex-col mt-[5px]">
                          <div className="flex flex-col items-baseline">
                            <p className="text-xs line-through font-semibold text-[#a9a9a9]">11,000원</p>
                            <p className="text-sm text-[#e02020] font-semibold">
                              <span className="text-xl">8,500</span>원~
                            </p>
                          </div>
                        </div>
                        <div className="w-[235px] flex flex-row mt-[5px]">
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

                  <div>
                    <div className="w-[430px] flex flex-row justify-between">
                      <div
                        className="w-[175px] h-[175px] relative cursor-pointer"
                        style={{
                          backgroundImage: `url(${goods10})`,
                          backgroundPosition: 'center',
                          backgroundSize: 'cover',
                          backgroundRepeat: 'no-repeat',
                        }}
                      ></div>
                      <div className="w-[235px] flex flex-col">
                        <div className="w-[235px] flex flex-row items-center gap-1">
                          <img className="w-[18px]" src={view} alt="view" />
                          <p className="text-[#f27370] text-[13px] mt-[4px]">
                            <strong>421</strong>명이 보고있어요
                          </p>
                        </div>
                        <strong className="w-[235px] text-[#777] font-bold text-sm">롬앤</strong>
                        <p className="h-[40px] text-sm w-[235px] break-keep custom-ellipsis mt-[5px] cursor-pointer">
                          [립 1위/ NEW] 롬앤 쥬시 래스팅 틴트
                        </p>
                        <div className="w-[235px] flex flex-col mt-[5px]">
                          <div className="flex flex-col items-baseline">
                            <p className="text-sm text-[#e02020] font-semibold">
                              <span className="text-xl">9,900</span>원~
                            </p>
                          </div>
                        </div>
                        <div className="w-[235px] flex flex-row mt-[5px]">
                          <div className="w-[60px] h-[18px] rounded-[9px] bg-[#f374b7] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                            오늘드림
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
              <div className="w-[488px]">
                <ul className="w-[488px] h-[200px] flex flex-col items-center">
                  <li
                    className={`w-[488px] h-[40px] flex flex-row items-center gap-2 px-[20px] ${
                      activeSlideB === 0 ? 'border border-[#000] rounded-md' : ''
                    }`}
                  >
                    <p className={`text-lg ${activeSlideB === 0 ? 'text-[#333]' : 'text-[#999]'}`}>1</p>
                    <p
                      className={`text-sm w-[90%] break-keep custom-ellipsis cursor-pointer text-nowrap ${
                        activeSlideB === 0 ? 'text-[#333]' : 'text-[#999]'
                      }`}
                    >
                      [6월 올영픽/한정기획] 퓌 립앤치크 블러리 푸딩팟 증정 기획(+팬던트키링)
                    </p>
                  </li>
                  <li
                    className={`w-[488px] h-[40px] flex flex-row items-center gap-2 px-[20px] ${
                      activeSlideB === 1 ? 'border border-[#000] rounded-md' : ''
                    }`}
                  >
                    <p className={`text-lg ${activeSlideB === 1 ? 'text-[#333]' : 'text-[#999]'}`}>2</p>
                    <p
                      className={`text-sm w-[90%] break-keep custom-ellipsis cursor-pointer text-nowrap ${
                        activeSlideB === 1 ? 'text-[#333]' : 'text-[#999]'
                      }`}
                    >
                      [6월 올영픽/추가증정]닥터포헤어 헤리티지 샴푸 300ml 기획세트/750ml 단품(NEW 두피안티에이징
                      탈모샴푸)
                    </p>
                  </li>
                  <li
                    className={`w-[488px] h-[40px] flex flex-row items-center gap-2 px-[20px] ${
                      activeSlideB === 2 ? 'border border-[#000] rounded-md' : ''
                    }`}
                  >
                    <p className={`text-lg ${activeSlideB === 2 ? 'text-[#333]' : 'text-[#999]'}`}>3</p>
                    <p
                      className={`text-sm w-[90%] break-keep custom-ellipsis cursor-pointer text-nowrap ${
                        activeSlideB === 2 ? 'text-[#333]' : 'text-[#999]'
                      }`}
                    >
                      이니스프리 비타C 세럼 30mL 장원영 포토카드 세트
                    </p>
                  </li>
                  <li
                    className={`w-[488px] h-[40px] flex flex-row items-center gap-2 px-[20px] ${
                      activeSlideB === 3 ? 'border border-[#333] rounded-md' : ''
                    }`}
                  >
                    <p className={`text-lg ${activeSlideB === 3 ? 'text-[#000]' : 'text-[#999]'}`}>4</p>
                    <p
                      className={`text-sm w-[90%] break-keep custom-ellipsis cursor-pointer text-nowrap ${
                        activeSlideB === 3 ? 'text-[#333]' : 'text-[#999]'
                      }`}
                    >
                      [기획/단품] 페리페라 잉크 무드 글로이틴트
                    </p>
                  </li>
                  <li
                    className={`w-[488px] h-[40px] flex flex-row items-center gap-2 px-[20px] ${
                      activeSlideB === 4 ? 'border border-[#000] rounded-md' : ''
                    }`}
                  >
                    <p className={`text-lg ${activeSlideB === 4 ? 'text-[#333]' : 'text-[#999]'}`}>5</p>
                    <p
                      className={`text-sm w-[90%] break-keep custom-ellipsis cursor-pointer text-nowrap ${
                        activeSlideB === 4 ? 'text-[#333]' : 'text-[#999]'
                      }`}
                    >
                      [립 1위/ NEW] 롬앤 쥬시 래스팅 틴트
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Popular;
