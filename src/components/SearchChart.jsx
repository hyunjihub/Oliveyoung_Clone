import React from 'react';
import down from '../resorces/images/down.svg';
import up from '../resorces/images/up.svg';

function SearchChart({ word, rank }) {
  return (
    <div className="w-[100%] flex flex-row items-center">
      <p className="min-w-[24px] text-sm text-[#131518] leading-[34px]">{rank + 1}</p>
      <p className="text-sm text-[#131518] grow">{word.searchWord}</p>
      <div>
        {word.prev === 'up' ? (
          <img src={up} alt="up" />
        ) : word.prev === 'down' ? (
          <img src={down} alt="down" />
        ) : word.prev === 'keep' ? (
          <span className="text-[11px] text-[#666]">─</span>
        ) : (
          <span className="text-[11px] text-[#c9cdd2]">NEW</span>
        )}
      </div>
    </div>
  );
}
export default SearchChart;
