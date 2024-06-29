"use client";

import { admin, getSubmit, login } from "@/api";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Post from "../post";
import { useAtom } from "jotai";
import { loginContext } from "@/context";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useAtom(loginContext);
  const router = useRouter();

  useEffect(() => {
    return () => {
      const token = localStorage.getItem("access_token");
      if (token) return setIsLogin(true);
      setIsLogin(false);
    };
  }, []);

  const handleLogin = async () => {
    if (userId === "") return alert("아이디가 입력되지 않았습니다.");
    if (password === "") return alert("비밀번호가 입력되지 않았습니다.");
    const result = await login({ userId, password });
    if (result.success === false) {
      setUserId("");
      setPassword("");
      return alert("로그인에 실패하였습니다.");
    }
    router.push("/");
    alert("로그인에 성공하였습니다.");
    localStorage.setItem("access_token", result.token);
    setIsLogin(true);
  };

  const onClickLogout = () => {
    localStorage.clear();
    setIsLogin(false);
    alert("로그아웃 되었습니다.");
  };

  const ing = async () => {
    const result = await getSubmit();
    if (result.success === false) return alert("로그인에 실패하였습니다.");
    alert("로그인에 성공하였습니다.");
  };

  return (
    <div className="w-[45%] flex flex-col justify-center">
      <div className="w-full h-[30vw] flex justify-center rounded-2xl bg-[#ffffff] shadow-md">
        {isLogin ? (
          <div className="w-[70%] h-[50%] my-auto flex flex-col gap-8 justify-between">
            <div className="text-3xl font-bold mx-auto my-4">
              관리자 계정 로그아웃
            </div>
            <button
              className="w-full h-[50px] rounded-md bg-red-400 font-bold"
              onClick={() => onClickLogout()}
            >
              로그아웃
            </button>
          </div>
        ) : (
          <form
            className="w-[70%] h-[70%] my-auto flex flex-col gap-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="text-3xl font-bold mx-auto my-4">
              관리자 계정 로그인
            </div>
            <input
              className="w-full h-[50px] rounded-md mx-auto bg-[#ececec] p-3"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              placeholder="Id"
            />
            <input
              className="w-full h-[50px] rounded-md mx-auto bg-[#ececec] p-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <button
              className="w-full h-[50px] rounded-md bg-red-400 font-bold"
              onClick={() => handleLogin()}
            >
              로그인
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
