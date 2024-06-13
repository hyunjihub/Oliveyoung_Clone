import '../styles/header.css';

import React, { useEffect, useState } from 'react';

import LocationModal from './LocationModal';
import Recent from './Recent';
import SearchModal from './SearchModal';
import StoreModal from './StoreModal';
import dream from '../resorces/images/dreamIcon.png';
import logo from '../resorces/images/logo.png';
import recent1 from '../resorces/images/recent1.jpg';
import recent2 from '../resorces/images/recent2.jpg';
import recent3 from '../resorces/images/recent3.jpg';
import recent4 from '../resorces/images/recent4.jpg';
import recent5 from '../resorces/images/recent5.jpg';
import recent6 from '../resorces/images/recent6.jpg';
import search from '../resorces/images/search.svg';
import { useNavigate } from 'react-router-dom';

function Header(props) {
  const navigate = useNavigate();
  const [storeHover, setStoreHover] = useState(false);
  const [locationHover, setLocationHover] = useState(true);
  const [recentClick, setRecentClick] = useState(false);
  const [searchClick, setSearchClick] = useState(false);

  useEffect(() => {
    // 10초 후에 상태를 false로 변경
    const timer = setTimeout(() => {
      setLocationHover(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const chart = [
    { searchWord: '틴트', prev: 'up' },
    { searchWord: '생리대', prev: 'keep' },
    { searchWord: '염색', prev: 'up' },
    { searchWord: '괄사', prev: 'up' },
    { searchWord: '힌스', prev: 'up' },
    { searchWord: '선스틱', prev: 'up' },
    { searchWord: '증정', prev: 'new' },
    { searchWord: '핸드크림', prev: 'up' },
    { searchWord: '수분크림', prev: 'down' },
    { searchWord: '아이브로우', prev: 'up' },
  ];

  const recent = [
    {
      img: recent1,
      title: '[6/12 하루특가] 에스쁘아 톤페어링 치크 4 Colors',
      brand: '에스쁘아',
      isBest: false,
      cost: '26,000',
      otherCost: false,
      discount: '19,500',
      otherDiscount: true,
      isSale: true,
      isDelivery: true,
      isCoupon: true,
      isBonus: true,
    },
    {
      img: recent2,
      title: '[NEW/단독기획] 어뮤즈 듀 틴트 기획/단품',
      brand: '어뮤즈',
      isBest: true,
      cost: '20,000',
      otherCost: false,
      discount: '17,000',
      otherDiscount: true,
      isSale: true,
      isDelivery: true,
      isCoupon: false,
      isBonus: false,
    },
    {
      img: recent3,
      title: '[한정 기획]센카 퍼펙트 휩 페이셜 워시 에이 150g+150g 대용량 2입 기획',
      brand: '센카',
      isBest: true,
      cost: '17,600',
      otherCost: false,
      discount: '11,900',
      otherDiscount: false,
      isSale: true,
      isDelivery: true,
      isCoupon: false,
      isBonus: false,
    },
    {
      img: recent4,
      title: '[6월 올영픽/단독기획] 에스쁘아 비벨벳 커버쿠션 뉴클래스 기획 (본품+리필)',
      brand: '에스쁘아',
      isBest: true,
      cost: '38,000',
      otherCost: false,
      discount: '28,500',
      otherDiscount: true,
      isSale: true,
      isDelivery: true,
      isCoupon: false,
      isBonus: true,
    },
    {
      img: recent5,
      title: '[헬로키티에디션]바닐라코 프라임 프라이머 피니쉬 파우더(+브러쉬)(단품/기획)',
      brand: '바닐라코',
      isBest: true,
      cost: '22000',
      otherCost: false,
      discount: '17,600',
      otherDiscount: true,
      isSale: false,
      isDelivery: true,
      isCoupon: true,
      isBonus: false,
    },
    {
      img: recent6,
      title: '[6월 올영픽/아일릿 이로하PICK]바이오더마 하이드라비오 토너 500ml 기획 (+양면 토너패드 50매)',
      brand: '바이오더마',
      isBest: true,
      cost: '38,000',
      otherCost: false,
      discount: '26,600',
      otherDiscount: true,
      isSale: true,
      isDelivery: true,
      isCoupon: false,
      isBonus: false,
    },
  ];

  const handleLocationMouseOver = (e) => {
    e.stopPropagation();
    setLocationHover(true);
  };

  const handleLocationMouseOut = () => {
    setLocationHover(false);
  };

  const handleStoreMouseOver = (e) => {
    e.stopPropagation();
    setStoreHover(true);
  };

  const handleStoreMouseOut = () => {
    setStoreHover(false);
  };

  const handleRecentClick = () => {
    setRecentClick(true);
    setLocationHover(false);
  };

  return (
    <div className="flex flex-row justify-center">
      <div className="">
        <ul className="py-[1px] h-[30px] flex flex-row justify-end items-center text-[#333333]">
          <li className="text-xs font-bold">BABY OLIVE 클론코딩</li>
          <li className="text-xs hover:cursor-pointer border-r px-[10px]">로그아웃</li>
          <li className="text-xs hover:cursor-pointer border-r px-[10px]">마이페이지</li>
          <li className="text-xs hover:cursor-pointer border-r px-[10px]">
            장바구니
            <span className="text-xs text-[#f27370] font-bold hover:cursor-pointer">(3)</span>
          </li>
          <li className="text-xs hover:cursor-pointer border-r px-[10px]">주문배송</li>
          <li className="text-xs hover:cursor-pointer border-r px-[10px]">고객센터</li>
          <li className="text-xs hover:cursor-pointer border-r px-[10px]">매장안내</li>
          <li className="text-xs hover:cursor-pointer px-[10px]">Global</li>
        </ul>
        <div className="w-[1020px] h-[90px] flex flex-row justify-between items-center">
          <img
            className="w-[246px] h-[40px] hover:cursor-pointer"
            src={logo}
            alt="logo"
            onClick={() => navigate('/')}
          />
          <div className="relative">
            <input
              className="w-[340px] h-[38px] px-[14px] rounded-3xl border border-[#82DC28] outline-none custom-placeholder text-sm"
              type="text"
              placeholder="상품, 브랜드, 성분 검색"
              onFocus={() => setSearchClick(true)}
            />
            <div className="absolute right-[15px] top-0 bottom-0 flex items-center hover:cursor-pointer">
              <img className="w-[20px]" src={search} alt="search" />
            </div>
            <SearchModal searchClick={searchClick} chart={chart} setSearchClick={setSearchClick} />
          </div>
          <ul className="flex flex-row text-sm">
            <li className="text-[#e95294] flex flex-row items-center gap-1 hover:cursor-pointer hover:underline hover:underline-offset-[5px] decoration-2 decoration-black relative border-r px-[15px]">
              <p onMouseOver={handleLocationMouseOver} onMouseOut={handleLocationMouseOut}>
                오늘드림
              </p>{' '}
              <img src={dream} alt="delivery" className="w-[22px]" />
              <LocationModal locationHover={locationHover} />
            </li>
            <li className="flex flex-row gap-1 items-center hover:cursor-pointer hover:underline hover:underline-offset-[5px] decoration-2 relative border-r px-[15px]">
              <p onMouseOver={handleStoreMouseOver} onMouseOut={handleStoreMouseOut}>
                관심 매장소식
              </p>
              <div className="w-[7px] h-[4px] bg-arrow-hover"></div>
              <StoreModal storeHover={storeHover} />
            </li>
            <li
              className="flex flex-row gap-1 items-center hover:cursor-pointer px-[15px] relative"
              onClick={handleRecentClick}
            >
              최근 본 상품<div className="w-[7px] h-[4px] bg-arrow-active"></div>
              {recentClick && <Recent recent={recent} setRecentClick={setRecentClick} recentClick={recentClick} />}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Header;
