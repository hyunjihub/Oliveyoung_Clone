import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/title.css';

import React, { useState } from 'react';

import Slider from 'react-slick';
import only1 from '../resorces/images/only1.jpg';
import only2 from '../resorces/images/only2.jpg';
import only3 from '../resorces/images/only3.jpg';
import only4 from '../resorces/images/only4.jpg';
import only5 from '../resorces/images/only5.jpg';
import only6 from '../resorces/images/only6.jpg';

const OnlyOliveYoung = () => {
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
    arrows: false,
    beforeChange: (current, next) => setActiveSlide(next),
  });

  const customPaging = (i) => (
    <div className={`custom-dot ${i === activeSlide ? 'active' : ''}`} onClick={() => slider.slickGoTo(i)}>
      {i + 1}
    </div>
  );

  return (
    <div className="w-[1020px] mt-[30px] slider-container flex flex-row">
      <div>
        <div className="w-[1020px] flex flex-col">
          <h1 className="w-[1020px] px-[20px] text-[26px] font-bold text-center mb-[25px] relative">
            오직 올리브영에서만
            <div className="custom-dots-container absolute right-0 top-3">
              {Array.from({ length: 2 }).map((_, i) => customPaging(i))}
            </div>
          </h1>

          <Slider ref={(slider) => setSlider(slider)} {...settings}>
            <div>
              <div className="w-[1020px] flex flex-row justify-between">
                <div className="w-[334px] flex flex-col items-center">
                  <div
                    className="w-[334px] h-[145px] rounded relative"
                    style={{
                      backgroundImage: `url(${only1})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    <div className="absolute flex flex-col top-[25%] left-[15px]">
                      <strong className="text-xl tracking-[-1px]">핫 빈티지 블루,</strong>
                      <strong className="text-xl tracking-[-1px]">오렌지 메이크업</strong>
                      <span className="text-sm tracking-[-1px]">1999' 빈티지 컬렉션</span>
                    </div>
                  </div>
                </div>
                <div className="w-[334px] flex flex-col items-center">
                  <div
                    className="w-[334px] h-[145px] rounded relative"
                    style={{
                      backgroundImage: `url(${only2})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    <div className="absolute flex flex-col top-[25%] left-[15px]">
                      <strong className="text-xl tracking-[-1px]">극강의 반짝임</strong>
                      <strong className="text-xl tracking-[-1px]">글리터 메이크업</strong>
                      <span className="text-sm tracking-[-1px]">영롱 끝판왕 컬러그램</span>
                    </div>
                  </div>
                </div>
                <div className="w-[334px] flex flex-col items-center">
                  <div
                    className="w-[334px] h-[145px] rounded relative"
                    style={{
                      backgroundImage: `url(${only3})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    <div className="absolute flex flex-col top-[25%] left-[15px]">
                      <strong className="text-xl tracking-[-1px]">한병으로 끝내는</strong>
                      <strong className="text-xl tracking-[-1px]">클렌즈샷 3종</strong>
                      <span className="text-sm tracking-[-1px]">#푸룬/자몽/애사비</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="w-[1020px] flex flex-row justify-between">
                <div className="w-[334px] flex flex-col items-center">
                  <div
                    className="w-[334px] h-[145px] rounded relative"
                    style={{
                      backgroundImage: `url(${only4})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    <div className="absolute flex flex-col top-[25%] left-[15px]">
                      <strong className="text-xl tracking-[-1px]">브링그린X배라</strong>
                      <strong className="text-xl tracking-[-1px]">콜라보 기획</strong>
                      <span className="text-sm tracking-[-1px]">장바구니쿠폰 추가할인</span>
                    </div>
                  </div>
                </div>
                <div className="w-[334px] flex flex-col items-center">
                  <div
                    className="w-[334px] h-[145px] rounded relative"
                    style={{
                      backgroundImage: `url(${only5})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    <div className="absolute flex flex-col top-[25%] left-[15px]">
                      <strong className="text-xl tracking-[-1px]">관리하는 올형위</strong>
                      <strong className="text-xl tracking-[-1px]">ID.FM 맨즈뷰티템</strong>
                      <span className="text-sm tracking-[-1px]">#1+1기획 출시</span>
                    </div>
                  </div>
                </div>
                <div className="w-[334px] flex flex-col items-center">
                  <div
                    className="w-[334px] h-[145px] rounded relative"
                    style={{
                      backgroundImage: `url(${only6})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    <div className="absolute flex flex-col top-[25%] left-[15px]">
                      <strong className="text-xl tracking-[-1px]">클렌징&썬케어</strong>
                      <strong className="text-xl tracking-[-1px]">콜라보 한정 기획</strong>
                      <span className="text-sm tracking-[-1px]">#최대 41%OFF</span>
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

export default OnlyOliveYoung;
