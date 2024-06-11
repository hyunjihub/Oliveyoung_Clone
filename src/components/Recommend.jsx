import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/title.css';

import React, { useRef, useState } from 'react';

import Slider from 'react-slick';
import bag from '../resorces/images/bag.png';
import goods1 from '../resorces/images/goods1.jpg';
import goods2 from '../resorces/images/goods2.jpg';
import more from '../resorces/images/more.png';

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
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const [settings, setSettings] = useState({
    dots: false,
    infinite: true,
    speed: 600,
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
    <div className="w-[1020px] slider-container flex flex-row">
      <div className="w-[510px] h-[488px] flex flex-col">
        <h1 className="w-[510px] text-left px-[20px] text-2xl font-bold">요즘 주목 받는 상품</h1>
        <button
          className="w-[510px] px-[20px] text-[15px] text-[#aaa] font-bold flex flex-row justify-end gap-2 items-center mb-[40px]"
          href="*"
        >
          더보기 <img className="w-[7px] h-[11px]" src={more} alt="more" />
        </button>
        <Slider ref={sliderRef} {...settings}>
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
              </div>
            </div>
          </div>

          <div>ee</div>
          <div>ss</div>
          <div>hh</div>
        </Slider>
        <NextArrow onClick={handleNextClick} currentSlide={currentSlide} />
      </div>
      <div>ekek</div>
    </div>
  );
};

export default MainCarousel;
