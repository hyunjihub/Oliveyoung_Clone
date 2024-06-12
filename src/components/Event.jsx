import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/title.css';

import React, { useState } from 'react';

import Slider from 'react-slick';
import event1 from '../resorces/images/event1.jpg';
import event2 from '../resorces/images/event2.jpg';
import event3 from '../resorces/images/event3.png';
import event4 from '../resorces/images/event4.jpg';
import event5 from '../resorces/images/event5.jpg';
import event6 from '../resorces/images/event6.jpg';
import event7 from '../resorces/images/event7.jpg';
import event8 from '../resorces/images/event8.jpg';
import goods1 from '../resorces/images/event_goods1.jpg';
import goods10 from '../resorces/images/event_goods10.jpg';
import goods11 from '../resorces/images/event_goods11.jpg';
import goods12 from '../resorces/images/event_goods12.jpg';
import goods13 from '../resorces/images/event_goods13.jpg';
import goods14 from '../resorces/images/event_goods14.jpg';
import goods15 from '../resorces/images/event_goods15.jpg';
import goods2 from '../resorces/images/event_goods2.jpg';
import goods3 from '../resorces/images/event_goods3.jpg';
import goods4 from '../resorces/images/event_goods4.jpg';
import goods5 from '../resorces/images/event_goods5.jpg';
import goods6 from '../resorces/images/event_goods6.jpg';
import goods7 from '../resorces/images/event_goods7.jpg';
import goods8 from '../resorces/images/event_goods8.jpg';
import goods9 from '../resorces/images/event_goods9.jpg';
import heart from '../resorces/images/heart.png';
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

const Event = () => {
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
          <h1 className="w-[1020px] pb-[8px] px-[20px] text-[26px] font-bold text-center mb-[25px] relative">
            인기 행사만 모았어요!
            <div className="custom-dots-container absolute right-0 top-3">
              {Array.from({ length: 4 }).map((_, i) => customPaging(i))}
            </div>
          </h1>

          <Slider ref={(slider) => setSlider(slider)} {...settings}>
            <div>
              <div className="w-[1020px] flex flex-row justify-between">
                <div className="w-[510px] h-[620px] px-[10px] flex flex-col items-center border-r">
                  <div
                    className="w-[490px] h-[300px] relative cursor-pointer"
                    style={{
                      backgroundImage: `url(${event1})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    <div className="absolute top-[30%] left-[28px] flex flex-col">
                      <strong className="text-[21px] leading-snug">여름맞이</strong>
                      <strong className="text-[21px] leading-snug">가볍게 다이어트</strong>
                      <p className="text-base mt-[15px]">#푸룬 #클렌즈</p>
                    </div>
                  </div>
                  <div className="w-[475px] h-[360px] flex flex-row justify-between px-[15px] pt-[15px] mt-[-41px] bg-[#fff] z-30">
                    <div className="flex flex-col justify-center">
                      <div
                        className="w-[215px] h-[215px] relative cursor-pointer"
                        style={{
                          backgroundImage: `url(${goods1})`,
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
                      <strong className="w-[215px] text-center text-sm text-[#777] mt-[10px] cursor-pointer">
                        락토픽
                      </strong>
                      <p className="h-[40px] text-sm w-[215px] break-keep custom-ellipsis mt-[5px] text-center cursor-pointer">
                        [6월 올영픽]락토조이 오늘비움 80ml
                      </p>
                      <div className="w-[215px] flex flex-row mt-[5px] justify-center items-center">
                        <div className="flex flex-row items-baseline">
                          <p className="text-sm line-through font-semibold text-[#a9a9a9]">3,800원</p>
                          <p className="text-sm ml-[7px] text-[#e02020] font-semibold">
                            <span className="text-xl">3,420</span>원
                          </p>
                        </div>
                      </div>
                      <div className="w-[215px] flex flex-row justify-center mt-[5px]">
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

                    <div className="flex flex-col justify-center">
                      <div
                        className="w-[215px] h-[215px] relative cursor-pointer"
                        style={{
                          backgroundImage: `url(${goods2})`,
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
                      <strong className="w-[215px] text-center text-sm text-[#777] mt-[10px] cursor-pointer">
                        티트리트
                      </strong>
                      <p className="h-[40px] text-sm w-[215px] break-keep custom-ellipsis mt-[5px] text-center cursor-pointer">
                        티트리트 푸룬딥스트롱 180ml
                      </p>
                      <div className="w-[215px] flex flex-row mt-[5px] justify-center items-center">
                        <div className="flex flex-row items-baseline">
                          <p className="text-sm ml-[7px] text-[#e02020] font-semibold">
                            <span className="text-xl">4,500</span>원
                          </p>
                        </div>
                      </div>
                      <div className="w-[215px] flex flex-row justify-center mt-[5px]">
                        <div className="w-[40px] h-[18px] rounded-[9px] bg-[#ff8942] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                          1+1
                        </div>
                        <div className="w-[60px] h-[18px] rounded-[9px] bg-[#f374b7] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                          오늘드림
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-[510px] h-[620px] px-[10px] flex flex-col items-center border-r">
                  <div
                    className="w-[490px] h-[300px] relative cursor-pointer"
                    style={{
                      backgroundImage: `url(${event2})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    <div className="absolute top-[30%] left-[28px] flex flex-col">
                      <strong className="text-[21px] leading-snug">강력한 세정으로</strong>
                      <strong className="text-[21px] leading-snug">하루종일 상쾌한 발</strong>
                      <p className="text-base mt-[15px]">#온더바디 #발을씻자</p>
                    </div>
                  </div>
                  <div className="w-[475px] h-[360px] flex flex-row justify-between px-[15px] pt-[15px] mt-[-41px] bg-[#fff] z-30">
                    <div className="flex flex-col justify-center">
                      <div
                        className="w-[215px] h-[215px] relative cursor-pointer"
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
                        <div
                          className="w-[40px] h-[40px] absolute right-0 bottom-0 bg-[#fff] border cursor-pointer"
                          style={{
                            backgroundImage: `url(${heart})`,
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                          }}
                        ></div>
                      </div>
                      <strong className="w-[215px] text-center text-sm text-[#777] mt-[10px] cursor-pointer">
                        온더바디
                      </strong>
                      <p className="h-[40px] text-sm w-[215px] break-keep custom-ellipsis mt-[5px] text-center cursor-pointer">
                        [마루는강쥐 에디션] 온더바디 발을씻자 코튼 풋샴푸 385ml 2종 택1 (민트향/비누향)
                      </p>
                      <div className="w-[215px] flex flex-row mt-[5px] justify-center items-center">
                        <div className="flex flex-row items-baseline">
                          <p className="text-sm line-through font-semibold text-[#a9a9a9]">11,900원</p>
                          <p className="text-sm ml-[7px] text-[#e02020] font-semibold">
                            <span className="text-xl">5,750</span>원~
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

                    <div className="flex flex-col justify-center">
                      <div
                        className="w-[215px] h-[215px] relative cursor-pointer"
                        style={{
                          backgroundImage: `url(${goods4})`,
                          backgroundPosition: 'center',
                          backgroundSize: 'cover',
                          backgroundRepeat: 'no-repeat',
                        }}
                      >
                        <div
                          className="w-[40px] h-[40px] absolute right-0 bottom-0 bg-[#fff] border cursor-pointer"
                          style={{
                            backgroundImage: `url(${heart})`,
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                          }}
                        ></div>
                      </div>
                      <strong className="w-[215px] text-center text-sm text-[#777] mt-[10px] cursor-pointer">
                        온더바디
                      </strong>
                      <p className="h-[40px] text-sm w-[215px] break-keep custom-ellipsis mt-[5px] text-center cursor-pointer">
                        [마루는강쥐X온더바디] 온더바디 코튼풋 발가글하자 풋미스트 100ml
                      </p>
                      <div className="w-[215px] flex flex-row mt-[5px] justify-center items-center">
                        <div className="flex flex-row items-baseline">
                          <p className="text-sm line-through font-semibold text-[#a9a9a9]">11,900원~</p>
                          <p className="text-sm ml-[7px] text-[#e02020] font-semibold">
                            <span className="text-xl">5,750</span>원
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
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="w-[1020px] flex flex-row justify-between">
                <div className="w-[510px] h-[620px] px-[10px] flex flex-col items-center border-r">
                  <div
                    className="w-[490px] h-[300px] relative cursor-pointer"
                    style={{
                      backgroundImage: `url(${event3})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    <div className="absolute top-[30%] left-[28px] flex flex-col">
                      <strong className="text-[21px] leading-snug">단 7일간의 혜택</strong>
                      <strong className="text-[21px] leading-snug">베뉴먼트 런칭 기념</strong>
                      <p className="text-base mt-[15px]">#로브증정이벤트 #23%</p>
                    </div>
                  </div>
                  <div className="w-[475px] h-[360px] flex flex-row justify-between px-[15px] pt-[15px] mt-[-41px] bg-[#fff] z-30">
                    <div className="flex flex-col justify-center">
                      <div
                        className="w-[215px] h-[215px] relative cursor-pointer"
                        style={{
                          backgroundImage: `url(${goods5})`,
                          backgroundPosition: 'center',
                          backgroundSize: 'cover',
                          backgroundRepeat: 'no-repeat',
                        }}
                      >
                        <div
                          className="w-[40px] h-[40px] absolute right-0 bottom-0 bg-[#fff] border cursor-pointer"
                          style={{
                            backgroundImage: `url(${heart})`,
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                          }}
                        ></div>
                      </div>
                      <strong className="w-[215px] text-center text-sm text-[#777] mt-[10px] cursor-pointer">
                        베뉴먼트
                      </strong>
                      <p className="h-[40px] text-sm w-[215px] break-keep custom-ellipsis mt-[5px] text-center cursor-pointer">
                        [리뷰이벤트] 베뉴먼트 솔리드 퍼퓸 30ml 룸 템퍼러쳐
                      </p>
                      <div className="w-[215px] flex flex-row mt-[5px] justify-center items-center">
                        <div className="flex flex-row items-baseline">
                          <p className="text-sm line-through font-semibold text-[#a9a9a9]">42,000원</p>
                          <p className="text-sm ml-[7px] text-[#e02020] font-semibold">
                            <span className="text-xl">29,400</span>원
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
                        <div className="w-[40px] h-[18px] rounded-[9px] bg-[#6fcff7] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                          증정
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col justify-center">
                      <div
                        className="w-[215px] h-[215px] relative cursor-pointer"
                        style={{
                          backgroundImage: `url(${goods6})`,
                          backgroundPosition: 'center',
                          backgroundSize: 'cover',
                          backgroundRepeat: 'no-repeat',
                        }}
                      >
                        <div
                          className="w-[40px] h-[40px] absolute right-0 bottom-0 bg-[#fff] border cursor-pointer"
                          style={{
                            backgroundImage: `url(${heart})`,
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                          }}
                        ></div>
                      </div>
                      <strong className="w-[215px] text-center text-sm text-[#777] mt-[10px] cursor-pointer">
                        베뉴먼트
                      </strong>
                      <p className="h-[40px] text-sm w-[215px] break-keep custom-ellipsis mt-[5px] text-center cursor-pointer">
                        [리뷰이벤트] 베뉴먼트 솔리드 퍼퓸 30ml 아파트먼트
                      </p>
                      <div className="w-[215px] flex flex-row mt-[5px] justify-center items-center">
                        <div className="flex flex-row items-baseline">
                          <p className="text-sm line-through font-semibold text-[#a9a9a9]">42,000원</p>
                          <p className="text-sm ml-[7px] text-[#e02020] font-semibold">
                            <span className="text-xl">29,400</span>원
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
                        <div className="w-[40px] h-[18px] rounded-[9px] bg-[#6fcff7] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                          증정
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-[510px] h-[620px] px-[10px] flex flex-col items-center border-r">
                  <div
                    className="w-[490px] h-[300px] relative cursor-pointer"
                    style={{
                      backgroundImage: `url(${event4})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    <div className="absolute top-[30%] left-[28px] flex flex-col">
                      <strong className="text-[21px] leading-snug">홈케어 필수템 VT</strong>
                      <strong className="text-[21px] leading-snug">올리브영 단독기획</strong>
                      <p className="text-base mt-[15px]">리들샷300 샤쉐증정</p>
                    </div>
                  </div>
                  <div className="w-[475px] h-[360px] flex flex-row justify-between px-[15px] pt-[15px] mt-[-41px] bg-[#fff] z-30">
                    <div className="flex flex-col justify-center">
                      <div
                        className="w-[215px] h-[215px] relative cursor-pointer"
                        style={{
                          backgroundImage: `url(${goods7})`,
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
                      <strong className="w-[215px] text-center text-sm text-[#777] mt-[10px] cursor-pointer">VT</strong>
                      <p className="h-[40px] text-sm w-[215px] break-keep custom-ellipsis mt-[5px] text-center cursor-pointer">
                        [아랑Pick] VT 리들샷 100 에센스 50ml 기획/단품
                      </p>
                      <div className="w-[215px] flex flex-row mt-[5px] justify-center items-center">
                        <div className="flex flex-row items-baseline">
                          <p className="text-sm line-through font-semibold text-[#a9a9a9]">32,000원~</p>
                          <p className="text-sm ml-[7px] text-[#e02020] font-semibold">
                            <span className="text-xl">24,600</span>원~
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

                    <div className="flex flex-col justify-center">
                      <div
                        className="w-[215px] h-[215px] relative cursor-pointer"
                        style={{
                          backgroundImage: `url(${goods8})`,
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
                      <strong className="w-[215px] text-center text-sm text-[#777] mt-[10px] cursor-pointer">VT</strong>
                      <p className="h-[40px] text-sm w-[215px] break-keep custom-ellipsis mt-[5px] text-center cursor-pointer">
                        VT 리들샷 300 에센스 50ml
                      </p>
                      <div className="w-[215px] flex flex-row mt-[5px] justify-center items-center">
                        <div className="flex flex-row items-baseline">
                          <p className="text-sm line-through font-semibold text-[#a9a9a9]">43,000원</p>
                          <p className="text-sm ml-[7px] text-[#e02020] font-semibold">
                            <span className="text-xl">34,400</span>원
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
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="w-[1020px] flex flex-row justify-between">
                <div className="w-[510px] h-[620px] px-[10px] flex flex-col items-center border-r">
                  <div
                    className="w-[490px] h-[300px] relative cursor-pointer"
                    style={{
                      backgroundImage: `url(${event5})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    <div className="absolute top-[30%] left-[28px] flex flex-col">
                      <strong className="text-[21px] leading-snug">혜림쌤 PICK</strong>
                      <strong className="text-[21px] leading-snug">청담 베이스 필수템</strong>
                      <p className="text-base mt-[15px]">#에르보리앙 BB크림</p>
                    </div>
                  </div>
                  <div className="w-[475px] h-[360px] flex flex-row justify-between px-[15px] pt-[15px] mt-[-41px] bg-[#fff] z-30">
                    <div className="flex flex-col justify-center">
                      <div
                        className="w-[215px] h-[215px] relative cursor-pointer"
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
                        <div
                          className="w-[40px] h-[40px] absolute right-0 bottom-0 bg-[#fff] border cursor-pointer"
                          style={{
                            backgroundImage: `url(${heart})`,
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                          }}
                        ></div>
                      </div>
                      <strong className="w-[215px] text-center text-sm text-[#777] mt-[10px] cursor-pointer">
                        에르보리앙
                      </strong>
                      <p className="h-[40px] text-sm w-[215px] break-keep custom-ellipsis mt-[5px] text-center cursor-pointer">
                        [혜림쌤PICK] 에르보리앙 CC 레드 코렉트 45ml
                      </p>
                      <div className="w-[215px] flex flex-row mt-[5px] justify-center items-center">
                        <div className="flex flex-row items-baseline">
                          <p className="text-sm line-through font-semibold text-[#a9a9a9]">42,000원</p>
                          <p className="text-sm ml-[7px] text-[#e02020] font-semibold">
                            <span className="text-xl">33,600</span>원
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

                    <div className="flex flex-col justify-center">
                      <div
                        className="w-[215px] h-[215px] relative cursor-pointer"
                        style={{
                          backgroundImage: `url(${goods9})`,
                          backgroundPosition: 'center',
                          backgroundSize: 'cover',
                          backgroundRepeat: 'no-repeat',
                        }}
                      >
                        <div
                          className="w-[40px] h-[40px] absolute right-0 bottom-0 bg-[#fff] border cursor-pointer"
                          style={{
                            backgroundImage: `url(${heart})`,
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                          }}
                        ></div>
                      </div>
                      <strong className="w-[215px] text-center text-sm text-[#777] mt-[10px] cursor-pointer">
                        에르보리앙
                      </strong>
                      <p className="h-[40px] text-sm w-[215px] break-keep custom-ellipsis mt-[5px] text-center cursor-pointer">
                        [혜림쌤PICK] 에르보리앙 BB크림 누드/클레어 40ml
                      </p>
                      <div className="w-[215px] flex flex-row mt-[5px] justify-center items-center">
                        <div className="flex flex-row items-baseline">
                          <p className="text-sm line-through font-semibold text-[#a9a9a9]">40,000원</p>
                          <p className="text-sm ml-[7px] text-[#e02020] font-semibold">
                            <span className="text-xl">32,000</span>원~
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
                  </div>
                </div>

                <div className="w-[510px] h-[620px] px-[10px] flex flex-col items-center border-r">
                  <div
                    className="w-[490px] h-[300px] relative cursor-pointer"
                    style={{
                      backgroundImage: `url(${event6})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    <div className="absolute top-[30%] left-[28px] flex flex-col">
                      <strong className="text-[21px] leading-snug">산뜻한 체취케어</strong>
                      <strong className="text-[21px] leading-snug">NO.1 니베아 데오</strong>
                      <p className="text-base mt-[15px]">#본품증정 #의약외품</p>
                    </div>
                  </div>
                  <div className="w-[475px] h-[360px] flex flex-row justify-between px-[15px] pt-[15px] mt-[-41px] bg-[#fff] z-30">
                    <div className="flex flex-col justify-center">
                      <div
                        className="w-[215px] h-[215px] relative cursor-pointer"
                        style={{
                          backgroundImage: `url(${goods10})`,
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
                      <strong className="w-[215px] text-center text-sm text-[#777] mt-[10px] cursor-pointer">
                        니베아
                      </strong>
                      <p className="h-[40px] text-sm w-[215px] break-keep custom-ellipsis mt-[5px] text-center cursor-pointer">
                        [6월 올영픽] 니베아 데오드란트 스프레이 드라이컴포트 기획 (200ml+60ml)
                      </p>
                      <div className="w-[215px] flex flex-row mt-[5px] justify-center items-center">
                        <div className="flex flex-row items-baseline">
                          <p className="text-sm line-through font-semibold text-[#a9a9a9]">15,100원</p>
                          <p className="text-sm ml-[7px] text-[#e02020] font-semibold">
                            <span className="text-xl">13,200</span>원
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

                    <div className="flex flex-col justify-center">
                      <div
                        className="w-[215px] h-[215px] relative cursor-pointer"
                        style={{
                          backgroundImage: `url(${goods11})`,
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
                      <strong className="w-[215px] text-center text-sm text-[#777] mt-[10px] cursor-pointer">
                        니베아
                      </strong>
                      <p className="h-[40px] text-sm w-[215px] break-keep custom-ellipsis mt-[5px] text-center cursor-pointer">
                        [6월 올영픽] 니베아 데오드란트 롤온 드라이컴포트 기획 (50ml+25ml)
                      </p>
                      <div className="w-[215px] flex flex-row mt-[5px] justify-center items-center">
                        <div className="flex flex-row items-baseline">
                          <p className="text-sm line-through font-semibold text-[#a9a9a9]">9,900원</p>
                          <p className="text-sm ml-[7px] text-[#e02020] font-semibold">
                            <span className="text-xl">8,600</span>원
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
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="w-[1020px] flex flex-row justify-between">
                <div className="w-[510px] h-[620px] px-[10px] flex flex-col items-center border-r">
                  <div
                    className="w-[490px] h-[300px] relative cursor-pointer"
                    style={{
                      backgroundImage: `url(${event7})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    <div className="absolute top-[30%] left-[28px] flex flex-col">
                      <strong className="text-[21px] leading-snug">듀이트리 잡티패드 런칭!</strong>
                      <strong className="text-[21px] leading-snug">AC 흔적진정 잡티패드</strong>
                      <p className="text-base mt-[15px]">#7일 클리어 #잡티 고민 끝</p>
                    </div>
                  </div>
                  <div className="w-[475px] h-[360px] flex flex-row justify-between px-[15px] pt-[15px] mt-[-41px] bg-[#fff] z-30">
                    <div className="flex flex-col justify-center">
                      <div
                        className="w-[215px] h-[215px] relative cursor-pointer"
                        style={{
                          backgroundImage: `url(${goods11})`,
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
                      <strong className="w-[215px] text-center text-sm text-[#777] mt-[10px] cursor-pointer">
                        듀이트리
                      </strong>
                      <p className="h-[40px] text-sm w-[215px] break-keep custom-ellipsis mt-[5px] text-center cursor-pointer">
                        [아우라엠PICK]듀이트리 AC컨트롤 EX 딥 흔적 진정 잡티패드 80매
                      </p>
                      <div className="w-[215px] flex flex-row mt-[5px] justify-center items-center">
                        <div className="flex flex-row items-baseline">
                          <p className="text-sm line-through font-semibold text-[#a9a9a9]">24,000원</p>
                          <p className="text-sm ml-[7px] text-[#e02020] font-semibold">
                            <span className="text-xl">15,900</span>원
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

                    <div className="flex flex-col justify-center">
                      <div
                        className="w-[215px] h-[215px] relative cursor-pointer"
                        style={{
                          backgroundImage: `url(${goods13})`,
                          backgroundPosition: 'center',
                          backgroundSize: 'cover',
                          backgroundRepeat: 'no-repeat',
                        }}
                      >
                        <div
                          className="w-[40px] h-[40px] absolute right-0 bottom-0 bg-[#fff] border cursor-pointer"
                          style={{
                            backgroundImage: `url(${heart})`,
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                          }}
                        ></div>
                      </div>
                      <strong className="w-[215px] text-center text-sm text-[#777] mt-[10px] cursor-pointer">
                        듀이트리
                      </strong>
                      <p className="h-[40px] text-sm w-[215px] break-keep custom-ellipsis mt-[5px] text-center cursor-pointer">
                        [쿨링진정]듀이트리 AC컨트롤 EX 딥 마스크 10매
                      </p>
                      <div className="w-[215px] flex flex-row mt-[5px] justify-center items-center">
                        <div className="flex flex-row items-baseline">
                          <p className="text-sm ml-[7px] text-[#e02020] font-semibold">
                            <span className="text-xl">4,500</span>원
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
                  </div>
                </div>

                <div className="w-[510px] h-[620px] px-[10px] flex flex-col items-center border-r">
                  <div
                    className="w-[490px] h-[300px] relative cursor-pointer"
                    style={{
                      backgroundImage: `url(${event8})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    <div className="absolute top-[30%] left-[28px] flex flex-col">
                      <strong className="text-[21px] leading-snug">남자 수분 고민 끝!</strong>
                      <strong className="text-[21px] leading-snug">확신의 1위!</strong>
                      <p className="text-base mt-[15px]">#라운드랩 #자작나무 포 맨</p>
                    </div>
                  </div>
                  <div className="w-[475px] h-[360px] flex flex-row justify-between px-[15px] pt-[15px] mt-[-41px] bg-[#fff] z-30">
                    <div className="flex flex-col justify-center">
                      <div
                        className="w-[215px] h-[215px] relative cursor-pointer"
                        style={{
                          backgroundImage: `url(${goods14})`,
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
                      <strong className="w-[215px] text-center text-sm text-[#777] mt-[10px] cursor-pointer">
                        라운드랩
                      </strong>
                      <p className="h-[40px] text-sm w-[215px] break-keep custom-ellipsis mt-[5px] text-center cursor-pointer">
                        라운드랩 포 맨 자작나무 토너/로션 2종세트 (+쉐이빙폼 40ml 증정)
                      </p>
                      <div className="w-[215px] flex flex-row mt-[5px] justify-center items-center">
                        <div className="flex flex-row items-baseline">
                          <p className="text-sm line-through font-semibold text-[#a9a9a9]">42,000원</p>
                          <p className="text-sm ml-[7px] text-[#e02020] font-semibold">
                            <span className="text-xl">29,930</span>원~
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

                    <div className="flex flex-col justify-center">
                      <div
                        className="w-[215px] h-[215px] relative cursor-pointer"
                        style={{
                          backgroundImage: `url(${goods15})`,
                          backgroundPosition: 'center',
                          backgroundSize: 'cover',
                          backgroundRepeat: 'no-repeat',
                        }}
                      >
                        <div
                          className="w-[40px] h-[40px] absolute right-0 bottom-0 bg-[#fff] border cursor-pointer"
                          style={{
                            backgroundImage: `url(${heart})`,
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                          }}
                        ></div>
                      </div>
                      <strong className="w-[215px] text-center text-sm text-[#777] mt-[10px] cursor-pointer">
                        라운드랩
                      </strong>
                      <p className="h-[40px] text-sm w-[215px] break-keep custom-ellipsis mt-[5px] text-center cursor-pointer">
                        [6월 올영픽] 라운드랩 포 맨 자작나무 수분 로션 200ml
                      </p>
                      <div className="w-[215px] flex flex-row mt-[5px] justify-center items-center">
                        <div className="flex flex-row items-baseline">
                          <p className="text-sm line-through font-semibold text-[#a9a9a9]">24,000원</p>
                          <p className="text-sm ml-[7px] text-[#e02020] font-semibold">
                            <span className="text-xl">16,600</span>원
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

export default Event;
