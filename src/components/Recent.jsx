import '../styles/paging.css';

import React, { useEffect, useRef, useState } from 'react';

import Pagination from 'react-js-pagination';
import deleteIcon from '../resorces/images/delete.png';
import more from '../resorces/images/more.png';

function Recent({ recent, recentClick, setRecentClick }) {
  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 4;

  const indexOfLastItem = activePage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = recent.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setRecentClick(false);
      }
    }

    if (recentClick) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [recentClick, setRecentClick]);

  return (
    <div
      ref={modalRef}
      className="w-[1020px] h-[530px] bg-[#ffffff] absolute top-10 right-0 border border-[#d5d5d5] pt-[15px] pb-[20px] flex flex-col items-center"
      style={{ zIndex: '200' }}
    >
      <div
        className="absolute border-solid border-white"
        style={{
          borderWidth: '0px 8px 10px 10px',
          borderColor: '#FFFFFF transparent',
          display: 'block',
          width: '0',
          zIndex: '1',
          top: '-9.5px',
          right: '30px',
        }}
      ></div>
      <div
        className="absolute border-solid border-white"
        style={{
          borderWidth: '0px 8px 10px 10px',
          borderColor: '#d5d5d5 transparent',
          display: 'block',
          width: '0',
          zIndex: '0',
          top: '-11px',
          right: '30px',
        }}
      ></div>
      <div className="w-[980px] h-[40px] flex justify-between items-center mb-[10px]">
        <p className="text-sm font-bold">
          전체<span className="text-sm text-[#9bce26] font-bold">6</span>개
        </p>
        <button className="h-[24px] flex gap-1 items-center text-xs border px-[7px]">
          <img src={deleteIcon} alt="delete" />
          전체 삭제
        </button>
      </div>
      <ul className="w-[980px] flex justify-start border-t">
        {currentItems.map((item, index) => (
          <li key={index}>
            <div className="w-[240px] h-[400px] pt-[15px] px-[20px]">
              <div className="w-[200px] mb-[10px] flex justify-end">
                <img className="w-[11px] h-[11px]" src={deleteIcon} alt="delete" />
              </div>

              <div
                className="w-[200px] h-[200px] relative mb-[20px]"
                style={{
                  backgroundImage: `url(${item.img})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                {item.isBest && (
                  <div className="absolute top-[7px] left-[7px] w-[48px] h-[48px] rounded-full bg-[#fff] border border-[#f05a5e] border-2 text-[#f05a5e] text-sm font-bold flex justify-center items-center">
                    베스트
                  </div>
                )}
              </div>
              <strong className="flex w-[200px] text-[#777] font-bold justify-center text-sm">{item.brand}</strong>
              <p className="h-[40px] text-sm w-[200px] break-keep custom-ellipsis mt-[8px] text-center">{item.title}</p>
              <div className="w-[200px] flex flex-row mt-[5px] justify-center items-center">
                <div className="flex flex-row items-baseline">
                  <p className="text-sm line-through font-semibold text-[#a9a9a9]">
                    {item.cost}
                    {item.otherCost ? '~' : ''}
                  </p>
                  <p className="text-sm ml-[7px] text-[#e02020] font-semibold">
                    <span className="text-xl">{item.discount}</span>원{item.otherDiscount ? '~' : ''}
                  </p>
                </div>
              </div>
              <div className="w-[200px] flex flex-row justify-center mt-[5px] mb-[10px]">
                {item.isSale && (
                  <div className="w-[40px] h-[18px] rounded-[9px] bg-[#f65c60] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                    세일
                  </div>
                )}
                {item.isCoupon && (
                  <div className="w-[40px] h-[18px] rounded-[9px] bg-[#9bce26] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                    쿠폰
                  </div>
                )}
                {item.isDelivery && (
                  <div className="w-[60px] h-[18px] rounded-[9px] bg-[#f374b7] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                    오늘드림
                  </div>
                )}
                {item.isBonus && (
                  <div className="w-[40px] h-[18px] rounded-[9px] bg-[#6fcff7] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                    증정
                  </div>
                )}
              </div>
              <a href="*" className="w-[200px] flex gap-1 justify-center items-center text-[#555] text-sm underline">
                추천상품 더보기
                <img className="w-[7px] h-[10px]" src={more} alt="more" />
              </a>
            </div>
          </li>
        ))}
      </ul>
      <Pagination
        activePage={activePage}
        itemsCountPerPage={itemsPerPage}
        totalItemsCount={recent.length}
        pageRangeDisplayed={3}
        onChange={handlePageChange}
        hideNavigation={true}
      />
    </div>
  );
}
export default Recent;
