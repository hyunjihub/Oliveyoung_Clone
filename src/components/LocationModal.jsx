import React from 'react';

function LocationModal({ locationHover }) {
  return (
    <div
      className={
        'w-[210px] bg-[#ffffff] absolute z-10 top-10 left-0 border border-[#d5d5d5] px-[15px] py-[12px] rounded-[5px] shadow-md' +
        (locationHover ? ' visible' : ' invisible')
      }
      style={{ zIndex: '20' }}
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
          left: '30px',
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
          left: '30px',
        }}
      ></div>
      <p className="text-xs text-[#000] font-medium">서울 중구 한강대로 405</p>
    </div>
  );
}
export default LocationModal;
