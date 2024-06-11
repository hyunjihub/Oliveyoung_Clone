import MainCarousel from '../components/MainCarousel';
import React from 'react';
import Recommend from '../components/Recommend';
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
        className="w-[1020px] h-[102px]"
        style={{
          backgroundImage: `url(${gift})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
      <Recommend />

      <div className="w-[1020px] h-[275px] flex flex-col items-center">
        <h1 className="text-[26px] font-bold mb-[8px]">Weekly Special</h1>
        <div className="w-[1020px] flex flex-row justify-between">
          <div
            className="w-[500px] h-[227px] rounded-md relative"
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
            className="w-[500px] h-[227px] rounded-md relative"
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
