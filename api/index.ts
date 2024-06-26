import ApplyInfoType from "@/type/applyInfoType.interface";
import axios from "axios";
import moment from "moment";

export const submit = async ({
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
}: ApplyInfoType) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_URL}submit`,
      {
        programName,
        time,
        date: moment(date).format("YYYY-MM-DD"),
        email,
        name,
        phone,
        organization,
        participant,
        grade,
        question,
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return { success: false, message: "예약 신청에 실패하였습니다." };
  }
};

export const getCalendar = async ({
  year,
  month,
}: {
  year: number;
  month: number;
}) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVER_URL}submit/calendar?year=${year}&month=${month}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return { success: false, message: "신청 캘린더 조회에 실패했습니다." };
  }
};

export const getSubmit = async () => {
  try {
    const response = await axios.get("http://10.150.149.136:8090/user", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return { success: false, message: "유저 정보 호출에 실패하였습니다." };
  }
};

export const deleteUser = async () => {
  try {
    const response = await axios.delete("http://10.150.149.136:8090/user", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return { success: false, message: "유저 탈퇴에 실패하였습니다." };
  }
};
