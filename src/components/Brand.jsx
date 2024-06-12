import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/title.css';

import React, { useState } from 'react';

import Slider from 'react-slick';
import brand1 from '../resorces/images/brand1.jpg';
import brand10 from '../resorces/images/brand10.jpg';
import brand2 from '../resorces/images/brand2.jpeg';
import brand3 from '../resorces/images/brand3.jpg';
import brand4 from '../resorces/images/brand4.jpeg';
import brand5 from '../resorces/images/brand5.jpg';
import brand6 from '../resorces/images/brand6.jpg';
import brand7 from '../resorces/images/brand7.jpeg';
import brand8 from '../resorces/images/brand8.jpg';
import brand9 from '../resorces/images/brand9.jpg';
import goods1 from '../resorces/images/brand-goods1.jpg';
import goods10 from '../resorces/images/brand-goods10.jpg';
import goods11 from '../resorces/images/brand-goods11.jpg';
import goods12 from '../resorces/images/brand-goods12.jpg';
import goods13 from '../resorces/images/brand-goods13.jpg';
import goods14 from '../resorces/images/brand-goods14.jpg';
import goods15 from '../resorces/images/brand-goods15.jpg';
import goods16 from '../resorces/images/brand-goods16.jpg';
import goods17 from '../resorces/images/brand-goods17.jpg';
import goods18 from '../resorces/images/brand-goods18.jpg';
import goods19 from '../resorces/images/brand-goods19.jpg';
import goods2 from '../resorces/images/brand-goods2.jpg';
import goods20 from '../resorces/images/brand-goods20.jpg';
import goods3 from '../resorces/images/brand-goods3.jpg';
import goods4 from '../resorces/images/brand-goods4.jpg';
import goods5 from '../resorces/images/brand-goods5.jpg';
import goods6 from '../resorces/images/brand-goods6.jpg';
import goods7 from '../resorces/images/brand-goods7.jpg';
import goods8 from '../resorces/images/brand-goods8.jpg';
import goods9 from '../resorces/images/brand-goods9.jpg';
import like from '../resorces/images/like.png';

const PrevArrow = ({ onClick }) => <div className="prev-arrow-brand" onClick={onClick}></div>;

const NextArrow = ({ onClick }) => <div className="next-arrow-brand" onClick={onClick}></div>;

const Brand = () => {
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

  const customPaging = (brand, i) => (
    <div className={`custom-dot-brand ${i === activeSlide ? 'active' : ''}`} onClick={() => slider.slickGoTo(i)}>
      {brand}
    </div>
  );

  const Brand = [
    '클리오',
    '푸드올로지',
    '더마비',
    '어노브',
    '눅스',
    '유시몰',
    '코카콜라',
    '페리페라',
    '3CE',
    '바이오더마',
  ];

  return (
    <div className="w-[1020px] mt-[50px] slider-container flex flex-row">
      <div>
        <div className="w-[1020px] flex flex-col">
          <h1 className="w-[1020px] pb-[8px] px-[20px] text-[26px] font-bold text-center mb-[10px]">
            주목해야 할 브랜드
          </h1>
          <div className="w-[1020px] custom-dots-brand-container">
            {Brand.map((brand, i) => customPaging(brand, i))}
          </div>
          <Slider ref={(slider) => setSlider(slider)} {...settings}>
            <div>
              <div
                className="w-[1020px] h-[400px] relative"
                style={{
                  backgroundImage: `url(${brand1})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                <div class="bg-custom-gradient absolute w-[1020px] h-[400px] top-0 left-0 cursor-pointer"></div>
                <div className="absolute top-[40%] left-[42%] flex flex-col items-center cursor-pointer">
                  <strong
                    className="text-[28px] text-[#fff] cursor-pointer"
                    style={{ textShadow: '0 2px 12px rgba(0, 0, 0, .25)' }}
                  >
                    클리오
                  </strong>
                  <span
                    className="text-sm text-[#fff] flex gap-1 items-center"
                    style={{ textShadow: '0 0 4px rgba(0, 0, 0, .5)' }}
                  >
                    <img className="w-[16px] h-[16px]" src={like} alt="like" />
                    20,758명이 좋아합니다.
                  </span>
                </div>
              </div>
              <div className="w-[1020px] px-[20px] flex flex-row justify-between">
                <div className="w-[450px] h-[100px] mt-[30px] flex flex-row justify-between">
                  <div
                    className="w-[100px] h-[100px] relative"
                    style={{
                      backgroundImage: `url(${goods2})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  ></div>
                  <div>
                    <p className="h-[36px] text-sm w-[335px] break-keep mt-[5px] cursor-pointer flex items-end">
                      [리필기획] 클리오 킬브로우 오토하드브로우펜슬 (리뉴얼)
                    </p>
                    <div className="w-[335px] flex flex-row mt-[5px] items-center">
                      <div className="flex flex-row items-baseline">
                        <p className="text-xs line-through font-semibold text-[#a9a9a9]">20,000원</p>
                        <p className="text-sm ml-[7px] text-[#e02020] font-semibold">
                          <span className="text-sm">13,700</span>원
                        </p>
                      </div>
                    </div>
                    <div className="w-[335px] flex flex-row mt-[5px]">
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

                <div className="w-[450px] h-[100px] mt-[30px] flex flex-row justify-between">
                  <div
                    className="w-[100px] h-[100px] relative"
                    style={{
                      backgroundImage: `url(${goods1})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  ></div>
                  <div>
                    <p className="h-[36px] text-sm w-[335px] break-keep mt-[5px] cursor-pointer flex items-end">
                      [진훤PICK/미니글로스 증정] 클리오 크리스탈 글램 틴트 기획/단품
                    </p>
                    <div className="w-[335px] flex flex-row mt-[5px] items-center">
                      <div className="flex flex-row items-baseline">
                        <p className="text-xs line-through font-semibold text-[#a9a9a9]">24,000원</p>
                        <p className="text-sm ml-[7px] text-[#e02020] font-semibold">
                          <span className="text-sm">16,600</span>원
                        </p>
                      </div>
                    </div>
                    <div className="w-[335px] flex flex-row mt-[5px]">
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

            <div>
              <div
                className="w-[1020px] h-[400px] relative"
                style={{
                  backgroundImage: `url(${brand2})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                <div class="bg-custom-gradient absolute w-[1020px] h-[400px] top-0 left-0 cursor-pointer"></div>
                <div className="absolute top-[40%] left-[42%] flex flex-col items-center cursor-pointer">
                  <strong
                    className="text-[28px] text-[#fff] cursor-pointer"
                    style={{ textShadow: '0 2px 12px rgba(0, 0, 0, .25)' }}
                  >
                    푸드올로지
                  </strong>
                  <span
                    className="text-sm text-[#fff] flex gap-1 items-center"
                    style={{ textShadow: '0 0 4px rgba(0, 0, 0, .5)' }}
                  >
                    <img className="w-[16px] h-[16px]" src={like} alt="like" />
                    1,552명이 좋아합니다.
                  </span>
                </div>
              </div>
              <div className="w-[1020px] px-[20px] flex flex-row justify-between">
                <div className="w-[450px] h-[100px] mt-[30px] flex flex-row justify-between">
                  <div
                    className="w-[100px] h-[100px] relative"
                    style={{
                      backgroundImage: `url(${goods3})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  ></div>
                  <div>
                    <p className="h-[36px] text-sm w-[335px] break-keep mt-[5px] cursor-pointer flex items-end">
                      [6월올영픽/파우치증정] 콜레올로지 X 무직타이거 기획 (600mg*30정 15일분)
                    </p>
                    <div className="w-[335px] flex flex-row mt-[5px] items-center">
                      <div className="flex flex-row items-baseline">
                        <p className="text-xs line-through font-semibold text-[#a9a9a9]">22,900원</p>
                        <p className="text-sm ml-[7px] text-[#e02020] font-semibold">
                          <span className="text-sm">17,900</span>원
                        </p>
                      </div>
                    </div>
                    <div className="w-[335px] flex flex-row mt-[5px]">
                      <div className="w-[40px] h-[18px] rounded-[9px] bg-[#f65c60] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                        세일
                      </div>
                      <div className="w-[60px] h-[18px] rounded-[9px] bg-[#f374b7] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                        오늘드림
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-[450px] h-[100px] mt-[30px] flex flex-row justify-between">
                  <div
                    className="w-[100px] h-[100px] relative"
                    style={{
                      backgroundImage: `url(${goods4})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  ></div>
                  <div>
                    <p className="h-[36px] text-sm w-[335px] break-keep mt-[5px] cursor-pointer flex items-end">
                      [6월 올영픽/서현PICK]콜레올로지 더블샷 7일 7입(1주분)
                    </p>
                    <div className="w-[335px] flex flex-row mt-[5px] items-center">
                      <div className="flex flex-row items-baseline">
                        <p className="text-xs line-through font-semibold text-[#a9a9a9]">26,900원</p>
                        <p className="text-sm ml-[7px] text-[#e02020] font-semibold">
                          <span className="text-sm">21,900</span>원
                        </p>
                      </div>
                    </div>
                    <div className="w-[335px] flex flex-row mt-[5px]">
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
            </div>

            <div>
              <div
                className="w-[1020px] h-[400px] relative"
                style={{
                  backgroundImage: `url(${brand3})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                <div class="bg-custom-gradient absolute w-[1020px] h-[400px] top-0 left-0 cursor-pointer"></div>
                <div className="absolute top-[40%] left-[42%] flex flex-col items-center cursor-pointer">
                  <strong
                    className="text-[28px] text-[#fff] cursor-pointer"
                    style={{ textShadow: '0 2px 12px rgba(0, 0, 0, .25)' }}
                  >
                    더마비
                  </strong>
                  <span
                    className="text-sm text-[#fff] flex gap-1 items-center"
                    style={{ textShadow: '0 0 4px rgba(0, 0, 0, .5)' }}
                  >
                    <img className="w-[16px] h-[16px]" src={like} alt="like" />
                    4,879명이 좋아합니다.
                  </span>
                </div>
              </div>
              <div className="w-[1020px] px-[20px] flex flex-row justify-between">
                <div className="w-[450px] h-[100px] mt-[30px] flex flex-row justify-between">
                  <div
                    className="w-[100px] h-[100px] relative"
                    style={{
                      backgroundImage: `url(${goods5})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  ></div>
                  <div>
                    <p className="h-[36px] text-sm w-[335px] break-keep mt-[5px] cursor-pointer flex items-end">
                      [등드름개선/흔적] 더마비X도구리 AC컨트롤 바디미스트 200ml 기획
                    </p>
                    <div className="w-[335px] flex flex-row mt-[5px] items-center">
                      <div className="flex flex-row items-baseline">
                        <p className="text-xs line-through font-semibold text-[#a9a9a9]">20,000원</p>
                        <p className="text-sm ml-[7px] text-[#e02020] font-semibold">
                          <span className="text-sm">16,500</span>원
                        </p>
                      </div>
                    </div>
                    <div className="w-[335px] flex flex-row mt-[5px]">
                      <div className="w-[40px] h-[18px] rounded-[9px] bg-[#f65c60] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                        세일
                      </div>
                      <div className="w-[60px] h-[18px] rounded-[9px] bg-[#f374b7] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                        오늘드림
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-[450px] h-[100px] mt-[30px] flex flex-row justify-between">
                  <div
                    className="w-[100px] h-[100px] relative"
                    style={{
                      backgroundImage: `url(${goods6})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  ></div>
                  <div>
                    <p className="h-[36px] text-sm w-[335px] break-keep mt-[5px] cursor-pointer flex items-end">
                      [등드름/여드름기능성] 더마비X도구리 AC컨트롤 바디워시 420ml 기획
                    </p>
                    <div className="w-[335px] flex flex-row mt-[5px] items-center">
                      <div className="flex flex-row items-baseline">
                        <p className="text-xs line-through font-semibold text-[#a9a9a9]">16,000원</p>
                        <p className="text-sm ml-[7px] text-[#e02020] font-semibold">
                          <span className="text-sm">15,000</span>원
                        </p>
                      </div>
                    </div>
                    <div className="w-[335px] flex flex-row mt-[5px]">
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
            </div>

            <div>
              <div
                className="w-[1020px] h-[400px] relative"
                style={{
                  backgroundImage: `url(${brand4})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                <div class="bg-custom-gradient absolute w-[1020px] h-[400px] top-0 left-0 cursor-pointer"></div>
                <div className="absolute top-[40%] left-[42%] flex flex-col items-center cursor-pointer">
                  <strong
                    className="text-[28px] text-[#fff] cursor-pointer"
                    style={{ textShadow: '0 2px 12px rgba(0, 0, 0, .25)' }}
                  >
                    어노브
                  </strong>
                  <span
                    className="text-sm text-[#fff] flex gap-1 items-center"
                    style={{ textShadow: '0 0 4px rgba(0, 0, 0, .5)' }}
                  >
                    <img className="w-[16px] h-[16px]" src={like} alt="like" />
                    10,378명이 좋아합니다.
                  </span>
                </div>
              </div>
              <div className="w-[1020px] px-[20px] flex flex-row justify-between">
                <div className="w-[450px] h-[100px] mt-[30px] flex flex-row justify-between">
                  <div
                    className="w-[100px] h-[100px] relative"
                    style={{
                      backgroundImage: `url(${goods7})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  ></div>
                  <div>
                    <p className="h-[36px] text-sm w-[335px] break-keep mt-[5px] cursor-pointer flex items-end">
                      [6월 올영픽/헤어케어 1위] 어노브 대용량 딥 데미지 트리트먼트 EX 더블/듀오 기획 4종
                      택1(텐더블룸/웜페탈)
                    </p>
                    <div className="w-[335px] flex flex-row mt-[5px] items-center">
                      <div className="flex flex-row items-baseline">
                        <p className="text-xs line-through font-semibold text-[#a9a9a9]">42,000원</p>
                        <p className="text-sm ml-[7px] text-[#e02020] font-semibold">
                          <span className="text-sm">29,800</span>원~
                        </p>
                      </div>
                    </div>
                    <div className="w-[335px] flex flex-row mt-[5px]">
                      <div className="w-[40px] h-[18px] rounded-[9px] bg-[#f65c60] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                        세일
                      </div>
                      <div className="w-[60px] h-[18px] rounded-[9px] bg-[#f374b7] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                        오늘드림
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-[450px] h-[100px] mt-[30px] flex flex-row justify-between">
                  <div
                    className="w-[100px] h-[100px] relative"
                    style={{
                      backgroundImage: `url(${goods8})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  ></div>
                  <div>
                    <p className="h-[36px] text-sm w-[335px] break-keep mt-[5px] cursor-pointer flex items-end">
                      [6월 올영픽/1&1] 어노브 실크 오일 에센스 더블 기획세트 (70ml+70ml) 2종 택1(텐더블룸/웜페탈)
                    </p>
                    <div className="w-[335px] flex flex-row mt-[5px] items-center">
                      <div className="flex flex-row items-baseline">
                        <p className="text-xs line-through font-semibold text-[#a9a9a9]">35,000원</p>
                        <p className="text-sm ml-[7px] text-[#e02020] font-semibold">
                          <span className="text-sm">28,900</span>원~
                        </p>
                      </div>
                    </div>
                    <div className="w-[335px] flex flex-row mt-[5px]">
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
            </div>

            <div>
              <div
                className="w-[1020px] h-[400px] relative"
                style={{
                  backgroundImage: `url(${brand5})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                <div class="bg-custom-gradient absolute w-[1020px] h-[400px] top-0 left-0 cursor-pointer"></div>
                <div className="absolute top-[40%] left-[42%] flex flex-col items-center cursor-pointer">
                  <strong
                    className="text-[28px] text-[#fff] cursor-pointer"
                    style={{ textShadow: '0 2px 12px rgba(0, 0, 0, .25)' }}
                  >
                    눅스
                  </strong>
                  <span
                    className="text-sm text-[#fff] flex gap-1 items-center"
                    style={{ textShadow: '0 0 4px rgba(0, 0, 0, .5)' }}
                  >
                    <img className="w-[16px] h-[16px]" src={like} alt="like" />
                    2,552명이 좋아합니다.
                  </span>
                </div>
              </div>
              <div className="w-[1020px] px-[20px] flex flex-row justify-between">
                <div className="w-[450px] h-[100px] mt-[30px] flex flex-row justify-between">
                  <div
                    className="w-[100px] h-[100px] relative"
                    style={{
                      backgroundImage: `url(${goods9})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  ></div>
                  <div>
                    <p className="h-[36px] text-sm w-[335px] break-keep mt-[5px] cursor-pointer flex items-end">
                      [한정기획] 눅스 윌 프로디쥬스 멀티 드라이 오일 100ml 기획 (+프리미엄 우드 괄사)
                    </p>
                    <div className="w-[335px] flex flex-row mt-[5px] items-center">
                      <div className="flex flex-row items-baseline">
                        <p className="text-sm ml-[7px] text-[#e02020] font-semibold">
                          <span className="text-sm">52,000</span>원~
                        </p>
                      </div>
                    </div>
                    <div className="w-[335px] flex flex-row mt-[5px]"></div>
                  </div>
                </div>

                <div className="w-[450px] h-[100px] mt-[30px] flex flex-row justify-between">
                  <div
                    className="w-[100px] h-[100px] relative"
                    style={{
                      backgroundImage: `url(${goods10})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  ></div>
                  <div>
                    <p className="h-[36px] text-sm w-[335px] break-keep mt-[5px] cursor-pointer flex items-end">
                      눅스 윌 프로디쥬스 멀티 네롤리 오일 100ml 기획 (+우드 괄사 증정)
                    </p>
                    <div className="w-[335px] flex flex-row mt-[5px] items-center">
                      <div className="flex flex-row items-baseline">
                        <p className="text-xs line-through font-semibold text-[#a9a9a9]">52,000원</p>
                        <p className="text-sm ml-[7px] text-[#e02020] font-semibold">
                          <span className="text-sm">46,800</span>원
                        </p>
                      </div>
                    </div>
                    <div className="w-[335px] flex flex-row mt-[5px]">
                      <div className="w-[40px] h-[18px] rounded-[9px] bg-[#f65c60] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                        세일
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div
                className="w-[1020px] h-[400px] relative"
                style={{
                  backgroundImage: `url(${brand6})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                <div class="bg-custom-gradient absolute w-[1020px] h-[400px] top-0 left-0 cursor-pointer"></div>
                <div className="absolute top-[40%] left-[42%] flex flex-col items-center cursor-pointer">
                  <strong
                    className="text-[28px] text-[#fff] cursor-pointer"
                    style={{ textShadow: '0 2px 12px rgba(0, 0, 0, .25)' }}
                  >
                    유시몰
                  </strong>
                  <span
                    className="text-sm text-[#fff] flex gap-1 items-center"
                    style={{ textShadow: '0 0 4px rgba(0, 0, 0, .5)' }}
                  >
                    <img className="w-[16px] h-[16px]" src={like} alt="like" />
                    1,921명이 좋아합니다.
                  </span>
                </div>
              </div>
              <div className="w-[1020px] px-[20px] flex flex-row justify-between">
                <div className="w-[450px] h-[100px] mt-[30px] flex flex-row justify-between">
                  <div
                    className="w-[100px] h-[100px] relative"
                    style={{
                      backgroundImage: `url(${goods11})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  ></div>
                  <div>
                    <p className="h-[36px] text-sm w-[335px] break-keep mt-[5px] cursor-pointer flex items-end">
                      유시몰 화이트닝 치약 106g+20g 기획
                    </p>
                    <div className="w-[335px] flex flex-row mt-[5px] items-center">
                      <div className="flex flex-row items-baseline">
                        <p className="text-xs line-through font-semibold text-[#a9a9a9]">15,900원</p>
                        <p className="text-sm ml-[7px] text-[#e02020] font-semibold">
                          <span className="text-sm">12,900</span>원
                        </p>
                      </div>
                    </div>
                    <div className="w-[335px] flex flex-row mt-[5px]">
                      {' '}
                      <div className="w-[40px] h-[18px] rounded-[9px] bg-[#f65c60] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                        세일
                      </div>
                      <div className="w-[60px] h-[18px] rounded-[9px] bg-[#f374b7] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                        오늘드림
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-[450px] h-[100px] mt-[30px] flex flex-row justify-between">
                  <div
                    className="w-[100px] h-[100px] relative"
                    style={{
                      backgroundImage: `url(${goods12})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  ></div>
                  <div>
                    <p className="h-[36px] text-sm w-[335px] break-keep mt-[5px] cursor-pointer flex items-end">
                      유시몰 화이트닝 퍼플코렉터 미백 치약 106g
                    </p>
                    <div className="w-[335px] flex flex-row mt-[5px] items-center">
                      <div className="flex flex-row items-baseline">
                        <p className="text-xs line-through font-semibold text-[#a9a9a9]">16,900원</p>
                        <p className="text-sm ml-[7px] text-[#e02020] font-semibold">
                          <span className="text-sm">13,900</span>원
                        </p>
                      </div>
                    </div>
                    <div className="w-[335px] flex flex-row mt-[5px]">
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
            </div>

            <div>
              <div
                className="w-[1020px] h-[400px] relative"
                style={{
                  backgroundImage: `url(${brand7})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                <div class="bg-custom-gradient absolute w-[1020px] h-[400px] top-0 left-0 cursor-pointer"></div>
                <div className="absolute top-[40%] left-[42%] flex flex-col items-center cursor-pointer">
                  <strong
                    className="text-[28px] text-[#fff] cursor-pointer"
                    style={{ textShadow: '0 2px 12px rgba(0, 0, 0, .25)' }}
                  >
                    코카콜라
                  </strong>
                  <span
                    className="text-sm text-[#fff] flex gap-1 items-center"
                    style={{ textShadow: '0 0 4px rgba(0, 0, 0, .5)' }}
                  >
                    <img className="w-[16px] h-[16px]" src={like} alt="like" />
                    69명이 좋아합니다.
                  </span>
                </div>
              </div>
              <div className="w-[1020px] px-[20px] flex flex-row justify-between">
                <div className="w-[450px] h-[100px] mt-[30px] flex flex-row justify-between">
                  <div
                    className="w-[100px] h-[100px] relative"
                    style={{
                      backgroundImage: `url(${goods13})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  ></div>
                  <div>
                    <p className="h-[36px] text-sm w-[335px] break-keep mt-[5px] cursor-pointer flex items-end">
                      [본사직영] 환타 제로 오렌지 355ml*24캔+라이즈포토엽서 증정
                    </p>
                    <div className="w-[335px] flex flex-row mt-[5px] items-center">
                      <p className="text-xs line-through font-semibold text-[#a9a9a9]">21,300원</p>
                      <div className="flex flex-row items-baseline">
                        <p className="text-sm ml-[7px] text-[#e02020] font-semibold">
                          <span className="text-sm">17,040</span>원
                        </p>
                      </div>
                    </div>
                    <div className="w-[335px] flex flex-row mt-[5px]">
                      <div className="w-[40px] h-[18px] rounded-[9px] bg-[#9bce26] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                        쿠폰
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-[450px] h-[100px] mt-[30px] flex flex-row justify-between">
                  <div
                    className="w-[100px] h-[100px] relative"
                    style={{
                      backgroundImage: `url(${goods14})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  ></div>
                  <div>
                    <p className="h-[36px] text-sm w-[335px] break-keep mt-[5px] cursor-pointer flex items-end">
                      [본사직영] 환타 제로 포도 355ml*24캔+라이즈포토엽서 증정
                    </p>
                    <div className="w-[335px] flex flex-row mt-[5px] items-center">
                      <div className="flex flex-row items-baseline">
                        <p className="text-xs line-through font-semibold text-[#a9a9a9]">21,300원</p>
                        <p className="text-sm ml-[7px] text-[#e02020] font-semibold">
                          <span className="text-sm">17,040</span>원
                        </p>
                      </div>
                    </div>
                    <div className="w-[335px] flex flex-row mt-[5px]">
                      <div className="w-[40px] h-[18px] rounded-[9px] bg-[#9bce26] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                        쿠폰
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div
                className="w-[1020px] h-[400px] relative"
                style={{
                  backgroundImage: `url(${brand8})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                <div class="bg-custom-gradient absolute w-[1020px] h-[400px] top-0 left-0 cursor-pointer"></div>
                <div className="absolute top-[40%] left-[42%] flex flex-col items-center cursor-pointer">
                  <strong
                    className="text-[28px] text-[#fff] cursor-pointer"
                    style={{ textShadow: '0 2px 12px rgba(0, 0, 0, .25)' }}
                  >
                    페리페라
                  </strong>
                  <span
                    className="text-sm text-[#fff] flex gap-1 items-center"
                    style={{ textShadow: '0 0 4px rgba(0, 0, 0, .5)' }}
                  >
                    <img className="w-[16px] h-[16px]" src={like} alt="like" />
                    19,457명이 좋아합니다.
                  </span>
                </div>
              </div>
              <div className="w-[1020px] px-[20px] flex flex-row justify-between">
                <div className="w-[450px] h-[100px] mt-[30px] flex flex-row justify-between">
                  <div
                    className="w-[100px] h-[100px] relative"
                    style={{
                      backgroundImage: `url(${goods15})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  ></div>
                  <div>
                    <p className="h-[36px] text-sm w-[335px] break-keep mt-[5px] cursor-pointer flex items-end">
                      [기획/단품] 페리페라 잉크 무드 글로이틴트
                    </p>
                    <div className="w-[335px] flex flex-row mt-[5px] items-center">
                      <p className="text-xs line-through font-semibold text-[#a9a9a9]">11,000원</p>
                      <div className="flex flex-row items-baseline">
                        <p className="text-sm ml-[7px] text-[#e02020] font-semibold">
                          <span className="text-sm">8,500</span>원
                        </p>
                      </div>
                    </div>
                    <div className="w-[335px] flex flex-row mt-[5px]">
                      <div className="w-[40px] h-[18px] rounded-[9px] bg-[#9bce26] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                        쿠폰
                      </div>
                      <div className="w-[60px] h-[18px] rounded-[9px] bg-[#f374b7] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                        오늘드림
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-[450px] h-[100px] mt-[30px] flex flex-row justify-between">
                  <div
                    className="w-[100px] h-[100px] relative"
                    style={{
                      backgroundImage: `url(${goods16})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  ></div>
                  <div>
                    <p className="h-[36px] text-sm w-[335px] break-keep mt-[5px] cursor-pointer flex items-end">
                      페리페라 스피디 스키니 브로우
                    </p>
                    <div className="w-[335px] flex flex-row mt-[5px] items-center">
                      <div className="flex flex-row items-baseline">
                        <p className="text-sm ml-[7px] text-[#e02020] font-semibold">
                          <span className="text-sm">6,000</span>원~
                        </p>
                      </div>
                    </div>
                    <div className="w-[335px] flex flex-row mt-[5px]"></div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div
                className="w-[1020px] h-[400px] relative"
                style={{
                  backgroundImage: `url(${brand9})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                <div class="bg-custom-gradient absolute w-[1020px] h-[400px] top-0 left-0 cursor-pointer"></div>
                <div className="absolute top-[40%] left-[42%] flex flex-col items-center cursor-pointer">
                  <strong
                    className="text-[28px] text-[#fff] cursor-pointer"
                    style={{ textShadow: '0 2px 12px rgba(0, 0, 0, .25)' }}
                  >
                    3CE
                  </strong>
                  <span
                    className="text-sm text-[#fff] flex gap-1 items-center"
                    style={{ textShadow: '0 0 4px rgba(0, 0, 0, .5)' }}
                  >
                    <img className="w-[16px] h-[16px]" src={like} alt="like" />
                    11,817명이 좋아합니다.
                  </span>
                </div>
              </div>
              <div className="w-[1020px] px-[20px] flex flex-row justify-between">
                <div className="w-[450px] h-[100px] mt-[30px] flex flex-row justify-between">
                  <div
                    className="w-[100px] h-[100px] relative"
                    style={{
                      backgroundImage: `url(${goods17})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  ></div>
                  <div>
                    <p className="h-[36px] text-sm w-[335px] break-keep mt-[5px] cursor-pointer flex items-end">
                      [6월 올영픽/민니PICK] 3CE 드롭 글로우 젤 + 하트쿠션 스마트톡 기획/단품 택1
                    </p>
                    <div className="w-[335px] flex flex-row mt-[5px] items-center">
                      <p className="text-xs line-through font-semibold text-[#a9a9a9]">18,000원</p>
                      <div className="flex flex-row items-baseline">
                        <p className="text-sm ml-[7px] text-[#e02020] font-semibold">
                          <span className="text-sm">16,200</span>원~
                        </p>
                      </div>
                    </div>
                    <div className="w-[335px] flex flex-row mt-[5px]">
                      <div className="w-[40px] h-[18px] rounded-[9px] bg-[#f65c60] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                        세일
                      </div>
                      <div className="w-[60px] h-[18px] rounded-[9px] bg-[#f374b7] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                        오늘드림
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-[450px] h-[100px] mt-[30px] flex flex-row justify-between">
                  <div
                    className="w-[100px] h-[100px] relative"
                    style={{
                      backgroundImage: `url(${goods18})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  ></div>
                  <div>
                    <p className="h-[36px] text-sm w-[335px] break-keep mt-[5px] cursor-pointer flex items-end">
                      [6월 올영픽/민니PICK] 3CE 블러 워터 틴트 + 실버미러 기획/단품 택 1
                    </p>
                    <div className="w-[335px] flex flex-row mt-[5px] items-center">
                      <div className="flex flex-row items-baseline">
                        <p className="text-xs line-through font-semibold text-[#a9a9a9]">18,000원</p>
                        <p className="text-sm ml-[7px] text-[#e02020] font-semibold">
                          <span className="text-sm">14,400</span>원~
                        </p>
                      </div>
                    </div>
                    <div className="w-[335px] flex flex-row mt-[5px]">
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
            </div>

            <div>
              <div
                className="w-[1020px] h-[400px] relative"
                style={{
                  backgroundImage: `url(${brand10})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                <div class="bg-custom-gradient absolute w-[1020px] h-[400px] top-0 left-0 cursor-pointer"></div>
                <div className="absolute top-[40%] left-[42%] flex flex-col items-center cursor-pointer">
                  <strong
                    className="text-[28px] text-[#fff] cursor-pointer"
                    style={{ textShadow: '0 2px 12px rgba(0, 0, 0, .25)' }}
                  >
                    바이오더마
                  </strong>
                  <span
                    className="text-sm text-[#fff] flex gap-1 items-center"
                    style={{ textShadow: '0 0 4px rgba(0, 0, 0, .5)' }}
                  >
                    <img className="w-[16px] h-[16px]" src={like} alt="like" />
                    13,536명이 좋아합니다.
                  </span>
                </div>
              </div>
              <div className="w-[1020px] px-[20px] flex flex-row justify-between">
                <div className="w-[450px] h-[100px] mt-[30px] flex flex-row justify-between">
                  <div
                    className="w-[100px] h-[100px] relative"
                    style={{
                      backgroundImage: `url(${goods19})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  ></div>
                  <div>
                    <p className="h-[36px] text-sm w-[335px] break-keep mt-[5px] cursor-pointer flex items-end">
                      [인보라 PICK/6월 올영픽]바이오더마 센시비오 H2O 500ml 더블 기획 (+대왕 화장솜 10매)
                    </p>
                    <div className="w-[335px] flex flex-row mt-[5px] items-center">
                      <p className="text-xs line-through font-semibold text-[#a9a9a9]">42,000원</p>
                      <div className="flex flex-row items-baseline">
                        <p className="text-sm ml-[7px] text-[#e02020] font-semibold">
                          <span className="text-sm">32,700</span>원
                        </p>
                      </div>
                    </div>
                    <div className="w-[335px] flex flex-row mt-[5px]">
                      <div className="w-[40px] h-[18px] rounded-[9px] bg-[#f65c60] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                        세일
                      </div>
                      <div className="w-[60px] h-[18px] rounded-[9px] bg-[#f374b7] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                        오늘드림
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-[450px] h-[100px] mt-[30px] flex flex-row justify-between">
                  <div
                    className="w-[100px] h-[100px] relative"
                    style={{
                      backgroundImage: `url(${goods20})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  ></div>
                  <div>
                    <p className="h-[36px] text-sm w-[335px] break-keep mt-[5px] cursor-pointer flex items-end">
                      [6월 올영픽/아일릿 이로하PICK]바이오더마 하이드라비오 토너 500ml 기획 (+양면 토너패드 50매)
                    </p>
                    <div className="w-[335px] flex flex-row mt-[5px] items-center">
                      <div className="flex flex-row items-baseline">
                        <p className="text-xs line-through font-semibold text-[#a9a9a9]">38,000원</p>
                        <p className="text-sm ml-[7px] text-[#e02020] font-semibold">
                          <span className="text-sm">26,600</span>원
                        </p>
                      </div>
                    </div>
                    <div className="w-[335px] flex flex-row mt-[5px]">
                      <div className="w-[40px] h-[18px] rounded-[9px] bg-[#f65c60] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                        세일
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

export default Brand;
