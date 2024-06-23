import Link from "next/link";

const Page = () => {
  return (
    <div className="w-screen h-screen flex justify-center bg-red-100 text-2xl font-bold">
      <div className="w-[55%] py-40 bg-blue-100 relative">
        {/* <div> */}
        <div className="bg-[#FFF27F] w-[500px] h-[300px] rounded-[50%] mx-auto flex justify-center mb-[-15%]">
          <div className="mt-16 text-4xl">단체체험 프로그램</div>
        </div>
        <div className="border-2 border-[#E6E6E6] rounded-3xl w-[100%] h-[500px] p-10 bg-white absolute">
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
        {/* </div> */}
      </div>
    </div>
  );
};

export default Page;
