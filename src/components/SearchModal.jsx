import React, { useEffect, useRef } from 'react';

import RecentSearch from './RecentSearch';
import SearchChart from './SearchChart';

function SearchModal({ searchClick, setSearchClick, chart }) {
  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setSearchClick(false);
      }
    }

    if (searchClick) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [searchClick, setSearchClick]);

  return (
    <div
      ref={modalRef}
      className={
        'w-[520px] bg-[#ffffff] absolute z-10 top-11 left-0 border border-[#d5d5d5] px-[15px] py-[29px] rounded-[20px] flex flex-row justify-center' +
        (searchClick ? ' visible' : ' invisible')
      }
      style={{ zIndex: '20' }}
    >
      <div className="flex flex-col items-start w-[50%] px-[20px] border-r">
        <p className="text-base font-bold text-[#131518] mb-[11px]">최근 검색어</p>
        <div className="w-[100%] flex flex-col gap-1 min-h-[350px]">
          <RecentSearch />
        </div>
        <div className="flex flex-row gap-2">
          <button className="text-xs text-[#99a1a8]">전체 삭제</button>
          <button className="text-xs text-[#99a1a8]">검색어 저장 끄기</button>
        </div>
      </div>
      <div className="flex flex-col w-[50%] px-[20px]">
        <p className="text-base font-bold text-[#131518] mb-[11px]">급상승 검색어</p>
        <div className="w-[100%] flex flex-col min-h-[350px]">
          {chart.map((item, index) => (
            <SearchChart word={item} rank={index} />
          ))}
        </div>
        <p className="text-xs text-[#99a1a8]">13:40 기준</p>
      </div>
    </div>
  );
}
export default SearchModal;
