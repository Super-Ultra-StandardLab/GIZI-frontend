"use client";

import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "./styles.css";
import { getCalendar } from "@/api";
import moment from "moment";
import useModal from "@/hooks/useModal";
import Apply from "../(modal)/Apply";
import ApplyInfoType from "@/type/applyInfoType.interface";
import ApplyPropsType from "@/type/applyPropsType.interface";
import { useAtom } from "jotai";
import { loginContext, refreshContext } from "@/context";
import Info from "../(modal)/Info";

const ReactCalender = () => {
  const [value, onChange] = useState(new Date());
  const { openModal } = useModal();
  const [isLogined, setIsLogined] = useAtom(loginContext);
  const [schedule, setSchedule] = useState([
    {
      programId: 2000,
      programName: "",
      time: "",
      date: "",
      email: "",
      name: "",
      phone: "",
      organization: "",
      participant: 0,
      grade: "",
      question: "",
    },
  ]);

  useEffect(() => {
    // return () => {
    handleCalendar();
    // };
  }, []);

  const handleCalendar = async () => {
    const result = await getCalendar({
      year: Number(moment(new Date()).format("YYYY")),
      month: Number(moment(new Date()).format("MM")),
    });
    if (result.success === false) return -1;
    setSchedule(result);
  };

  const onClickOpenForm = ({
    info,
    position,
  }: {
    info: ApplyPropsType;
    position?: any;
  }) => {
    window.scroll({
      top: position.y - screen.height * 0.1,
      behavior: "smooth",
    });
    openModal({
      component: <Apply info={info} position={position} />,
    });
  };

  const onClickOpenInfo = ({ info }: { info: ApplyInfoType }) => {
    if (!localStorage.getItem("access_token")) {
      alert(
        "신청내역 조회는 관리자만 가능합니다. \n 단체명이 아닌 종일/오전/오후 로 표시된 다른 일정을 선택해주세요."
      );
      return -1;
    }
    window.scroll({
      top: (info.y ?? 0) - screen.height * 0.1,
      behavior: "smooth",
    });
    openModal({
      component: <Info info={info} />,
    });
  };

  return (
    <div className="w-full">
      <Calendar
        locale="ko"
        onChange={() => onChange}
        value={value}
        formatDay={(_, date) => moment(date).format("DD")}
        tileContent={({ date, view }) => {
          const daySchedules = schedule.filter(
            (x) => x.date === moment(date).format("YYYY-MM-DD")
          );

          const allday = daySchedules.find((i) => i.time.includes("allday"));
          const morning = daySchedules.find((i) => i.time.includes("morning"));
          const afternoon = daySchedules.find((i) =>
            i.time.includes("afternoon")
          );

          return (
            <div className="text-xs w-full">
              {!(
                Number(moment(date).format("YYYYMMDD")) <
                  Number(moment(new Date()).format("YYYYMMDD")) ||
                moment(date).format("dddd") === "Saturday" ||
                moment(date).format("dddd") === "Sunday"
              ) && (
                <>
                  {daySchedules.findIndex((i) => i.time.includes("allday")) !==
                  -1 ? (
                    <div
                      onClick={(e) =>
                        onClickOpenInfo({
                          info: {
                            programId: allday?.programId ?? 0,
                            programName: allday?.programName ?? "",
                            time: "allday",
                            date,
                            email: allday?.email ?? "",
                            name: allday?.name ?? "",
                            phone: allday?.phone ?? "",
                            organization: allday?.organization ?? "",
                            participant: allday?.participant ?? 0,
                            grade: allday?.grade ?? "",
                            question: allday?.question ?? "",
                            x: e.pageX,
                            y: e.pageY,
                          },
                        })
                      }
                      className="text-left hover:text-[#777]"
                    >
                      {
                        daySchedules.find((i) => i.time.includes("allday"))
                          ?.organization
                      }
                      (종일)
                    </div>
                  ) : (
                    daySchedules.findIndex((i) =>
                      i.time.includes("afternoon")
                    ) === -1 &&
                    daySchedules.findIndex((i) =>
                      i.time.includes("morning")
                    ) === -1 && (
                      <div
                        onClick={(e) =>
                          onClickOpenForm({
                            info: {
                              programName: `학교단체체험(종일)`,
                              date,
                              time: "allday",
                            },
                            position: { x: e.pageX, y: e.pageY },
                          })
                        }
                        className="text-left hover:text-[#777]"
                      >
                        종일
                      </div>
                    )
                  )}
                  {daySchedules.findIndex((i) => i.time.includes("morning")) !==
                  -1 ? (
                    <div
                      onClick={(e) =>
                        onClickOpenInfo({
                          info: {
                            programId: morning?.programId ?? 0,
                            programName: morning?.programName ?? "",
                            time: "morning",
                            date,
                            email: morning?.email ?? "",
                            name: morning?.name ?? "",
                            phone: morning?.phone ?? "",
                            organization: morning?.organization ?? "",
                            participant: morning?.participant ?? 0,
                            grade: morning?.grade ?? "",
                            question: morning?.question ?? "",
                            x: e.pageX,
                            y: e.pageY,
                          },
                        })
                      }
                      className="text-left hover:text-[#777]"
                    >
                      {
                        daySchedules.find((i) => i.time.includes("morning"))
                          ?.organization
                      }
                    </div>
                  ) : (
                    daySchedules.findIndex((i) => i.time.includes("allday")) ===
                      -1 && (
                      <div
                        onClick={(e) =>
                          onClickOpenForm({
                            info: {
                              date,
                              time: "morning",
                              programName: "학교단체체험(오전)",
                            },
                            position: { x: e.pageX, y: e.pageY },
                          })
                        }
                        className="text-left hover:text-[#777]"
                      >
                        오전
                      </div>
                    )
                  )}
                  {daySchedules.findIndex((i) =>
                    i.time.includes("afternoon")
                  ) !== -1 ? (
                    <div
                      onClick={(e) =>
                        onClickOpenInfo({
                          info: {
                            programId: afternoon?.programId ?? 0,
                            programName: afternoon?.programName ?? "",
                            time: "afternoon",
                            date,
                            email: afternoon?.email ?? "",
                            name: afternoon?.name ?? "",
                            phone: afternoon?.phone ?? "",
                            organization: afternoon?.organization ?? "",
                            participant: afternoon?.participant ?? 0,
                            grade: afternoon?.grade ?? "",
                            question: afternoon?.question ?? "",
                            x: e.pageX,
                            y: e.pageY,
                          },
                        })
                      }
                      className="text-left hover:text-[#777]"
                    >
                      {
                        daySchedules.find((i) => i.time.includes("afternoon"))
                          ?.organization
                      }
                    </div>
                  ) : (
                    daySchedules.findIndex((i) => i.time.includes("allday")) ===
                      -1 && (
                      <div
                        onClick={(e) =>
                          onClickOpenForm({
                            info: {
                              date,
                              time: "afternoon",
                              programName: "학교단체체험(오후)",
                            },
                            position: { x: e.pageX, y: e.pageY },
                          })
                        }
                        className="text-left hover:text-[#777]"
                      >
                        오후
                      </div>
                    )
                  )}
                </>
              )}
            </div>
          );
        }}
      />
    </div>
  );
};

export default ReactCalender;
