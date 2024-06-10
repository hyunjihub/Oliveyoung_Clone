import React from 'react';
import deleteIcon from '../resorces/images/delete.svg';

function RecentSearch({ search }) {
  return (
    <div className="w-[100%] py-[9px] flex flex-row justify-between items-center">
      <p className="text-sm text-[#131518]">마스크팩</p>
      <div>
        <img src={deleteIcon} alt="delete" />
      </div>
    </div>
  );
}
export default RecentSearch;
