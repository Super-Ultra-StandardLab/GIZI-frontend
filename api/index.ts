import ApplyInfoType from "@/type/applyInfoType.interface";
import axios from "axios";
import moment from "moment";

export const login = async ({
  userId,
  password,
}: {
  userId: string;
  password: string;
}) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_URL}auth/admin/login`,
      {
        userId,
        password,
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return { success: false, message: "관리자 로그인에 실패하였습니다." };
  }
};

export const admin = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVER_URL}auth/admin`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return { success: false, message: "관리자 인증에 실패했습니다." };
  }
};

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

export const getSubmit = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVER_URL}submit`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return { success: false, message: "신청 조회에 실패했습니다." };
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

// export const getSubmit = async () => {
//   try {
//     const response = await axios.get("http://10.150.149.136:8090/user", {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("access_token")}`,
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.log(error);
//     return { success: false, message: "유저 정보 호출에 실패하였습니다." };
//   }
// };

export const deleteSubmit = async (programId: number) => {
  try {
    const response = await axios.delete(
      `${process.env.NEXT_PUBLIC_SERVER_URL}submit/${programId}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return { success: false, message: "신청 삭제에 실패하였습니다." };
  }
};

export const uploadImage = async (image: File) => {
  try {
    console.log("file", image);
    const file = new FormData();
    file.append("file", image);
    console.log("폼", file);

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_URL}upload`,
      file,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return { success: false, message: "이미지 업로드에 실패하였습니다." };
  }
};
