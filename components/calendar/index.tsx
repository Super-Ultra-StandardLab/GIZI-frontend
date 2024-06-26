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

const ReactCalender = () => {
  const [value, onChange] = useState(new Date());
  const { openModal } = useModal();
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
    return () => {
      handleCalendar();
    };
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

  return (
    <div className="w-full">
      <button onClick={() => console.log(moment(new Date()).format("MM"))}>
        ing
      </button>
      <Calendar
        locale="ko"
        // calendarType="gregory"
        onChange={() => onChange}
        value={value}
        formatDay={(_, date) => moment(date).format("DD")}
        tileContent={({ date, view }) => {
          let state = "";

          const daySchedules = schedule.filter(
            (x) => x.date === moment(date).format("YYYY-MM-DD")
          );

          return (
            <div className="text-xs">
              {daySchedules.findIndex((i) => i.time.includes("allday")) !==
              -1 ? (
                <div>
                  {
                    daySchedules.find((i) => i.time.includes("allday"))
                      ?.organization
                  }
                  (종일)
                </div>
              ) : (
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
                  className="hover:text-[#777]"
                >
                  종일
                </div>
              )}
              {daySchedules.findIndex((i) => i.time.includes("morning")) !==
              -1 ? (
                <div>
                  {
                    daySchedules.find((i) => i.time.includes("morning"))
                      ?.organization
                  }
                  (오전)
                </div>
              ) : (
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
                  className="hover:text-[#777]"
                >
                  오전
                </div>
              )}
              {daySchedules.findIndex((i) => i.time.includes("afternoon")) !==
              -1 ? (
                <div>
                  {
                    daySchedules.find((i) => i.time.includes("afternoon"))
                      ?.organization
                  }
                  (오후)
                </div>
              ) : (
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
                  className="hover:text-[#777]"
                >
                  오후
                </div>
              )}
            </div>
          );
        }}
      />
    </div>
  );
};

export default ReactCalender;
