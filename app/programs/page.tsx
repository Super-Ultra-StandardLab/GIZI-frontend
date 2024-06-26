import ReactCalender from "@/components/calendar";
import Link from "next/link";

const Page = () => {
  return (
    <div className="w-screen h-[300vh] flex justify-center text-2xl font-bold overflow-visible">
      <div className="w-[55%] py-32 flex flex-col gap-64">
        <div className="flex flex-col justify-center mb-[-200px]">
          <div className="text-center text-4xl">프로그램 신청 및 예약 확인</div>
        </div>
        <ReactCalender />
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
            <button className="px-10 py-8 bg-[#EEF7FD] rounded-3xl">
              프로그램 다운로드
            </button>
            <button className="px-10 py-8 bg-[#EEF7FD] rounded-3xl">
              취소신청서 다운로드
            </button>
          </div>
        </div>
        <div className="h-[500px] w-full">
          <table className="w-full border-collapse text-center border-4 border-red-500 rounded-3xl border-spacing-0 bg-white">
            <thead className="bg-cyan-500">
              <tr className="bg-red-500 h-24">
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
                  <span className="line-through">35,000원</span>
                  <br />
                  28,000원(단체할인가)
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
                  <span className="line-through">35,000원</span>
                  <br />
                  28,000원(단체할인가)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Page;
