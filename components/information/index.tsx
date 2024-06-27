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
import ApplyInfoType from "@/type/applyInfoType.interface";
import { deleteSubmit } from "@/api";

const SubmitInfoContainer = ({
  programId,
  programName,
  time,
  date,
  email,
  name,
  phone,
  organization,
  participant,
  grade,
  question,
  x,
  y,
}: ApplyInfoType) => {
  const { closeModal } = useModal();

  const handleSubmit = async () => {
    const result = await deleteSubmit(programId ?? 0);
    if (result.success === false) return -1;
    location.reload();
    closeModal();
    // console.log(result);
  };

  return (
    <div
      className="w-[20vw] absolute text-[#AAAAAA] bg-white rounded-2xl shadow-2xl p-8 z-50 text-sm"
      style={{
        left: `${x}px`,
        top: `${y}px`,
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
        <div className="text-black">신청내역 관리</div>
        <div className="">
          <div className="text-[1.3rem] text-black font-bold">
            {organization}
          </div>
          <div className="p-4 flex flex-col gap-4 w-full">
            <div className="flex gap-2 justify-between w-full">
              <div className="flex gap-2 w-[28%]">
                <Image src={Time} width={15} height={15} alt="CLOCK_ICON" />
                일시
              </div>
              <div className="flex gap-2 w-[70%]">
                <div className="text-black">
                  {moment(date).format("YYYY년 MM월 DD일")}[
                  {time === "morning"
                    ? "오전"
                    : time === "afternoon"
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
                <div className="text-black">{email}</div>
              </div>
            </div>
            <div className="flex gap-2 justify-between w-full">
              <div className="flex gap-2 w-[28%]">
                <Image src={Profile} width={15} height={15} alt="CLOCK_ICON" />
                성명
              </div>
              <div className="flex gap-2 w-[70%]">
                <div className="text-black">{name}</div>
              </div>
            </div>
            <div className="flex gap-2 justify-between w-full">
              <div className="flex gap-2 w-[28%]">
                <Image src={Phone} width={15} height={15} alt="CONTACT_ICON" />
                연락처
              </div>
              <div className="flex gap-2 w-[70%]">
                <div className="text-black">{phone}</div>
              </div>
            </div>
            <div className="flex gap-2 justify-between w-full">
              <div className="flex gap-2 w-[28%]">
                <Image src={Group} width={15} height={15} alt="GROUP_ICON" />
                인원수
              </div>
              <div className="flex gap-2 w-[70%]">
                <div className="text-black">{participant}</div>
              </div>
            </div>
            <div className="flex gap-2 justify-between w-full">
              <div className="flex gap-2 w-[28%]">
                <Image src={Grade} width={15} height={15} alt="GRADE_ICON" />
                참여대상
              </div>
              <div className="flex gap-2 w-[70%]">
                <div className="text-black">{grade}</div>
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
                    value={question}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex">
        <button
          className="ml-auto flex justify-center bg-[#FF3B30] px-4 py-2 mx-3 rounded-lg hover:bg-[#ff7070]"
          onClick={() => handleSubmit()}
        >
          <div className="flex my-auto gap-2">
            <div className="text-white text-base">신청삭제</div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default SubmitInfoContainer;
