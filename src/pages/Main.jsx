import Brand from '../components/Brand';
import Event from '../components/Event';
import MainCarousel from '../components/MainCarousel';
import New from '../components/New';
import OnlyOliveYoung from '../components/OnlyOliveYoung';
import Popular from '../components/Popular';
import React from 'react';
import Recommend from '../components/Recommend';
import Taste from '../components/Taste';
import ad1 from '../resorces/images/ad1.jpg';
import ad2 from '../resorces/images/ad2.jpg';
import bioderma from '../resorces/images/bioderma.png';
import customer from '../resorces/images/customer.png';
import download from '../resorces/images/download.png';
import gift from '../resorces/images/gift.jpg';
import kissme from '../resorces/images/kissme.png';
import more from '../resorces/images/more.png';
import offlineCall from '../resorces/images/offline_tel.png';
import onlineCall from '../resorces/images/online_tel.png';

function Main(props) {
  return (
    <div className="flex flex-col gap-[40px] items-center">
      <MainCarousel />
      <div
        className="w-[1020px] h-[102px] cursor-pointer"
        style={{
          backgroundImage: `url(${gift})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
      <Recommend />

      <div className="w-[1020px] h-[315px] flex flex-col items-center">
        <h1 className="text-[26px] font-bold mt-[50px] mb-[8px]">Weekly Special</h1>
        <div className="w-[1020px] flex flex-row justify-between">
          <div
            className="w-[500px] h-[227px] rounded-md relative cursor-pointer"
            style={{
              backgroundImage: `url(${kissme})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="absolute left-[28px] top-[65px]">
              <h2 className="text-[21px] font-bold">
                여름엔 키스미!
                <br />
                번짐없이 퍼펙트 픽싱
              </h2>
              <p className="mt-[15px]">#1+1기획&한정특가</p>
            </div>
          </div>
          <div
            className="w-[500px] h-[227px] rounded-md relative cursor-pointer"
            style={{
              backgroundImage: `url(${bioderma})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="absolute left-[28px] top-[65px]">
              <h2 className="text-[21px] font-bold">
                건강한 여름 피부
                <br />
                클렌징 치트키
              </h2>
              <p className="mt-[15px]">#바이오더마 클렌징워터</p>
            </div>
          </div>
        </div>
      </div>

      <Event />
      <OnlyOliveYoung />

      <div className="w-[1020px] flex flex-col items-center mt-[80px]">
        <h1 className="flex gap-2 text-[26px] font-bold items-center">
          MD가 추천해요!{' '}
          <div className="h-[23px] bg-[#f0f1f4] text-[#757d86] text-sm font-bold py-[3px] px-[7px]">AD</div>
        </h1>
        <div className="flex flex-row mt-[30px] ">
          <div className="w-[500px] flex flex-row justify-between mr-[20px]">
            <div
              className="w-[175px] h-[175px] relative cursor-pointer"
              style={{
                backgroundImage: `url(${ad1})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            ></div>
            <div className="w-[300px] flex flex-col gap-1 justify-center">
              <p className="text-sm text-[#777] font-bold cursor-pointer">비비안</p>
              <p className="h-[40px] text-sm w-[270px] break-keep custom-ellipsis mt-[8px] cursor-pointer">
                [6월 올영픽] 비비안 노라인 햄팬티 2매입 (블랙/베이지)
              </p>
              <p className="text-sm line-through font-semibold text-[#a9a9a9]">20,000원</p>
              <p className="text-sm text-[#e02020] font-semibold">
                <span className="text-xl">17,500</span>원 ~
              </p>
              <div className="h-[18px] flex flex-row justify-start">
                <div className="w-[40px] h-[18px] rounded-[9px] bg-[#f65c60] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                  세일
                </div>
                <div className="w-[40px] h-[18px] rounded-[9px] bg-[#9bce26] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                  쿠폰
                </div>
                <div className="w-[60px] h-[18px] rounded-[9px] bg-[#f374b7] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                  오늘드림
                </div>
              </div>
            </div>
          </div>
          <div className="w-[500px] flex flex-row justify-between">
            <div
              className="w-[175px] h-[175px] relative cursor-pointer"
              style={{
                backgroundImage: `url(${ad2})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            ></div>
            <div className="w-[300px] flex flex-col gap-1 justify-center">
              <p className="text-sm text-[#777] font-bold cursor-pointer">페리페라</p>
              <p className="h-[40px] text-sm w-[270px] break-keep custom-ellipsis mt-[8px] cursor-pointer">
                [NEW 로즈닝] 페리페라 잉크 더 에어리벨벳
              </p>
              <p className="text-sm line-through font-semibold text-[#a9a9a9]">10,000원</p>
              <p className="text-sm text-[#e02020] font-semibold">
                <span className="text-xl">7,520</span>원 ~
              </p>
              <div className="h-[18px] flex flex-row justify-start">
                <div className="w-[40px] h-[18px] rounded-[9px] bg-[#f65c60] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                  세일
                </div>
                <div className="w-[40px] h-[18px] rounded-[9px] bg-[#9bce26] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                  쿠폰
                </div>
                <div className="w-[60px] h-[18px] rounded-[9px] bg-[#f374b7] text-[#fff] text-xs justify-center leading-[7px] flex items-center">
                  오늘드림
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Taste />
      <New />
      <Brand />
      <Popular />

      <div className="w-[1020px] min-h-[246px] mt-[60px] border-t border-[#000] flex flex-row justify-between">
        <div className="flex flex-col mt-[10px]">
          <div className="h-[60px] flex flex-row border-b items-center">
            <h1 className="w-[95px] text-lg font-bold">공지사항</h1>
            <div className="w-[545px] flex flex-row justify-between">
              <span className="text-sm text-[#666]">새로운 소식이 없어요</span>
              <a href="*" className="text-sm font-bold text-[#888] flex flex-row gap-1 items-center">
                더보기 <img className="w-[7px] h-[11px]" src={more} alt="more" />
              </a>
            </div>
          </div>
          <div className="w-[640px] flex flex-row pt-[35px]">
            <h1 className="w-[95px] text-lg font-bold">
              고객센터
              <br />
              이용안내
            </h1>
            <div className="w-[545px] flex flex-row justify-between">
              <div>
                <h2 className="mb-[3px] text-[#888] text-sm font-bold">온라인몰 고객센터</h2>
                <div
                  className="w-[145px] h-[22px]"
                  style={{
                    backgroundImage: `url(${onlineCall})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                  }}
                ></div>
                <h2 className="mb-[3px] text-[#888] text-sm font-bold mt-[10px]">매장 고객센터</h2>
                <div
                  className="w-[145px] h-[22px]"
                  style={{
                    backgroundImage: `url(${offlineCall})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                  }}
                ></div>
              </div>
              <div>
                <h3 className="mb-[5px] font-bold text-sm">고객센터 운영시간 [평일 09:00-18:00]</h3>
                <p className="text-[#888] text-sm">
                  주말 및 공휴일은 1:1문의하기를 이용해주세요.
                  <br />
                  업무가 시작되면 바로 처리해드립니다.
                </p>
                <div className="flex flex-row gap-2 mt-[15px]">
                  <button className="w-[140px] h-[60px] bg-[#aaa] text-[#fff] text-sm font-bold flex flex-row justify-center items-center gap-2">
                    <div
                      className="w-[22px] h-[20px]"
                      style={{
                        backgroundImage: `url(${customer})`,
                        backgroundPosition: 'top',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                      }}
                    ></div>
                    1:1 문의하기
                  </button>
                  <button className="w-[140px] h-[60px] bg-[#aaa] text-[#fff] text-sm font-bold flex flex-row justify-center items-center gap-2">
                    <div
                      className="w-[22px] h-[20px]"
                      style={{
                        backgroundImage: `url(${customer})`,
                        backgroundPosition: 'bottom',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                      }}
                    ></div>
                    자주하는 질문
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-[340px] h-[235px] mt-[10px]"
          style={{
            backgroundImage: `url(${download})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
      </div>
    </div>
  );
}
export default Main;
