import ReactCalender from "@/components/calendar";
import Link from "next/link";

const Page = () => {
  return (
    <div className="w-screen h-[500vh] flex justify-center text-2xl font-bold overflow-visible">
      <div className="w-[55%] py-32 flex flex-col gap-64">
        <div className="flex flex-col justify-center mb-[-200px]">
          <div className="text-center text-4xl">프로그램 신청 및 예약 확인</div>
        </div>
        <div className="relative">
          <div className="bg-[#FFF27F] w-[500px] h-[300px] rounded-[50%] mx-auto flex justify-center">
            <div className="mt-16 text-4xl">단체체험 프로그램</div>
          </div>
          <div className="border-2 border-[#E6E6E6] rounded-3xl w-[100%]  p-10 bg-white absolute mt-[-15%]">
            <div className="text-[#037AE7]">
              ※학생 수와 상황에 따라 프로그램이 변경될 수 있습니다.
            </div>
            <div className="flex flex-col gap-10 p-10 w-[90%]">
              <div className="flex justify-between gap-4">
                <div className="font-extrabold w-[20%]">대상</div>
                <div className="w-[80%]">초(3~6학년)·중·고 학교단체</div>
              </div>
              <div className="flex justify-between gap-4">
                <div className="font-extrabold w-[20%]">운영시간</div>
                <div className="w-[80%]">2024.2.5.(월) 10:00~</div>
              </div>
              <div className="flex justify-between gap-4">
                <div className="font-extrabold w-[20%]">인원</div>
                <div className="w-[80%]">최소 50명~최대 170명</div>
              </div>
              <div className="flex justify-between gap-4">
                <div className="font-extrabold w-[20%]">신청방법</div>
                <div className="w-[80%]">
                  홈페이지(
                  <Link href="/" className="text-blue-700">
                    www.gizi1968.kr
                  </Link>
                  ) 예약 접수, 담당자 협의 후 예약완료
                  <br />
                  ※단체교육문의: 051-250-8900, gizi1968@naver.com
                  <br />
                  ※별도의 회원가입 없이 전화번호 인증만으로 신청가능합니다.
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[400px] flex gap-8 z-50">
            <a href="groupinfo.pdf" download>
              <button className="px-10 py-8 bg-[#EEF7FD] rounded-3xl">
                프로그램 다운로드
              </button>
            </a>
            <a href="/canceinfo.hwp" download="cancelinfo.hwp">
              <button className="px-10 py-8 bg-[#EEF7FD] rounded-3xl">
                취소신청서 다운로드
              </button>
            </a>
          </div>
        </div>
        <div className="h-[500px] w-full">
          <table className="w-full border-collapse text-center border-4 rounded-3xl overflow-hidden bg-white">
            <thead className="bg-cyan-500">
              <tr className="h-24">
                <td className="bg-[#FFF27F]">프로그램 구성</td>
                <td className="bg-[#FFF8BC]">대상</td>
                <td className="bg-[#FFF27F]">교육시간</td>
                <td className="bg-[#FFF8BC]">
                  1인당 비용
                  <br />
                  <span>재료비 포함</span>
                </td>
              </tr>
            </thead>
            <tbody className="">
              <tr className="h-32">
                <td className="border-2">오전반</td>
                <td className="border-2">초(3~6학년)·중·고</td>
                <td className="border-2">
                  평일 오전
                  <br />
                  09:00~11:50
                </td>
                <td rowSpan={2} className="border-2">
                  <span className="line-through text-[#AEAEAE]">35,000원</span>
                  <br />
                  <span className="text-[#0075FF]">28,000원(단체할인가)</span>
                </td>
              </tr>
              <tr className="h-32">
                <td className="border-2">오후반</td>
                <td className="border-2">초(3~6학년)·중·고</td>
                <td className="border-2">
                  평일 오후
                  <br />
                  12:50~15:40
                </td>
              </tr>
              <tr className="h-32 rounded-b-3xl">
                <td className="border-2 rounded-bl-3xl">종일반</td>
                <td className="border-2">초(3~6학년)·중·고</td>
                <td className="border-2">
                  평일 종일
                  <br />
                  09:00~15:10
                </td>
                <td className="border-2">
                  <span className="line-through text-[#AEAEAE]">35,000원</span>
                  <br />
                  <span className="text-[#0075FF]">28,000원(단체할인가)</span>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="">
            <div className="ml-auto text-base w-[60%] text-right text-[#9E9E9E]">
              ※ 전반적인 물가상승으로 인하여 부득이하게 반일제의 경우
              28,000원으로 인상되었습니다.
              <br /> (단, 종일 체험료는 부담을 조금이라도 덜어드리기 위해서
              동일하게 유지하였습니다.)
            </div>
          </div>
          <div className="h-[70vh] flex flex-col justify-center gap-16 mt-40">
            <div className="h-[70%] rounded-3xl border-2 border-[#E1E1E1] p-10 bg-[#F9F9F9]">
              <div className="w-full h-full flex flex-col gap-6">
                <div className="px-10 py-4 rounded-full bg-[#E7E7E7] mr-auto">
                  이용시 유의사항
                </div>
                <div>
                  ① 기본프로그램 5개 운영되며, 학교 인원수가 많은 경우는
                  인원수에 따라 추가로 최대 9개까지 프로그램 편성하여
                  운영됩니다.
                </div>
                <div>
                  ② 전일제는 학생 1인당 2개(오전1, 오후1)의 프로그램, 반일제는
                  1개의 프로그램을 체험합니다.
                </div>
                <div>
                  ③ 전일제는 점심식사 장소를 제공해드립니다. (잔반과 쓰레기는
                  학교 또는 도시락 업체에서 처리, 반일제는 점심식사 장소제공
                  불가)
                </div>
                <div>④ 세부시간 및 프로그램 등은 협의 후 및 조정 가능</div>
              </div>
            </div>
            {/* <div className="flex justify-center">
              <button className="bg-[#FFF27F] px-14 py-5 rounded-2xl font-extrabold">
                신청접수
              </button>
            </div> */}
          </div>
          <div className="h-[70vh] flex flex-col justify-center gap-16 mt-40 mb-72">
            <div className="rounded-3xl border-2 border-[#E1E1E1] p-10 bg-[#F9F9F9]">
              <div className="w-full h-full flex flex-col gap-6">
                <div className="px-10 py-4 rounded-full bg-[#FF3B30] text-white mr-auto">
                  신청 전 필독사항
                </div>
                <div>
                  ① 예약취소는 30일 전까지 가능합니다. (※체험일로부터 30일 이내
                  취소 시 전체체험비용의 50% 위약금 발생)
                </div>
                <div>
                  ② ‘단체체험 취소 양식서’로만 예약취소를 받습니다. (담당자와
                  연락, 메일전송)
                </div>
                <div>③ 청약서는 최소 1달 전까진 전송해주세요.</div>
                <div>
                  ④ 프로그램 반 평성표는 최소 2주 전까지 전송해주세요. (※반드시
                  “각 프로그램 정원 이하”로 편성, 초과 불과)
                </div>
                <div className="text-[#FF3B30]">
                  ⑤ 하루전 또는 당일 결석자 취소는 불가능합니다.
                </div>
                <div>
                  ⑥ 대형버스를 이용하는 학교나 단체는 ‘알로이시오힐링센터’
                  앞(SK주유소 뒤편)에서 하차하시면 됩니다. (※시내버스 이용:
                  ‘알로이시오기념병원정류장’에서 하차)
                </div>
                <div>
                  ⑦ 학생들은 활동에 편한 복장으로 참여할 수 있도록 협조
                  부탁드립니다.
                </div>
                <div>
                  ⑧ 통합반 학생이나 휠체어 등이 필요한 학생이 있으시면 사전에
                  알려주세요.
                </div>
                <div>⑨ 응급상황 발생 시 인솔교사의 지도가 필요합니다.</div>
                <div className="text-[#FF3B30]">
                  ⑩ 기지 내 보건인력은 없으며, 몸이 불편한 학생이 잠시 쉴 수
                  있는 공간은 준비되어 있습니다.
                </div>
                <div>
                  ⑪ 활동 시 사진 촬영이 있습니다. 홍보용으로 사용하지는
                  않습니다. 촬영동의서가 필요하면 양식을 보내드리겠습니다.
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="text-center text-4xl">프로그램 신청</div>
            <div className="text-center text-lg">
              [예약가능]표시된 시간대를 직접 클릭하여 신청
            </div>
          </div>
          <ReactCalender />
        </div>
      </div>
    </div>
  );
};

export default Page;
