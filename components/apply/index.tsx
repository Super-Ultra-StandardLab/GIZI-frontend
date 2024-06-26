"use client";

import useModal from "@/hooks/useModal";
import ApplyPropsType from "@/type/applyPropsType.interface";
import moment from "moment";
import Image from "next/image";
import Close from "@/public/assets/close.svg";
import Time from "@/public/assets/time.svg";
import Mail from "@/public/assets/mail.svg";
import Profile from "@/public/assets/profile.svg";
import Phone from "@/public/assets/phone.svg";
import Group from "@/public/assets/group.svg";
import Ask from "@/public/assets/ask.svg";
import Grade from "@/public/assets/grade.svg";
import Apply from "@/public/assets/apply.svg";
import { useState } from "react";
import { submit } from "@/api";

const ApplyFormContainer = ({
  info,
  position,
}: {
  info: ApplyPropsType;
  position: { x: number; y: number };
}) => {
  const [applyInfo, setApplyInfo] = useState({
    programName: info.programName,
    time: info.time,
    date: info.date,
    email: "",
    name: "",
    phone: "010-1234-5678", // 일단 작동되도록 임시값. 번호 인증방식 답변 받아야함
    organization: "",
    participant: 50,
    grade: "",
    question: "",
  });
  const [isVerified, setIsVerified] = useState(false);
  const { closeModal } = useModal();

  const handleSubmit = async () => {
    if (applyInfo.organization.length === 0) {
      alert("소속단체를 입력해주세요.");
      return -1;
    }
    const email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    if (!email_regex.test(applyInfo.email)) {
      alert("이메일 형식이 올바르지 않습니다.");
      return -1;
    }
    // if (applyInfo.email.length === 0) {alert("이"); return -1};
    if (applyInfo.name.length === 0) {
      alert("신청자 성명을 입력해주세요.");
      return -1;
    }
    if (applyInfo.phone.length === 0) {
      alert("연락처를 입력해주세요.");
      return -1;
    }
    if (applyInfo.grade.length === 0) {
      alert("참가 대상을 입력해주세요.(ex - 학년)");
      return -1;
    }

    const result = await submit(applyInfo);
    if (result.success === false) return -1;
    closeModal();
    console.log(result);
  };

  return (
    <div
      className="w-[20vw] absolute text-[#AAAAAA] bg-white rounded-2xl shadow-2xl p-8 z-50 text-sm"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="relative flex flex-col gap-4">
        <Image
          src={Close}
          alt="CROSS_ICON_FOR_CANCEL"
          className="right-0 absolute cursor-pointer"
          onClick={() => closeModal()}
        />
        <div className="text-black">프로그램 신청</div>
        <div className="">
          <input
            className="w-full h-[2.2rem] placeholder:text-[1.3rem] text-[1.3rem] p-2 text-black"
            value={applyInfo.organization}
            onChange={(e) =>
              setApplyInfo((prev) => ({
                ...prev,
                organization: e.target.value,
              }))
            }
            placeholder="학교/단체명을 입력해주세요."
          />
          {/* <div>{moment(applyInfo.date).format("YYYY년 MM월 DD일")}</div> */}
          <div className="p-4 flex flex-col gap-4 w-full">
            <div className="flex gap-2 justify-between w-full">
              <div className="flex gap-2 w-[28%]">
                <Image src={Time} width={15} height={15} alt="CLOCK_ICON" />
                일시
              </div>
              <div className="flex gap-2 w-[70%]">
                <div>
                  {moment(applyInfo.date).format("YYYY년 MM월 DD일")}[
                  {applyInfo.time === "morning"
                    ? "오전"
                    : applyInfo.time === "afternoon"
                    ? "오후"
                    : "종일"}
                  ]
                </div>
              </div>
            </div>
            <div className="flex gap-2 justify-between w-full">
              <div className="flex gap-2 w-[28%]">
                <Image src={Mail} width={15} height={15} alt="EMAIL_ICON" />
                email
              </div>
              <div className="flex gap-2 w-[70%]">
                <div>
                  <input
                    className="w-full"
                    value={applyInfo.email}
                    onChange={(e) =>
                      setApplyInfo((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    placeholder="gizi1968@naver.com"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-2 justify-between w-full">
              <div className="flex gap-2 w-[28%]">
                <Image src={Profile} width={15} height={15} alt="CLOCK_ICON" />
                성명
              </div>
              <div className="flex gap-2 w-[70%]">
                <div>
                  <input
                    className="w-full"
                    value={applyInfo.name}
                    onChange={(e) =>
                      setApplyInfo((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                    placeholder="신청자 성명을 입력해주세요"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-2 justify-between w-full">
              <div className="flex gap-2 w-[28%]">
                <Image src={Phone} width={15} height={15} alt="CONTACT_ICON" />
                연락처
              </div>
              <div className="flex gap-2 w-[70%]">
                <div>
                  <input
                    className="w-full"
                    value={applyInfo.phone}
                    onChange={(e) =>
                      setApplyInfo((prev) => ({
                        ...prev,
                        phone: e.target.value,
                      }))
                    }
                    disabled
                    placeholder="010-XXXX-XXXX"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-2 justify-between w-full">
              <div className="flex gap-2 w-[28%]">
                <Image src={Group} width={15} height={15} alt="GROUP_ICON" />
                인원수
              </div>
              <div className="flex gap-2 w-[70%]">
                <div>
                  <input
                    className="w-full"
                    type="number"
                    value={applyInfo.participant}
                    min="50"
                    max="170"
                    defaultValue={50}
                    onChange={(e) =>
                      setApplyInfo((prev) => ({
                        ...prev,
                        participant: Number(e.target.value),
                      }))
                    }
                    placeholder="n명"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-2 justify-between w-full">
              <div className="flex gap-2 w-[28%]">
                <Image src={Grade} width={15} height={15} alt="GRADE_ICON" />
                참여대상
              </div>
              <div className="flex gap-2 w-[70%]">
                <div>
                  <input
                    className="w-full"
                    value={applyInfo.grade}
                    onChange={(e) =>
                      setApplyInfo((prev) => ({
                        ...prev,
                        grade: e.target.value,
                      }))
                    }
                    placeholder="ex) 1학년"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-2 justify-between w-full">
              <div className="flex gap-2 w-[28%]">
                <Image
                  src={Ask}
                  width={15}
                  height={15}
                  alt="ASK_ICON"
                  className="mt-1 mb-auto"
                />
                <div className="text-center">문의사항</div>
              </div>
              <div className="flex gap-2 w-[70%]">
                <div className="w-full">
                  <textarea
                    className="w-full resize-none h-[10vh] bg-[#f3f3f3]"
                    value={applyInfo.question}
                    onChange={(e) =>
                      setApplyInfo((prev) => ({
                        ...prev,
                        question: e.target.value,
                      }))
                    }
                    placeholder=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex">
        <button
          className="ml-auto flex justify-center bg-[#f5f5f5] px-4 py-2 mx-3 rounded-lg hover:bg-[#ececec]"
          onClick={() => handleSubmit()}
        >
          <div className="flex my-auto gap-2">
            <Image src={Apply} alt="APPLY_BTN" className="w-[1vw]" />
            <div className="text-black text-base">신청하기</div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ApplyFormContainer;
