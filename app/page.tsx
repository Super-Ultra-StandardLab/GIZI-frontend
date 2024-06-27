import YouTubePage from "@/components/youtube";
import Image from "next/image";
import InfoIcon from "@/public/assets/info.svg";
import Link from "next/link";
import PdfBtn from "@/components/pdf/pdfbtn";

export default function Home() {
  return (
    <div className="w-screen flex flex-col gap-20">
      <div className="w-[100%] h-[700px] flex justify-center bg-blue-100">
        <div className="w-[70%] h-[80%] flex justify-between my-auto">
          <div className="text-[58px] font-bold my-auto">
            알로이시오기지1968은
            <br />
            <span className="underline decoration-[#FFF27F] decoration-[30px] underline-offset-[-20px]">
              삶의 기본기
            </span>
            와{" "}
            <span className="underline decoration-[#B8F1B7] decoration-[30px] underline-offset-[-20px]">
              미래역량
            </span>
            을
            <br /> 키우는 미래교육센터입니다.
          </div>
          <div className="w-[40%] my-auto">
            <YouTubePage />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-[75%] flex justify-between">
          <div className="w-[48%] flex flex-col gap-72">
            <div className="w-[100%] h-[400px] relative">
              <div className="w-[100%] flex justify-center mb-[-30px]">
                <div className="w-[50%] h-[70px] bg-[#FFF27F] rounded-full flex flex-col justify-center z-20">
                  <div className="text-center text-[30px] font-bold">
                    단체체험 프로그램
                  </div>
                </div>
              </div>
              <div className="w-[100%] h-[620px] bg-white p-10 border-2 border-[#E6E6E6] rounded-3xl absolute flex flex-col gap-8 text-xl">
                <div className="mt-10">
                  단체 체험 프로그램은 초·중·고등학교 진로체험, 중학교
                  자유학년제 및 고등학교 체험활동 등을 통해 진로 탐색을
                  구체화하고 자신의 역량과 소질을 찾을 수 있도록 구성되어
                  있습니다.
                </div>
                <div className="flex flex-col gap-4 p-10">
                  <div className="flex">
                    <div className="rounded-full bg-[#f7f7f7] py-2 px-4 font-bold">
                      대상
                    </div>
                    <div className="my-auto mx-4">
                      초(3~6학년)·중·고 학교단체
                    </div>
                  </div>
                  <div className="flex">
                    <div className="rounded-full bg-[#f7f7f7] py-2 px-4 font-bold">
                      운영시간
                    </div>
                    <div className="my-auto mx-4">월~금 09:00 ~ 15:30</div>
                  </div>
                  <div className="flex">
                    <div className="rounded-full bg-[#f7f7f7] py-2 px-4 font-bold">
                      신청방법
                    </div>
                    <div className="my-auto mx-4">온라인 접수 후 개별 확정</div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <Link
                    href="/programs"
                    className="w-[48%] p-7 rounded-3xl text-white bg-[#2F99C8] flex flex-col"
                  >
                    {/* <button className="w-[48%] p-7 rounded-3xl text-white bg-[#2F99C8]"> */}
                    <div className="text-[24px] font-bold mx-auto">
                      학교단체체험
                    </div>
                    <div className="mx-auto">신청하기</div>
                    {/* </button> */}
                  </Link>
                  <PdfBtn />
                </div>
              </div>
            </div>
            <div className="w-[100%] bg-white p-10 border-2 border-[#f7f7f7] rounded-3xl flex flex-col gap-8 text-lg">
              <div className="rounded-full bg-[#f0f0f0] py-2 px-10 font-bold text-2xl mr-auto">
                이용시 유의사항
              </div>
              <div className="flex gap-2">
                <Image src={InfoIcon} alt="INFO_ICON" />
                <div>
                  기본프로그램 5개 운영, 인원수에 따라 최대 9개까지 프로그램
                  추가 개설
                </div>
              </div>
              <div className="flex gap-2">
                <Image src={InfoIcon} alt="INFO_ICON" />
                <div>최소 50명 최대 160명 까지 체험 가능 </div>
              </div>
              <div className="flex gap-2">
                <Image src={InfoIcon} alt="INFO_ICON" />
                <div>
                  전일제는 점심식사 장소 제공(잔반과 쓰레기는 학교 또는 업체에서
                  처리), 반일제는 점심식사 불가
                </div>
              </div>
              <div className="flex gap-2">
                <Image src={InfoIcon} alt="INFO_ICON" />
                <div>교통편은 학교에서 마련</div>
              </div>
            </div>
          </div>
          <div className="w-[48%] flex flex-col gap-72">
            <div className="w-[100%] h-[400px] relative">
              <div className="w-[100%] flex justify-center mb-[-30px]">
                <div className="w-[50%] h-[70px] bg-[#B8F1B7] rounded-full flex flex-col justify-center z-20">
                  <div className="text-center text-[30px] font-bold">
                    방과후학교 프로그램
                  </div>
                </div>
              </div>
              <div className="w-[100%] h-[620px] bg-white p-10 border-2 border-[#E6E6E6] rounded-3xl absolute flex flex-col gap-8 text-xl justify-between ">
                <div className="mt-10">
                  통합방과후학교 프로그램은 단발성이 아닌 연속적이고 체계적인
                  단계별 구성으로 학생들의 지속적인 성장에 초점을 둔
                  프로그램입니다.
                </div>
                <div className="flex flex-col gap-4 p-10">
                  <div className="flex">
                    <div className="rounded-full bg-[#f7f7f7] py-2 px-4 font-bold">
                      대상
                    </div>
                    <div className="my-auto mx-4">
                      협약학교 및 부산 소재 초등학교
                    </div>
                  </div>
                  <div className="flex">
                    <div className="rounded-full bg-[#f7f7f7] py-2 px-4 font-bold">
                      기간
                    </div>
                    <div className="my-auto mx-4">
                      2개월(8주)간 주 1회 총 16차시
                    </div>
                  </div>
                  <div className="flex">
                    <div className="rounded-full bg-[#f7f7f7] px-4 font-bold w-[160px] flex flex-col justify-center">
                      <div className="text-center">신청방법</div>
                    </div>
                    <div className="mx-4">
                      온라인 접수, 선착순 마감 (학교별로 일괄신청시
                      통합방과후학교 담당자에게 문의)
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <button className="w-[48%] p-7 rounded-3xl text-white bg-[#2F99C8]">
                    <div className="text-[24px] font-bold">방과후학교</div>
                    <div className="">신청하기</div>
                  </button>
                  <PdfBtn />
                </div>
              </div>
            </div>
            <div className="w-[100%] bg-white p-10 border-2 border-[#f7f7f7] rounded-3xl flex flex-col gap-8 text-lg">
              <div className="rounded-full bg-[#f0f0f0] py-2 px-10 font-bold text-2xl mr-auto">
                이용시 유의사항
              </div>
              <div className="flex gap-2">
                <Image src={InfoIcon} alt="INFO_ICON" />
                <div>모집정원의 50%미만 신청시 폐강될 수 있습니다.</div>
              </div>
              <div className="flex gap-2">
                <Image src={InfoIcon} alt="INFO_ICON" />
                <div>협약 학교대상 셔틀버스를 운행함</div>
              </div>
              <div className="flex gap-2">
                <Image src={InfoIcon} alt="INFO_ICON" />
                <div>
                  셔틀버스 노선은 별도공지 (감천초, 구평초, 남부민초, 서천초,
                  송도초, 아미초, 알로이시오초, 옥천초, 천마초, 토성초)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
