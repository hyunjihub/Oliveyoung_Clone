import React, { useState } from 'react';

import logo from '../resorces/images/logo.png';

function Footer(props) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="mt-[40px] flex flex-col">
      <div
        className="border bg-[#f9f9f9] flex flex-row justify-center"
        style={{
          borderTop: '2px solid #aaa',
          borderBottom: '1px solid #ddd',
        }}
      >
        <div className="w-[1020px] py-[18px] flex flex-row justify-between items-center">
          <ul className="flex flex-row text-xs text-[#000]">
            <li className="pr-[20px] border-r px-[10px]">회사소개</li>
            <li className="px-[20px] border-r px-[10px]">채용안내</li>
            <li className="px-[20px] border-r px-[10px]">가맹점 개설문의</li>
            <li className="px-[20px] border-r px-[10px]">상품입점 및 제휴문의</li>
            <li className="px-[20px] border-r px-[10px]">사이버 감사실</li>
            <li className="px-[20px] ">고객센터</li>
          </ul>
          <select
            className="w-[235px] h-[30px] px-[10px] border border-[#e5e5e5] text-xs text-[#777]"
            value={selectedOption}
            onChange={handleSelectChange}
          >
            <option value="" disabled selected>
              CJ그룹 계열사 바로가기
            </option>
            <option className="pl-[10px]" value="option1">
              옵션 1
            </option>
            <option value="option2">옵션 2</option>
            <option value="option3">옵션 3</option>
          </select>
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <div className="relative w-[1020px] flex flex-row justify-between mt-[25px] pl-[236px]">
          <img className="absolute left-0 bottom-[50%] w-[146px] h-[24px]" src={logo} alt="logo" />
          <div className="flex flex-col">
            <h2 className="mb-[7px] text-xs font-medium">씨제이올리브영 주식회사</h2>
            <p className="text-xs text-[#777] leading-5">대표이사 : 이선정 | 사업자등록번호 : 809-81-01574</p>
            <div className="flex flex-row">
              <p className="text-xs text-[#777] leading-5">주소 : </p>
              <p className="text-xs text-[#777] leading-5">
                &nbsp; (04323) 서울특별시 용산구 한강대로 372, 24층 (동자동, KDB타워)
              </p>
            </div>
            <p className="text-xs text-[#777] leading-5">호스팅사업자 : CJ 올리브네트웍스</p>
            <p className="text-xs text-[#777] leading-5">통신판매업신고번호 : 2019-서울용산-1428</p>
            <p className="text-xs text-[#777] leading-5">이메일 : oliveweb@cj.net</p>
            <a href="*" className="text-xs text-[#000] leading-5 underline">
              사업자 정보 확인 &gt;{' '}
            </a>
          </div>
          <ul className="text-xs text-[#777] leading-5">
            <li>이용약관&#183;법적고지</li>
            <li className="text-[#333] font-bold">개인정보처리방침</li>
            <li>청소년보호방침</li>
            <li>영상정보처리기기 운영/관리 방침</li>
            <li>이메일무단수집거부</li>
          </ul>
          <div>
            <h2 className="mb-[7px] text-xs font-medium">하나은행 구매안전 서비스</h2>
            <p className="text-xs text-[#777] leading-5">
              올리브영은 현금 결제한 금액에 대해
              <br />
              하나은행과 채무지급보증 계약을체결
              <br />
              하여 안전한 거래를 보장하고 있습니다
            </p>
            <a href="*" className="text-xs text-[#000] leading-5 underline">
              서비스 가입사실 확인 &gt;{' '}
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-[20px] mb-[30px]">
        <div className="w-[1020px] text-[11px] text-[#777] pl-[236px]">
          올리브영 홈페이지에서 판매되는 상품 중에는 올리브영에 입점한 개별 판매자가 판매하는 상품이 포함되어 있습니다.
          개별 판매자의 판매 상품의 경우, 올리브영은 통신판매중개자로서 통신판매의 당사자가 아니며 판매자가 등록한
          상품정보 및 거래 정보 등에 대하여 책임을 부담하지 않습니다.
        </div>
      </div>
    </div>
  );
}
export default Footer;
