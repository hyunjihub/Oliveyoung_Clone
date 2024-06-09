import React from 'react';
import category from '../resorces/images/categoryIcon.png';

function Menu(props) {
  return (
    <div className="h-[47px] flex flex-row justify-center border-t border-b border-[#dddddd]">
      <div className="w-[1020px] flex flex-row items-center">
        <button className="w-[170px] h-[47px] border-l border-r border-[#dddddd] flex flex-row justify-start items-center gap-3 pl-[27px] font-bold text-[15px]">
          <img src={category} alt="menu" />
          카테고리
        </button>
        <ul className="pl-[55px] flex flex-row gap-10 font-bold">
          <li className="hover:text-[#f27370] hover:underline hover:underline-offset-[5px] decoration-2">오특</li>
          <li className="hover:text-[#f27370] hover:underline hover:underline-offset-[5px] decoration-2">랭킹</li>
          <li className="hover:text-[#f27370] hover:underline hover:underline-offset-[5px] decoration-2">헬스+</li>
          <li className="hover:text-[#f27370] hover:underline hover:underline-offset-[5px] decoration-2">LUXE EDIT</li>
          <li className="hover:text-[#f27370] hover:underline hover:underline-offset-[5px] decoration-2">기획전</li>
          <li className="hover:text-[#f27370] hover:underline hover:underline-offset-[5px] decoration-2">세일</li>
          <li className="hover:text-[#f27370] hover:underline hover:underline-offset-[5px] decoration-2">기프트카드</li>
          <li className="hover:text-[#f27370] hover:underline hover:underline-offset-[5px] decoration-2">
            멤버십/쿠폰
          </li>
          <li className="hover:text-[#f27370] hover:underline hover:underline-offset-[5px] decoration-2">이벤트</li>
        </ul>
      </div>
    </div>
  );
}
export default Menu;
